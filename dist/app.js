(() => {
  'use strict';

  const { t } = window.portfolioLocale || { t: k => k };

  // ==========================================================================
  // MOBILE NAVIGATION
  // ==========================================================================
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');

  function closeMenu(restoreFocus = false) {
    if (!mobileNav || !menuButton) return;
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', t('menuOpen'));
    if (restoreFocus) menuButton.focus();
  }

  function onMediaChange(query, handler) {
    if (!query) return;
    if (query.addEventListener) query.addEventListener('change', handler);
    else if (query.addListener) query.addListener(handler);
  }

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      mobileNav.hidden = isOpen;
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', t(isOpen ? 'menuOpen' : 'menuClose'));
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => closeMenu());
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !mobileNav.hidden) {
        event.preventDefault();
        closeMenu(true);
      }
    });

    const desktopQuery = window.matchMedia && window.matchMedia('(min-width: 1200px)');
    function syncMenuBreakpoint() {
      if (!desktopQuery || !desktopQuery.matches) return;
      const focused = document.activeElement;
      const focusWasInMenu = mobileNav.contains(focused) || focused === menuButton;
      closeMenu();
      if (focusWasInMenu) {
        const links = [...document.querySelectorAll('.desktop-nav a')];
        const destination = links.find(link => link.hash === focused.hash) || links[0];
        if (destination) destination.focus();
      }
    }
    onMediaChange(desktopQuery, syncMenuBreakpoint);
    syncMenuBreakpoint();
  }

  // ==========================================================================
  // GALLERY FILTERING & COUNTER
  // ==========================================================================
  const cards = [...document.querySelectorAll('.photo-card')];
  const filters = [...document.querySelectorAll('.filter')];
  const gallery = document.querySelector('.gallery');
  const countEl = document.querySelector('.gallery-count');
  let visibleCards = cards.filter(card => !card.hidden);

  function updateGalleryCount() {
    filters.forEach(button => {
      const count = button.querySelector('sup');
      if (count) {
        count.textContent = cards.filter(card =>
          button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter
        ).length;
      }
    });
    if (countEl) {
      countEl.textContent = `${String(visibleCards.length).padStart(2, '0')} ${t('frames')}`;
    }
  }

  filters.forEach(button => {
    button.addEventListener('click', () => {
      filters.forEach(filter => {
        const isActive = filter === button;
        filter.classList.toggle('active', isActive);
        filter.setAttribute('aria-pressed', String(isActive));
      });

      const category = button.dataset.filter;
      cards.forEach(card => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
      });
      visibleCards = cards.filter(card => !card.hidden);
      if (gallery) gallery.classList.toggle('is-filtered', category !== 'all');
      updateGalleryCount();
      scheduleScrollUpdate();

      if (dialog && dialog.open) {
        if (visibleCards.length === 0) dialog.close();
        else showPhoto(visibleCards.includes(activeCard) ? activeCard : visibleCards[0]);
      }
    });
  });

  // ==========================================================================
  // LIGHTBOX (NATIVE DIALOG, TOUCH SWIPE & PER-IMAGE METADATA)
  // ==========================================================================
  const dialog = document.querySelector('.lightbox');
  const image = document.querySelector('#lightbox-image');
  const titleEl = document.querySelector('#lightbox-title');
  const descEl = document.querySelector('#lightbox-desc');
  const catEl = document.querySelector('#lightbox-category');
  const camEl = document.querySelector('#lightbox-camera');
  const indexEl = document.querySelector('#lightbox-index');
  let activeCard = null;
  let lightboxOpener = null;

  function showPhoto(card) {
    const currentIndex = visibleCards.indexOf(card);
    if (!dialog || !card || currentIndex < 0) return false;
    activeCard = card;
    if (image) {
      image.src = card.dataset.image;
      const imgTag = card.querySelector('img');
      image.alt = imgTag ? imgTag.alt : (card.dataset.title || '');
    }
    if (titleEl) titleEl.textContent = card.dataset.title || '';
    if (descEl) descEl.textContent = card.dataset.caption || '';
    if (catEl) catEl.textContent = card.dataset.type || '';
    if (camEl) {
      camEl.textContent = card.dataset.camera || '';
      camEl.hidden = !card.dataset.camera;
    }
    if (indexEl) {
      indexEl.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(visibleCards.length).padStart(2, '0')}`;
    }
    return true;
  }

  function navigatePhoto(direction) {
    if (!dialog || !dialog.open || visibleCards.length === 0) return;
    const currentIndex = visibleCards.indexOf(activeCard);
    const nextIndex = currentIndex < 0 ? 0 :
      (currentIndex + direction + visibleCards.length) % visibleCards.length;
    showPhoto(visibleCards[nextIndex]);
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (!dialog || typeof dialog.showModal !== 'function' || !showPhoto(card)) return;
      if (!dialog.open) {
        lightboxOpener = card;
        dialog.showModal();
        document.body.classList.add('modal-open');
      }
    });
  });

  if (dialog) {
    const closeBtn = dialog.querySelector('.lightbox-close');
    const prevBtn = dialog.querySelector('.lightbox-prev');
    const nextBtn = dialog.querySelector('.lightbox-next');
    const imageWrap = dialog.querySelector('.lightbox-image-wrap');

    if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
    if (prevBtn) prevBtn.addEventListener('click', () => navigatePhoto(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigatePhoto(1));

    dialog.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      const focusTarget = lightboxOpener && lightboxOpener.isConnected && !lightboxOpener.hidden
        ? lightboxOpener
        : filters.find(button => button.getAttribute('aria-pressed') === 'true');
      if (focusTarget) focusTarget.focus({ preventScroll: true });
      lightboxOpener = null;
      activeCard = null;
    });

    let lastSwipeTime = 0;
    dialog.addEventListener('click', event => {
      if (Date.now() - lastSwipeTime < 400) return;
      if (event.target === dialog || event.target === imageWrap) dialog.close();
    });

    // Escape and focus trapping use the native dialog behavior.
    dialog.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        navigatePhoto(event.key === 'ArrowLeft' ? -1 : 1);
      }
    });

    if (imageWrap) {
      let touchStart = null;
      imageWrap.addEventListener('touchstart', event => {
        touchStart = event.touches.length === 1 && !event.target.closest('button')
          ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
          : null;
      }, { passive: true });
      imageWrap.addEventListener('touchend', event => {
        if (!touchStart || event.touches.length > 0) {
          touchStart = null;
          return;
        }
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStart.x;
        const deltaY = touch.clientY - touchStart.y;
        touchStart = null;
        if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
          lastSwipeTime = Date.now();
          navigatePhoto(deltaX > 0 ? -1 : 1);
        }
      }, { passive: true });
      imageWrap.addEventListener('touchcancel', () => {
        touchStart = null;
      }, { passive: true });
    }
  }

  // BusGo screenshots stay separate from the photography gallery and its counts.
  const busgoScreens = [...document.querySelectorAll('[data-busgo-screen]')].map(link => ({
    link,
    image: link.querySelector('img')
  }));
  function syncBusgoScreens() {
    const { lang, dataset: { theme } } = document.documentElement;
    busgoScreens.forEach(({ link, image }) => {
      const base = `assets/busgo-${link.dataset.busgoScreen}-${lang}-${theme}`;
      link.setAttribute('href', `${base}.webp`);
      image.srcset = `${base}-800.webp 800w, ${base}.webp 1600w`;
      image.src = `${base}.webp`;
    });
  }
  syncBusgoScreens();
  document.addEventListener('portfolio:languagechange', syncBusgoScreens);
  document.addEventListener('portfolio:themechange', syncBusgoScreens);

  // TechSupport screenshots (home, services, pricing, team, booking).
  const tsScreens = [...document.querySelectorAll('[data-ts-screen]')].map(link => ({
    link,
    image: link.querySelector('img')
  }));
  function syncTsScreens() {
    const { lang } = document.documentElement;
    tsScreens.forEach(({ link, image }) => {
      const base = `assets/ts-${link.dataset.tsScreen}-${lang}`;
      link.setAttribute('href', `${base}.webp`);
      image.srcset = `${base}-800.webp 800w, ${base}.webp 1600w`;
      image.src = `${base}.webp`;
    });
    const timelineImg = document.querySelector('[data-ts-timeline-img]');
    if (timelineImg) {
      timelineImg.src = `assets/ts-home-${lang}-800.webp`;
      timelineImg.srcset = `assets/ts-home-${lang}-800.webp 800w, assets/ts-home-${lang}.webp 1600w`;
    }
  }
  syncTsScreens();
  document.addEventListener('portfolio:languagechange', syncTsScreens);

  function setupTabs(tabsSelector) {
    const tablist = document.querySelector(tabsSelector);
    if (!tablist) return;
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    if (!tabs.length || !panels.every(Boolean)) return;
    function selectTab(index) {
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[tabIndex].hidden = !selected;
      });
    }
    tabs.forEach((tab, index) => {
      panels[index].setAttribute('role', 'tabpanel');
      panels[index].setAttribute('aria-labelledby', tab.id);
      tab.addEventListener('click', () => {
        selectTab(index);
        scheduleScrollUpdate();
      });
      tab.addEventListener('keydown', event => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        selectTab(next);
        tabs[next].focus();
        scheduleScrollUpdate();
      });
    });
    selectTab(0);
    tablist.hidden = false;
  }
  setupTabs('.techsupport-tabs');
  setupTabs('.busgo-tabs');

  const projectViewer = document.querySelector('.project-viewer');
  if (projectViewer && typeof projectViewer.showModal === 'function') {
    const viewerImage = projectViewer.querySelector('img');
    const viewerTitle = projectViewer.querySelector('h2');
    const viewerScroll = projectViewer.querySelector('.project-viewer-scroll');
    const zoomButton = projectViewer.querySelector('.project-viewer-zoom');
    let screenshotOpener = null;

    function updateScreenshotMetadata() {
      if (!screenshotOpener) return;
      viewerImage.src = screenshotOpener.href;
      viewerImage.alt = screenshotOpener.querySelector('img').alt;
      const titleEl = screenshotOpener.closest('figure').querySelector('.busgo-screen-title, .techsupport-screen-title');
      viewerTitle.textContent = titleEl ? titleEl.textContent : '';
    }

    [...busgoScreens, ...tsScreens].forEach(({ link }) => {
      link.addEventListener('click', event => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        screenshotOpener = link;
        updateScreenshotMetadata();
        projectViewer.classList.remove('is-zoomed');
        zoomButton.setAttribute('aria-pressed', 'false');
        projectViewer.showModal();
        document.body.classList.add('modal-open');
        viewerScroll.scrollTo(0, 0);
      });
    });

    zoomButton.addEventListener('click', () => {
      const zoomed = projectViewer.classList.toggle('is-zoomed');
      zoomButton.setAttribute('aria-pressed', String(zoomed));
    });
    projectViewer.querySelector('.project-viewer-close').addEventListener('click', () => projectViewer.close());
    projectViewer.addEventListener('click', event => {
      if (event.target === projectViewer) projectViewer.close();
    });
    projectViewer.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      if (screenshotOpener) screenshotOpener.focus({ preventScroll: true });
      screenshotOpener = null;
    });
    document.addEventListener('portfolio:languagechange', updateScreenshotMetadata);
    document.addEventListener('portfolio:themechange', updateScreenshotMetadata);
  }

  // ==========================================================================
  // COPY EMAIL TO CLIPBOARD WITH TOAST
  // ==========================================================================
  let toastTimer;
  function toast(message) {
    const toastEl = document.querySelector('.toast');
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3500);
  }

  const copyBtn = document.querySelector('.copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'phanducthuan287@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        toast(t('copied'));
      } catch {
        toast(t('copyFallback'));
      }
    });
  }

  const copyPhoneBtn = document.querySelector('.copy-phone');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', async () => {
      const phone = '+84916426992';
      try {
        await navigator.clipboard.writeText(phone);
        toast(t('phoneCopied'));
      } catch {
        toast(t('phoneFallback'));
      }
    });
  }

  // ==========================================================================
  // PROGRESSIVE TIMELINE & SHARED SCROLL UPDATES
  // ==========================================================================
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineEl = document.querySelector('#journey-timeline');
  const timelineProgress = document.querySelector('.timeline-track-progress');
  const progressBar = document.querySelector('#scroll-progress');
  const pageTop = document.querySelector('.page-top');
  const motionQuery = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  let timelineObserver = null;
  let timelineAnimationEnabled = false;
  let scrollFramePending = false;

  function revealTimeline() {
    if (timelineObserver) timelineObserver.disconnect();
    timelineObserver = null;
    timelineAnimationEnabled = false;
    if (timelineEl) timelineEl.classList.remove('timeline-ready');
    timelineItems.forEach(item => item.classList.add('is-visible', 'is-active'));
    if (timelineProgress) timelineProgress.style.height = '100%';
  }

  function initTimeline() {
    if (timelineObserver) timelineObserver.disconnect();
    if (!timelineEl || !timelineItems.length || !motionQuery || motionQuery.matches ||
        typeof window.IntersectionObserver !== 'function') {
      revealTimeline();
      return;
    }

    try {
      timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible', 'is-active');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '50px 0px -40px 0px', threshold: 0.05 });

      timelineItems.forEach(item => {
        if (!item.classList.contains('is-visible')) timelineObserver.observe(item);
      });
      timelineAnimationEnabled = true;
      timelineEl.classList.add('timeline-ready');
    } catch {
      // Failed or unsupported enhancement must never hide the journey.
      revealTimeline();
    }
  }

  function updateScrollState() {
    scrollFramePending = false;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.max(0, Math.min(100, scrollTop / docHeight * 100)) : 0;
      progressBar.style.width = `${progress}%`;
    }
    if (pageTop) pageTop.hidden = scrollTop < 600;
    if (timelineAnimationEnabled && timelineEl && timelineProgress) {
      const rect = timelineEl.getBoundingClientRect();
      const scrolled = window.innerHeight * 0.65 - rect.top;
      const progress = rect.height > 0 ? Math.max(0, Math.min(100, scrolled / rect.height * 100)) : 0;
      timelineProgress.style.height = `${progress}%`;
    }
  }

  function scheduleScrollUpdate() {
    if (scrollFramePending) return;
    if (typeof window.requestAnimationFrame !== 'function') {
      updateScrollState();
      return;
    }
    scrollFramePending = true;
    window.requestAnimationFrame(updateScrollState);
  }

  onMediaChange(motionQuery, () => {
    initTimeline();
    scheduleScrollUpdate();
  });
  window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
  window.addEventListener('resize', scheduleScrollUpdate, { passive: true });
  window.addEventListener('load', scheduleScrollUpdate);
  initTimeline();
  updateScrollState();

  // ==========================================================================
  // SCROLL-SPY NAVIGATION
  // ==========================================================================
  const navLinks = document.querySelectorAll('.desktop-nav a');
  const sections = document.querySelectorAll('main > section[id]');

  if (sections.length > 0 && navLinks.length > 0 && typeof window.IntersectionObserver === 'function') {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            if (link.hash === `#${id}`) {
              link.setAttribute('aria-current', 'location');
            } else {
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, { rootMargin: '-25% 0px -55% 0px' });

    sections.forEach(sec => observer.observe(sec));
  }

  // ==========================================================================
  // DYNAMIC FOOTER YEAR
  // ==========================================================================
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ==========================================================================
  // LANGUAGE CHANGE EVENT LISTENER
  // ==========================================================================
  document.addEventListener('portfolio:languagechange', () => {
    updateGalleryCount();
    scheduleScrollUpdate();
    if (menuButton && mobileNav) {
      menuButton.setAttribute('aria-label', t(mobileNav.hidden ? 'menuOpen' : 'menuClose'));
    }
    if (dialog && dialog.open && activeCard) {
      showPhoto(activeCard);
    }
  });

  updateGalleryCount();
})();

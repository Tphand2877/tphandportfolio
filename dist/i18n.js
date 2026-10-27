(() => {
  let language = document.documentElement.lang === 'en' ? 'en' : 'vi';
  const bindings = [];
  // Vietnamese lives in the HTML; English is paired here with the same nodes.
  // All HTML translations below are authored constants, never visitor input.
  function bind(selector, english, attribute, vietnamese) {
    document.querySelectorAll(selector).forEach(element => {
      bindings.push({ element, attribute, vi: vietnamese ?? (attribute ? element.getAttribute(attribute) : element.innerHTML), en: english });
    });
  }
  const messages = {
    menuOpen: ['Mở menu', 'Open menu'], menuClose: ['Đóng menu', 'Close menu'],
    switchLight: ['Chuyển sang chế độ sáng', 'Switch to light mode'],
    switchDark: ['Chuyển sang chế độ tối', 'Switch to dark mode'],
    light: ['Sáng', 'Light'], dark: ['Tối', 'Dark'],
    frames: ['KHUNG HÌNH', 'FRAMES'], sample: ['ẢNH MINH HỌA', 'SAMPLE IMAGE'],
    architecture: ['KIẾN TRÚC', 'ARCHITECTURE'], nature: ['THIÊN NHIÊN', 'NATURE'], street: ['ĐỜI THƯỜNG', 'EVERYDAY LIFE'],
    copied: ['Đã sao chép địa chỉ email.', 'Email address copied.'],
    copyFallback: ['Bạn có thể sao chép: phanducthuan287@gmail.com', 'You can copy: phanducthuan287@gmail.com']
  };
  const t = key => messages[key][language === 'en' ? 1 : 0];
  bind('title', 'Peter Phan — Photography & Technology');
  bind('meta[name="description"]', 'Peter Phan — semi-professional photographer and second-year International Information Technology student. Where an artistic eye meets a technical mind.', 'content');
  bind('meta[property="og:title"]', 'Peter Phan — Photography & Technology', 'content', 'Thuận Phan — Nhiếp ảnh & Công nghệ');
  bind('meta[property="og:description"]', 'An artistic eye. A technical mind. The personal portfolio of Peter Phan.', 'content');
  bind('.skip-link', 'Skip to content');
  bind('.brand', 'Peter Phan — Home', 'aria-label');
  bind('.brand-wordmark', 'PETER PHAN<small>VISUALS & TECHNOLOGY</small>');
  bind('.desktop-nav', 'Main navigation', 'aria-label');
  bind('.mobile-nav', 'Mobile navigation', 'aria-label');
  bind('nav a[href="#about"]', 'About');
  bind('nav a[href="#work"]', 'Perspectives');
  bind('nav a[href="#journey"]', 'Journey');
  bind('.header-contact', 'Get in touch <span aria-hidden="true">↗</span>');
  bind('.mobile-nav a[href="#contact"]', 'Get in touch');
  bind('.language-switch', 'Language', 'aria-label');
  bind('#hero-title', 'Peter <em>Phan.</em>');
  bind('.hero-statement', 'An artistic eye.<br>A technical mind.');
  bind('.hero-description', 'I’m Peter Phan — a semi-professional photographer and an International Information Technology student. Exploring the world through a lens, bringing ideas to life through technology.');
  bind('.hero .button', 'Explore my perspective <span aria-hidden="true">↗</span>');
  bind('.hero-visual > img', 'Sample architectural photograph with geometric lines and contrasting light', 'alt');
  bind('.image-caption span:last-child, .sample-label', 'SAMPLE IMAGE');
  bind('.lens-label > span:last-child', 'A DIFFERENT PERSPECTIVE<small>THROUGH MY PERSPECTIVE</small>', undefined, 'MỘT GÓC NHÌN KHÁC<small>QUA GÓC NHÌN CỦA MÌNH</small>');
  bind('.hero-bottom > a', '<span class="scroll-line" aria-hidden="true"></span>SCROLL TO EXPLORE');
  bind('#about .section-index span:first-child', '01 — ABOUT');
  bind('#about-title', 'Two worlds.<br>One <em>perspective.</em>');
  bind('.signature', 'Peter Phan', undefined, 'Thuận Phan');
  bind('.about-copy > .lead', 'I believe a beautiful photograph and a great technology idea both begin with observation.');
  bind('.about-copy > p:nth-of-type(2)', 'As a semi-professional photographer, I find inspiration in light, composition and everyday moments. As a second-year International Information Technology student, I’m learning to turn curiosity into things I can create.');
  bind('.about-copy > p:nth-of-type(3)', 'This portfolio is where those two journeys meet — a space to collect perspectives, share experiences and connect with new ideas.');
  bind('.about-facts > div:first-child > span', '01 / CREATIVE PRACTICE');
  bind('.about-facts > div:first-child > strong', 'Semi-professional photography');
  bind('.about-facts > div:last-child > span', '02 / EDUCATION');
  bind('.about-facts > div:last-child > strong', 'International IT · Year 2');
  bind('#work .section-index span:first-child', '02 — PERSPECTIVES');
  bind('#work-title', 'The world,<br><em>frame by frame.</em>');
  bind('.section-heading > p', 'Light. Space. Emotion.<br>Every frame, a way to tell a story.');
  bind('.filters', 'Filter photos by category', 'aria-label');
  bind('[data-filter="all"]', 'All <sup>04</sup>');
  bind('[data-filter="architecture"]', 'Architecture');
  bind('[data-filter="nature"]', 'Nature');
  bind('[data-filter="street"]', 'Everyday life');
  const photos = [
    ['Quiet geometry', 'Sample photograph of minimalist architectural forms'],
    ['Beyond the horizon', 'Sample photograph of a mountain landscape'],
    ['Life in a moment', 'Sample photograph of a city street between buildings'],
    ['Where the light falls', 'Sample photograph of sunlight filtering through a forest']
  ];
  document.querySelectorAll('.photo-card').forEach((card, index) => {
    bind(`.photo-card:nth-child(${index + 1}) h3`, photos[index][0]);
    bind(`.photo-card:nth-child(${index + 1}) img`, photos[index][1], 'alt');
  });
  bind('.gallery-note', '<span aria-hidden="true">ⓘ</span> Sample images from Unsplash, used to illustrate the layout. Peter’s own photographs will be added here.');
  bind('#journey .section-index span:first-child', '03 — JOURNEY');
  bind('#journey-title', 'Always curious.<br>Always <em>moving forward.</em>');
  bind('.journey-intro > p', 'Two paths, one mindset:<br>look closer, keep learning.');
  bind('.journey-list article:nth-child(1) h3', 'Photography');
  bind('.journey-list article:nth-child(1) p', 'A way of observing and storytelling. Exploring light, composition and emotion through the eyes of a semi-professional photographer.');
  bind('.journey-list article:nth-child(1) .tags span:nth-child(1)', 'Light');
  bind('.journey-list article:nth-child(1) .tags span:nth-child(2)', 'Composition');
  bind('.journey-list article:nth-child(1) .tags span:nth-child(3)', 'Storytelling');
  bind('.journey-list article:nth-child(2) h3', 'Information Technology');
  bind('.journey-list article:nth-child(2) p', 'A second-year International Information Technology student. Building foundations, developing logical thinking and discovering what technology makes possible.');
  bind('.journey-list article:nth-child(2) .tags span:nth-child(1)', 'Learning');
  bind('.journey-list article:nth-child(2) .tags span:nth-child(2)', 'Logical thinking');
  bind('.journey-list article:nth-child(2) .tags span:nth-child(3)', 'Exploration');
  bind('.journey-list article:nth-child(3) h3', 'The intersection');
  bind('.journey-list article:nth-child(3) p', 'I want to connect an eye for aesthetics with a technical mindset, creating ideas with visual depth and meaningful experiences.');
  bind('#contact .section-index span:first-child', '04 — CONTACT');
  bind('#contact-title', 'A great idea<br>starts with <em>a hello.</em>');
  bind('.contact-top > p', 'Photography, technology or an interesting project?<br>I’d love to hear about it.');
  bind('.copy-email', '<span class="copy-icon" aria-hidden="true">▣</span> Copy email');
  bind('.copy-email', 'Copy email address', 'aria-label');
  bind('.footer-name', 'PETER PHAN<span>PHOTOGRAPHY & TECHNOLOGY</span>');
  bind('.copyright-name', 'Peter Phan.');
  bind('.footer > a:last-child', 'BACK TO TOP <span aria-hidden="true">↑</span>');
  bind('.lightbox-close', 'CLOSE <span aria-hidden="true">×</span>');
  bind('.lightbox-close', 'Close photo', 'aria-label');
  bind('.lightbox-prev', 'Previous photo', 'aria-label');
  bind('.lightbox-next', 'Next photo', 'aria-label');
  bind('.lightbox-bottom > p', 'Sample image from Unsplash · Not a photograph by Peter Phan.');

  bind('.hero-content .eyebrow', '<span class="tiny-cross">+</span> PHOTOGRAPHY × TECHNOLOGY', undefined, '<span class="tiny-cross">+</span> NHIẾP ẢNH × CÔNG NGHỆ');
  bind('.vertical-label', 'LIGHT. FORM. PERSPECTIVE.', undefined, 'ÁNH SÁNG. HÌNH KHỐI. GÓC NHÌN.');
  bind('.image-caption span:first-child', '01 / STUDY OF LIGHT', undefined, '01 / KHÁM PHÁ ÁNH SÁNG');
  bind('.hero-bottom > span:nth-child(2)', 'CREATIVE MIND. CURIOUS SOUL.', undefined, 'TƯ DUY SÁNG TẠO. TINH THẦN KHÁM PHÁ.');
  bind('.discipline-strip > span:nth-of-type(1)', 'PHOTOGRAPHY', undefined, 'NHIẾP ẢNH');
  bind('.discipline-strip > span:nth-of-type(2)', 'INFORMATION TECHNOLOGY', undefined, 'CÔNG NGHỆ THÔNG TIN');
  bind('.discipline-strip > span:nth-of-type(3)', 'VISUAL STORYTELLING', undefined, 'KỂ CHUYỆN BẰNG HÌNH ẢNH');
  bind('.discipline-strip > span:nth-of-type(4)', 'ALWAYS EXPLORING', undefined, 'KHÔNG NGỪNG KHÁM PHÁ');
  bind('#about .section-index span:last-child', 'THE PERSON BEHIND THE PERSPECTIVE', undefined, 'CON NGƯỜI PHÍA SAU GÓC NHÌN');
  bind('#work .section-index span:last-child', 'A VISUAL EXPLORATION', undefined, 'MỘT HÀNH TRÌNH THỊ GIÁC');
  bind('#journey .section-index span:last-child', 'ART MEETS LOGIC', undefined, 'NGHỆ THUẬT GẶP TƯ DUY LOGIC');
  bind('.journey-list article:nth-child(1) .journey-tag', 'THROUGH THE LENS', undefined, 'QUA ỐNG KÍNH');
  bind('.journey-list article:nth-child(2) .journey-tag', 'BEHIND THE SCREEN', undefined, 'PHÍA SAU MÀN HÌNH');
  bind('.journey-list article:nth-child(3) .journey-tag', 'WHAT COMES NEXT', undefined, 'CHẶNG ĐƯỜNG PHÍA TRƯỚC');
  bind('.aperture > span', 'ART <i>×</i> TECH', undefined, 'ẢNH <i>×</i> IT');
  bind('.aperture > small', 'THE INTERSECTION', undefined, 'ĐIỂM GIAO THOA');
  bind('#contact .section-index span:last-child', 'GOOD THINGS START WITH A HELLO', undefined, 'ĐIỀU TỐT ĐẸP BẮT ĐẦU TỪ LỜI CHÀO');
  bind('.contact-top .eyebrow', '<span class="tiny-cross">+</span> LET’S CREATE SOMETHING MEANINGFUL', undefined, '<span class="tiny-cross">+</span> CÙNG TẠO NÊN ĐIỀU Ý NGHĨA');
  function save(key, value) { try { localStorage.setItem(key, value); } catch { /* Optional persistence. */ } }
  function updateThemeControl() {
    const light = document.documentElement.dataset.theme === 'light';
    const button = document.querySelector('.theme-toggle');
    const label = t(light ? 'switchDark' : 'switchLight');
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', String(light));
    button.querySelector('.theme-label').textContent = t(light ? 'dark' : 'light');
    document.querySelector('meta[name="theme-color"]').content = light ? '#f5f3ed' : '#101110';
  }
  function setLanguage(next, persist = true) {
    language = next;
    document.documentElement.lang = next;
    bindings.forEach(({element, attribute, ...values}) => {
      if (attribute) element.setAttribute(attribute, values[next]);
      else element.innerHTML = values[next];
    });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
    document.querySelectorAll('.photo-card').forEach((card, index) => {
      card.dataset.title = card.querySelector('h3').textContent;
      card.dataset.type = t(card.dataset.category);
      card.querySelector('.photo-meta > span').textContent = `${card.dataset.type} / ${String(index + 1).padStart(2, '0')}`;
    });
    const menu = document.querySelector('.menu-toggle');
    menu.setAttribute('aria-label', t(menu.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen'));
    document.querySelector('.toast').classList.remove('show');
    updateThemeControl();
    if (persist) save('portfolio-language', next);
    document.dispatchEvent(new CustomEvent('portfolio:languagechange'));
  }
  window.portfolioLocale = { t, get language() { return language; } };
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    save('portfolio-theme', next);
    updateThemeControl();
  });
  setLanguage(language, false);
})();

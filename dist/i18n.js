(() => {
  'use strict';

  let language = document.documentElement.lang === 'en' ? 'en' : 'vi';

  // Vietnamese stays in the HTML for no-JavaScript reading. Keys, rather than
  // DOM positions, connect the English copy to its text and accessible labels.
  const english = {
    'meta.title': 'Peter Phan — Bridge System Engineer & Tech Founder',
    'meta.description': 'Peter Phan — Information Technology student at ICTU, founder of TechSupport, aspiring Bridge System Engineer (BrSE) and Game Developer.',
    'meta.imageAlt': 'Peter Phan — Bridge System Engineer, Game Developer and TechSupport Founder',
    'name': 'PETER PHAN',
    'brand': 'PETER PHAN<small>CODING - TECHNOLOGY - PHOTOGRAPHY</small>',
    'nav.skip': 'Skip to main content',
    'nav.home': 'Peter Phan — Home',
    'nav.mobile': 'Mobile navigation',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.photos': 'Photography',
    'nav.journey': 'Journey',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'nav.top': 'Back to top <span aria-hidden="true">↑</span>',
    'nav.topLabel': 'Back to top',
    'hero.name': 'Peter <em>Phan.</em>',
    'hero.statement': 'Designed for Power.<br>Engineered for the Future.',
    'hero.description': 'Second-year International IT student at ICTU, founder of TechSupport. Focused on Bridge System Engineering (BrSE) and Game Development, uniting technical mastery, systems thinking, and understated executive luxury.',
    'hero.profileLabel': 'Personal profile details',
    'hero.dobLabel': 'BORN',
    'hero.genderLabel': 'GENDER',
    'hero.gender': 'Male',
    'hero.originLabel': 'ORIGIN',
    'hero.origin': 'Nam Dinh — Ninh Binh',
    'hero.phoneLabel': 'PHONE',
    'hero.emailLabel': 'EMAIL',
    'hero.projects': 'Explore TechSupport <span aria-hidden="true">↗</span>',
    'hero.photos': 'View photographs',
    'hero.cv': 'Download CV · EN <span aria-hidden="true">↓</span>',
    'hero.cvLabel': 'Download English CV (PDF)',
    'hero.cvHref': 'assets/Peter-Phan_CV.pdf',
    'hero.portraitAlt': 'Peter Phan with a laptop and notebook',
    'hero.portraitCaption': 'Learning, day by day.<br>Personal archive.',
    'highlights.label': 'Three defining milestones',
    'highlights.prizeKicker': 'COMPETITIVE PROGRAMMING',
    'highlights.prizeTitle': 'Provincial First Prize',
    'highlights.prizeDetail': 'Excellent Student Competition in Informatics · Grade 9',
    'highlights.founderDetail': 'S2S · Students supporting students',
    'highlights.mobilityKicker': 'INTERNATIONAL EXPERIENCE',
    'highlights.mobilityDetail': 'IT mobility programme · 2026',
    'projects.index': '01 — FEATURED PROJECTS',
    'projects.context': 'TECHNOLOGY FOR PEOPLE',
    'techsupport.kicker': 'STUDENT INITIATIVE · ACTIVE',
    'techsupport.tagline': 'Standardising study devices.<br>Supporting fellow students.',
    'techsupport.summary': 'Technology support by students, for students at Thai Nguyen University. TechSupport combines software setup and optimisation, computer maintenance and component advice with a website for services, pricing and appointments.',
    'techsupport.stackLabel': 'TechSupport key characteristics',
    'techsupport.tagModel': 'S2S Model',
    'techsupport.tagRole': 'Founder & CEO',
    'techsupport.tagOs': 'OS Optimisation',
    'techsupport.tagHw': 'Hardware Maintenance',
    'techsupport.tagSchool': 'Thai Nguyen University',
    'techsupport.exploreModules': 'Explore services & pricing <span aria-hidden="true">↓</span>',
    'techsupport.visit': 'Visit TechSupport <span aria-hidden="true">↗</span>',
    'techsupport.visitLabel': 'Visit the TechSupport website (opens in a new tab)',
    'techsupport.visitHref': 'https://tphand2877.github.io/techsupport/EnIndex.html',
    'techsupport.story': 'The origin story <span aria-hidden="true">↗</span>',
    'techsupport.expand': 'View full screenshot <span aria-hidden="true">↗</span>',
    'techsupport.homeAlt': 'TechSupport homepage introducing its S2S model, service packages and device support',
    'techsupport.homeCaption': 'TechSupport website · Homepage & S2S model introduction',
    'techsupport.captureNote': 'Live website at tphand2877.github.io/techsupport',
    'techsupport.modulesKicker': '01 / SERVICES & TRANSPARENCY',
    'techsupport.modulesTitle': 'From everyday study to transparent pricing.',
    'techsupport.modulesSummary': 'The website clearly outlines software setup, maintenance packages, component upgrade advice and the founding team behind the initiative. Select a screen below to explore.',
    'techsupport.tabsLabel': 'TechSupport screens',
    'techsupport.servicesTab': 'Services',
    'techsupport.pricingTab': 'Pricing',
    'techsupport.teamTab': 'Founding team',
    'techsupport.servicesScroll': 'Scroll through the full services section',
    'techsupport.servicesAlt': 'TechSupport services section with software setup, maintenance and component consultation',
    'techsupport.servicesCaption': 'Services · Software setup, maintenance & components',
    'techsupport.pricingScroll': 'Scroll through the detailed service pricing list',
    'techsupport.pricingAlt': 'TechSupport detailed student-friendly service pricing list',
    'techsupport.pricingCaption': 'Pricing · Student-friendly technical services',
    'techsupport.teamScroll': 'Scroll through the story and founding team introduction',
    'techsupport.teamAlt': 'TechSupport origin story and founders: Phan Duc Thuan CEO and To Anh Tan Co-Founder',
    'techsupport.teamCaption': 'Founding team · S2S student community story',
    'techsupport.bookingKicker': '02 / BOOKING & DEVICE TRACKING',
    'techsupport.bookingTitle': 'On-site support.<br>Peace of mind.',
    'techsupport.bookingSummary': 'A seamless workflow connecting Google Calendar booking directly at dorms or student rooms with an online TSxxx tracking interface.',
    'techsupport.capCalendar': 'Schedule appointments via embedded Google Calendar',
    'techsupport.capTracking': 'Track device repair progress by TSxxx code',
    'techsupport.capWarranty': '1-week responsibility warranty for software services',
    'techsupport.capOnsite': 'On-site assistance at dorms and rented rooms',
    'techsupport.bookingScroll': 'Scroll through the booking and tracking screen',
    'techsupport.bookingAlt': 'TechSupport Google Calendar booking container and device status tracking input',
    'techsupport.bookingCaption': 'Booking & tracking · On-site scheduling & device status',
    'techsupport.note': 'Student-to-student initiative at Thai Nguyen University; live website hosted at tphand2877.github.io/techsupport.',
    'busgo.kicker': 'SELECTED PROJECT · WEB APP',
    'busgo.tagline': 'From a single seat.<br>To the whole journey.',
    'busgo.summary': 'One web app, two workspaces: booking for passengers and operations for bus stations. BusGo brings a WPF desktop system to the web, connecting trip search, seat selection and station management on one platform.',
    'busgo.stackLabel': 'BusGo technology stack',
    'busgo.exploreAdmin': 'Explore the admin workspace <span aria-hidden="true">↓</span>',
    'busgo.sourceLabel': 'View BusGo source code on GitHub (opens in a new tab)',
    'busgo.source': 'Source on GitHub <span aria-hidden="true">↗</span>',
    'busgo.homeAlt': 'BusGo homepage with a trip search form and Ha Long Bay imagery',
    'busgo.homeCaption': 'Passenger interface · Homepage & trip search',
    'busgo.captureNote': 'Captured directly from the web app',
    'busgo.expand': 'View full screenshot <span aria-hidden="true">↗</span>',
    'busgo.adminKicker': '01 / ADMIN WORKSPACE',
    'busgo.adminTitle': 'Behind every departure.',
    'busgo.adminSummary': 'A dedicated workspace for bus stations: oversee operations, manage departures and track revenue and commissions. Choose a screen below to explore the interface.',
    'busgo.adminTabs': 'BusGo admin screens',
    'busgo.overviewTab': 'Overview',
    'busgo.schedulesTab': 'Schedules',
    'busgo.reportsTab': 'Revenue',
    'busgo.adminScroll': 'Scroll through the full admin dashboard',
    'busgo.adminAlt': 'Full BusGo admin dashboard with navigation, quick tasks, upcoming departures and financial overview',
    'busgo.adminCaption': 'Operations overview · Admin interface',
    'busgo.schedulesScroll': 'Scroll through the full schedule management screen',
    'busgo.schedulesAlt': 'BusGo schedule management with filters and a list of bus departures',
    'busgo.schedulesCaption': 'Schedules · Organising departures',
    'busgo.reportsScroll': 'Scroll through the full revenue report',
    'busgo.reportsAlt': 'BusGo revenue and commission reports with date filters and reconciliation tables',
    'busgo.reportsCaption': 'Revenue & commissions · Reporting and reconciliation',
    'busgo.scrollHint': 'Scroll inside the image to explore · Select to enlarge',
    'busgo.bookingKicker': '02 / BOOKING EXPERIENCE',
    'busgo.bookingTitle': 'Your seat.<br>Your choice.',
    'busgo.bookingSummary': 'From finding a trip to selecting seats, entering passenger details and reviewing a booking. Each step is clearly presented in the interface.',
    'busgo.seats': 'Select multiple seats in one booking',
    'busgo.review': 'Review details before confirmation',
    'busgo.preferences': 'VI/EN interface, light and dark modes',
    'busgo.bookingScroll': 'Scroll through the full seat selection screen',
    'busgo.bookingAlt': 'Full BusGo booking screen with a selected seat and passenger information form',
    'busgo.bookingCaption': 'Seat selection & passenger details',
    'busgo.note': 'Screenshots from the academic demo; figures in the interface are not real business results.',
    'busgo.zoom': 'Zoom in',
    'busgo.viewerHint': 'Full screenshot · Scroll to explore. Enable zoom to read the details.',
    'busgo.viewerScroll': 'Full BusGo interface screenshot',
    'about.index': '02 — ABOUT',
    'about.context': 'THE PERSON BEHIND THE PERSPECTIVE',
    'about.portraitRole': 'BrSE · PHOTOGRAPHY · TECH FOUNDER',
    'about.signature': 'Peter Phan <span>/ Thuận</span>',
    'about.title': 'Two worlds.<br>One <em>perspective.</em>',
    'about.lead': 'A photograph and a technology solution both begin with looking closely at what is in front of you.',
    'about.education': 'I study the International Bachelor of Information Technology program at ICTU — Thai Nguyen University of Information and Communication Technology. In 2026, I joined a three-month IT mobility program at INTI International University in Malaysia.',
    'about.practice': 'Programming develops how I solve problems; hardware work teaches me to respond to real situations. Photography adds another way of observing: paying attention to light, composition and the story within a frame.',
    'about.studyLabel': 'CURRENTLY',
    'about.study': 'Second-year International IT student',
    'about.school': 'ICTU · INTI Malaysia mobility, 2026',
    'about.directionLabel': 'CAREER DIRECTION',
    'about.birthLabel': 'DATE OF BIRTH',
    'about.birth': '28 July 2007',
    'about.genderLabel': 'GENDER',
    'about.gender': 'Male',
    'about.genderNote': 'Nam',
    'about.phoneLabel': 'PHONE',
    'about.phoneNote': 'Direct call / Zalo',
    'about.originLabel': 'HOMETOWN',
    'about.origin': 'Nam Dinh — Ninh Binh',
    'about.country': 'Vietnam',
    'about.expBrse': 'BRIDGE SYSTEM & SOFTWARE ENGINEERING',
    'about.expPhoto': 'PHOTOGRAPHY & VISUAL DESIGN',
    'about.expHardware': 'HARDWARE & SYSTEMS LEADERSHIP',
    'photos.index': '03 — PHOTOGRAPHY & MEMORIES',
    'photos.context': 'PERSPECTIVES WORTH KEEPING',
    'photos.title': 'The world,<br><em>frame by frame.</em>',
    'photos.intro': 'My photographs, personal portraits<br>and memories from INTI.',
    'photos.filterLabel': 'Filter photographs by category',
    'photos.all': 'All',
    'photos.artwork': 'My photographs',
    'photos.portraits': 'Portraits',
    'photos.life': 'INTI memories',
    'photos.note': '“My photographs” features images taken by Peter Phan. Portraits and INTI memories belong to my personal archive; individual notes appear with each image.',
    'photos.closeLabel': 'Close photograph',
    'photos.close': 'Close <span aria-hidden="true">×</span>',
    'photos.previous': 'Previous photograph',
    'photos.next': 'Next photograph',
    'photo.artwork': 'PHOTOGRAPHED BY ME',
    'photo.credit': 'Photograph by Peter Phan (Thuận Phan).',
    'photo.portrait.credit': 'Portrait of Peter Phan · Personal archive.',
    'photo.life.credit': 'Memories from INTI Malaysia · Personal archive.',
    'photo.night.title': 'Quiet under the lights',
    'photo.night.alt': 'A moment under the lights, photographed by Peter Phan',
    'photo.portrait.title': 'Among the trees',
    'photo.portrait.alt': 'A portrait of Peter Phan among the trees',
    'photo.friends.title': 'Friends at INTI',
    'photo.friends.alt': 'A group of friends gathering at INTI',
    'photo.moment.title': 'An everyday moment',
    'photo.moment.alt': 'A portrait beside a window in natural light',
    'photo.natural.title': 'A moment of pause',
    'photo.natural.alt': 'Peter Phan in a quiet moment outdoors',
    'photo.campus.title': 'A chapter in Malaysia',
    'photo.campus.alt': 'The campus of INTI International University',
    'journey.index': '04 — JOURNEY',
    'journey.eyebrow': 'FROM AGE FOUR TO TODAY',
    'journey.title': 'The Story<br><em>So Far.</em>',
    'journey.lead': 'From discovering computers to competitions, hands-on technical work, photography and a project for students. Each chapter opened up a new way of seeing.',
    'journey.navLabel': 'Stages of my journey',
    'journey.act1': '01 / Discovering & learning',
    'journey.act2': '02 / Expanding my perspective',
    'journey.act3': '03 / Building & connecting',
    'journey.first.stage': 'AGE 4',
    'journey.first.title': 'The first click',
    'journey.first.story': 'I first touched a computer at the age of four. I did not yet understand how it worked, but the curiosity from that moment has stayed with me ever since.',
    'journey.code.stage': 'GRADE 7',
    'journey.code.title': 'I started programming',
    'journey.code.story': 'Pascal was my first programming language, followed by C++. Programming grew beyond a school subject: I wanted to understand why a solution worked, and how to make it better.',
    'journey.recognition.stage': 'GRADE 8',
    'journey.recognition.badge': 'Encouragement Prize — City-level Excellent Student Competition in Informatics',
    'journey.recognition.title': 'First recognition',
    'journey.recognition.story': 'My first award followed sustained practice in programming and problem solving. It encouraged me to pursue competitive programming more seriously.',
    'journey.prize.stage': 'GRADE 9',
    'journey.prize.award': 'First Prize',
    'journey.prize.competition': 'Provincial Excellent Student Competition in Informatics',
    'journey.prize.title': 'A major breakthrough',
    'journey.prize.story': 'One year after my first award, I won First Prize in the provincial Informatics competition. It became one of the most memorable milestones of secondary school, and a reason to keep investing in my algorithmic foundations.',
    'journey.school.stage': 'TRAN VAN LAN HIGH SCHOOL',
    'journey.school.badge': 'Encouragement Prize — High School Excellent Student Competition in Informatics',
    'journey.school.title': 'Three years in the Informatics team',
    'journey.school.story': 'I was selected for advanced Informatics training for three consecutive years at Tran Van Lan High School. Failed solutions, difficult problems and repeated attempts taught me persistence, independent learning and a systematic approach.',
    'journey.hardware.stage': 'HIGH SCHOOL YEARS',
    'journey.hardware.badge': 'Computer technician',
    'journey.hardware.title': 'Beyond programming',
    'journey.hardware.story': 'Through real-world experience with local computer shops, I learned PC building, repair and hardware troubleshooting. Choosing components, upgrading PCs and advising on configurations helped me understand computers from both software and hardware perspectives.',
    'journey.camera.stage': 'GRADE 12',
    'journey.camera.badge': 'Semi-professional photographer',
    'journey.camera.title': 'Then came the sound of a shutter',
    'journey.camera.story': 'In my final year of high school, I began exploring photography. From camera operation and exposure to composition, lighting and post-processing, I learned to tell a story without words.',
    'journey.university.badge': 'International Bachelor of Information Technology program',
    'journey.university.title': 'Starting a new chapter',
    'journey.university.story': 'I continued my technology journey at ICTU — Thai Nguyen University of Information and Communication Technology. Alongside technical knowledge, university became a place to practise communication, presentations, teamwork and project management.',
    'journey.founder.stage': 'UNIVERSITY YEARS',
    'journey.founder.title': 'From technical skills to a real project',
    'journey.founder.story': 'I founded TechSupport using the technical experience I had built over the years, with an S2S model: students supporting students. The initiative is now active, combining technology support, service development and team coordination.',
    'journey.founder.link': 'Explore TechSupport <span aria-hidden="true">↗</span>',
    'journey.founder.imageAlt': 'The TechSupport homepage',
    'journey.mobility.badge': 'Mobility Student · 3 months · IT',
    'journey.mobility.title': 'Taking my journey international',
    'journey.mobility.story': 'Three months studying IT at INTI Malaysia brought me into a new academic and cultural environment. The experience helped me become more independent and adaptable, and practise English in everyday life and study.',
    'journey.today.stage': 'PRESENT DAY',
    'journey.today.badge': 'Second-year International IT student · ICTU',
    'journey.today.title': 'Still building',
    'journey.today.story': 'I continue studying, building projects and developing communication and leadership skills. Software engineering and bridge system engineering are my main career directions; product development and game development remain fields I am exploring.',
    'journey.closingTag': 'THE STORY CONTINUES',
    'journey.quote': '“The milestones behind me are not the destination. They are only the first chapters of a much longer journey.”',
    'skill.persistence': 'Persistence',
    'skill.algorithms': 'Algorithmic thinking',
    'skill.problemSolving': 'Problem solving',
    'skill.selfLearning': 'Self-learning',
    'skill.pcBuild': 'PC building',
    'skill.troubleshooting': 'Troubleshooting',
    'skill.repair': 'Computer repair',
    'skill.os': 'OS installation',
    'skill.upgrades': 'Upgrades & component selection',
    'skill.consulting': 'PC configuration advice',
    'skill.camera': 'Camera operation',
    'skill.composition': 'Composition',
    'skill.light': 'Lighting & composition',
    'skill.visualStory': 'Visual storytelling',
    'skill.editing': 'Color grading & retouching',
    'skill.uiDesign': 'UI/UX Design',
    'skill.portraitStreet': 'Portrait & street photography',
    'skill.communication': 'Communication & presentations',
    'skill.teamwork': 'Teamwork',
    'skill.leadership': 'Leadership',
    'skill.management': 'Project management',
    'skill.independence': 'Independence',
    'skill.adaptability': 'Adaptability',
    'skill.english': 'English communication',
    'skill.crossCulture': 'Cross-cultural communication',
    'skill.global': 'International mindset',
    'contact.index': '05 — CONTACT',
    'contact.context': 'START WITH A CONVERSATION',
    'contact.title': 'A great idea<br>starts with <em>a hello.</em>',
    'contact.description': 'Interested in learning and work opportunities in software, collaborating with TechSupport, or a photography project?<br>Tell me what you have in mind.',
    'contact.status': '<span class="status-pulse" aria-hidden="true"></span> Open to conversations about projects & collaboration',
    'contact.copy': 'Copy email',
    'contact.copyLabel': 'Copy email address',
    'contact.githubLabel': 'View Tphand2877’s GitHub profile (opens in a new tab)',
    'contact.copyPhone': 'Copy phone',
    'contact.copyPhoneLabel': 'Copy phone number',
    'footer.brand': 'PETER PHAN<span>CODING - TECHNOLOGY - PHOTOGRAPHY</span>',
    'footer.copyright': 'Peter Phan. All rights reserved.'
  };

  const messages = {
    menuOpen: ['Mở menu', 'Open menu'],
    menuClose: ['Đóng menu', 'Close menu'],
    switchLight: ['Chuyển sang chế độ sáng', 'Switch to light mode'],
    switchDark: ['Chuyển sang chế độ tối', 'Switch to dark mode'],
    light: ['Sáng', 'Light'],
    dark: ['Tối', 'Dark'],
    frames: ['KHUNG HÌNH', 'FRAMES'],
    photo: ['ẢNH MÌNH CHỤP', 'MY PHOTOGRAPHS'],
    portrait: ['CHÂN DUNG', 'PORTRAITS'],
    life: ['KỶ NIỆM INTI', 'INTI MEMORIES'],
    copied: ['Đã sao chép địa chỉ email.', 'Email address copied.'],
    copyFallback: ['Bạn có thể sao chép: phanducthuan287@gmail.com', 'You can copy: phanducthuan287@gmail.com'],
    phoneCopied: ['Đã sao chép số điện thoại.', 'Phone number copied.'],
    phoneFallback: ['Bạn có thể sao chép: +84.916.426.992', 'You can copy: +84.916.426.992'],
  };
  const t = key => messages[key] ? messages[key][language === 'en' ? 1 : 0] : key;

  const bindings = [];
  const attributes = {
    'data-i18n': null,
    'data-i18n-label': 'aria-label',
    'data-i18n-alt': 'alt',
    'data-i18n-content': 'content',
    'data-i18n-caption': 'data-caption',
    'data-i18n-href': 'href'
  };
  Object.entries(attributes).forEach(([keyAttribute, attribute]) => {
    document.querySelectorAll(`[${keyAttribute}]`).forEach(element => {
      bindings.push({
        element,
        attribute,
        vi: attribute ? element.getAttribute(attribute) : element.innerHTML,
        en: english[element.getAttribute(keyAttribute)]
      });
    });
  });

  function save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch { /* Preferences still work for this visit when storage is blocked. */ }
  }

  function updateThemeControl() {
    const isLight = document.documentElement.dataset.theme === 'light';
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const label = t(isLight ? 'switchDark' : 'switchLight');
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', String(isLight));
    button.querySelector('.theme-label').textContent = t(isLight ? 'dark' : 'light');
    document.querySelector('meta[name="theme-color"]').content = isLight ? '#f8f6f0' : '#08090B';
  }

  function setLanguage(next, persist = true) {
    language = next;
    document.documentElement.lang = next;
    bindings.forEach(({ element, attribute, ...values }) => {
      if (attribute) element.setAttribute(attribute, values[next]);
      else element.innerHTML = values[next];
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === next));
    });
    document.querySelectorAll('.photo-card').forEach(card => {
      card.dataset.title = card.querySelector('h3').textContent;
      card.dataset.type = t(card.dataset.category);
      card.querySelector('.photo-meta > span').textContent =
        `${card.dataset.type} / ${card.querySelector('.photo-number').textContent}`;
    });
    const menu = document.querySelector('.menu-toggle');
    menu.setAttribute('aria-label', t(menu.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen'));
    document.querySelector('meta[property="og:locale"]').content = next === 'vi' ? 'vi_VN' : 'en_US';
    document.querySelector('meta[property="og:locale:alternate"]').content = next === 'vi' ? 'en_US' : 'vi_VN';
    document.querySelector('.toast').classList.remove('show');
    updateThemeControl();
    if (persist) save('portfolio-language', next);
    document.dispatchEvent(new CustomEvent('portfolio:languagechange'));
  }

  window.portfolioLocale = { t, get language() { return language; } };
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  function toggleTheme(event) {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    const applyTheme = () => {
      document.documentElement.dataset.theme = next;
      save('portfolio-theme', next);
      updateThemeControl();
      document.dispatchEvent(new CustomEvent('portfolio:themechange'));
    };

    const motionQuery = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery && motionQuery.matches) {
      applyTheme();
      return;
    }

    if (typeof document.startViewTransition === 'function') {
      const button = document.querySelector('.theme-toggle');
      const rect = button ? button.getBoundingClientRect() : { left: window.innerWidth - 60, top: 45, width: 40, height: 40 };
      const x = event && typeof event.clientX === 'number' && event.clientX > 0 ? event.clientX : rect.left + rect.width / 2;
      const y = event && typeof event.clientY === 'number' && event.clientY > 0 ? event.clientY : rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        applyTheme();
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: next === 'light' ? clipPath : [...clipPath].reverse()
          },
          {
            duration: 520,
            easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            pseudoElement: next === 'light' ? '::view-transition-new(root)' : '::view-transition-old(root)'
          }
        );
      }).catch(() => {
        applyTheme();
      });
    } else {
      document.documentElement.classList.add('theme-transitioning');
      applyTheme();
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
      }, 500);
    }
  }

  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
  setLanguage(language, false);
})();

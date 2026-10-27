// Apply the saved palette before styles load to avoid a light/dark flash.
(() => {
  let theme;
  let language;
  try {
    theme = localStorage.getItem('portfolio-theme');
    language = localStorage.getItem('portfolio-language');
  } catch { /* The site remains usable when browser storage is blocked. */ }
  document.documentElement.dataset.theme = ['light', 'dark'].includes(theme)
    ? theme : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.lang = ['vi', 'en'].includes(language) ? language : 'vi';
})();

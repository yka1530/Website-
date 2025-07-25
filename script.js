function toggleTheme() {
  document.body.classList.toggle('dark');
}

function toggleLanguage() {
  const isArabic = document.documentElement.lang === 'ar';
  document.documentElement.lang = isArabic ? 'en' : 'ar';
  document.documentElement.dir = isArabic ? 'ltr' : 'rtl';
  document.getElementById('name').textContent = isArabic ? 'Yousef Alrewi' : 'يوسف الريوي';
  document.getElementById('bio').textContent = isArabic
    ? 'A passionate and creative individual eager to grow and explore tech fields.'
    : 'شخص طموح ومحب للتعلم والإبداع التقني، أسعى لتطوير نفسي باستمرار في مجالات متعددة.';
}

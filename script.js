let currentLang = 'ar';

function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}

function toggleLang() {
  if (currentLang === 'ar') {
    currentLang = 'en';
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';

    document.getElementById("title").textContent = "Hi, I'm Yousef";
    document.getElementById("subtitle").textContent = "Ambitious student interested in tech and coding";

    document.getElementById("about-title").textContent = "About Me";
    document.getElementById("about-text").textContent = "I'm a 10th grade student living in Brooklyn, New York. I'm developing my computer science skills, love coding and web building, and always eager to learn.";

    document.getElementById("edu-title").textContent = "Academic Level";
    document.getElementById("edu-list").innerHTML = `
      <li>10th Grade - High School in New York</li>
      <li>Interested in: Computer Science, Physics, Math</li>
      <li>Passed Geometry Regents Exam</li>
      <li>Preparing for SAT and Physics Regents</li>
    `;

    document.getElementById("exp-title").textContent = "Experience";
    document.getElementById("exp-list").innerHTML = `
      <li>Built Plex & Jellyfin servers for media</li>
      <li>Developing an interactive personal site</li>
      <li>Knowledge in LAN and IoT</li>
      <li>Experience with Mac, Chromebook, Fire Tablet</li>
    `;

    document.getElementById("footer-text").textContent = "© 2025 Yousef Alrewi. All rights reserved.";

  } else {
    currentLang = 'ar';
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';

    document.getElementById("title").textContent = "مرحبًا، أنا يوسف";
    document.getElementById("subtitle").textContent = "طالب طموح ومهتم بالتقنية والبرمجة";

    document.getElementById("about-title").textContent = "من أنا";
    document.getElementById("about-text").textContent = "أنا طالب في الصف العاشر أعيش في بروكلين، نيويورك. أعمل على تطوير مهاراتي في علوم الحاسب، أعشق البرمجة وبناء المواقع، وأسعى دائمًا لتعلم أشياء جديدة.";

    document.getElementById("edu-title").textContent = "مستواي الأكاديمي";
    document.getElementById("edu-list").innerHTML = `
      <li>الصف العاشر - مدرسة ثانوية في نيويورك</li>
      <li>مجال الاهتمام: علوم الحاسب، الفيزياء، الرياضيات</li>
      <li>إجتياز اختبار Geometry Regents</li>
      <li>تحضير لاختبارات SAT وPhysics Regents</li>
    `;

    document.getElementById("exp-title").textContent = "الخبرات";
    document.getElementById("exp-list").innerHTML = `
      <li>بناء سيرفرات Plex وJellyfin للأفلام والمحتوى</li>
      <li>العمل على مشروع موقع شخصي تفاعلي</li>
      <li>فهم الشبكات الداخلية وIoT</li>
      <li>مهارات استخدام أجهزة Mac وChromebook وFire Tablet</li>
    `;

    document.getElementById("footer-text").textContent = "© 2025 يوسف الروي. جميع الحقوق محفوظة.";
  }
}

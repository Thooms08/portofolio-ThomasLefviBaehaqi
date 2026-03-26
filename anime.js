document.addEventListener('DOMContentLoaded', () => {
    

    // Hero Animation
    anime({
        targets: '.hero-photo',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-title',
        translateY: [60, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 300,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-subtitle',
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 600,
        easing: 'easeOutExpo'
    });

    // Section Titles
    const titles = document.querySelectorAll('.section-title');
    titles.forEach((title, i) => {
        anime({
            targets: title,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            delay: 300 + i * 200,
            easing: 'easeOutQuad'
        });
    });

    // Cards stagger animation
    anime({
        targets: '.project-card, .cert-card, .skill-card',
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        delay: anime.stagger(150),
        easing: 'easeOutQuad'
    });

    console.log('%cPortfolio Thomas Lefvi Baehaqi siap digunakan!', 'color:#00d4ff; font-size:16px; font-weight:bold');
});
    const certModal = document.getElementById('certModal');
    if (certModal) {
        certModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-img');
            const certTitle = button.getAttribute('data-title');
            const modalTitle = certModal.querySelector('.modal-title');
            const modalImg = certModal.querySelector('#modalCertImg');
            modalTitle.textContent = certTitle;
            modalImg.src = imgSrc;
        });
    }

    // ==========================================
    // FITUR MULTI-BAHASA (ID <-> EN)
    // ==========================================
    const translations = {
        id: {
            nav_home: "Beranda",
            nav_about: "Tentang",
            nav_projects: "Proyek",
            nav_cert: "Sertifikat",
            nav_contact: "Kontak",
            hero_subtitle: "Web Developer &amp; Founder Flavory.id",
            btn_profile: "Lihat Profil Saya",
            btn_cv: "Download CV",
            about_title: "Tentang Saya",
            about_desc: "Saya Mahasiswa Sistem Informasi Universitas Bina Sarana Informatika (Semester 4) sekaligus Web Developer yang berfokus pada penciptaan solusi digital bernilai bisnis. Sebagai Founder Flavory.id, saya menggabungkan keahlian full-stack (HTML, CSS, JavaScript, PHP, MySQL, dan Laravel) untuk membangun platform yang efisien, aman, dan mudah digunakan.<br><br>Pengalaman saya mencakup pengembangan ekosistem POS bisnis F&amp;B, platform e-commerce, sistem manajemen data terpadu, hingga integrasi perangkat lunak dengan hardware. Saya bekerja dengan pendekatan modern dan adaptif, memanfaatkan AI-assisted tools untuk memastikan setiap baris kode yang ditulis berkontribusi pada performa dan skalabilitas aplikasi yang tinggi.",
            edu_title: "Pendidikan",
            tittle_edu_smk: "SMK Plus Al Azhar Mariuk",
            tittle_edu_major:"Universitas Bina Sarana Informatika",
            edu_major: "S1 Sistem Informasi | 2024 - Saat ini(Sedang berlangsung)",
            edu_smk:"Otommatisasi Tata Kelola Perkantoran | 2021 - 2024",
            proj_title: "Proyek Saya",
            proj_1_desc: "Platform POS/Kasir digital terintegrasi yang dirancang khusus untuk mengoptimalkan operasional bisnis kuliner (F&amp;B). Dilengkapi dengan fitur manajemen pesanan, Laporan Keuangan otomatis, dan Analisis Performa Bisnis secara real-time.",
            proj_2_desc: "Platform fashion e-commerce modern dengan fitur lengkap, navigasi intuitif, dan pengalaman belanja terbaik untuk pengguna.",
            btn_detail: '<i class="bi bi-box-arrow-up-right"></i> Kunjungi Web',
            skill_title: "Keterampilan Lunak",
            cert_title: "Sertifikat",
            tools_title: "Alat - Alat Favorit",
            contact_title: "Hubungi Saya",
            footer_rights: "© 2026 Thomas Lefvi Baehaqi. All Rights Reserved."
        },
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_projects: "Projects",
            nav_cert: "Certificate",
            nav_contact: "Contact",
            hero_subtitle: "Web Developer &amp; Founder of Flavory.id",
            btn_profile: "View My Profile",
            btn_cv: "Download CV",
            about_title: "About Me",
            about_desc: "I am an Information Systems student at Bina Sarana Informatika University (4th Semester) and a Web Developer focused on creating business-valuable digital solutions. As the Founder of Flavory.id, I combine full-stack expertise (HTML, CSS, JavaScript, PHP, MySQL, and Laravel) to build efficient, secure, and user-friendly platforms.<br><br>My experience includes developing F&amp;B POS ecosystems, e-commerce platforms, integrated data management systems, and software-to-hardware integration. I work with a modern and adaptive approach, utilizing AI-assisted tools to ensure every line of code contributes to high performance and application scalability.",
            edu_title: "Education",
            tittle_edu_smk:"Al Azhar Mariuk Plus Vocational School",
            tittle_edu_major:"Bina Sarana Informatika University",
            edu_major: "Bachelor of Information Systems | 2024 - Present (Ongoing)",
            edu_smk: "Office Management Automation | 2021 - 2024",
            proj_title: "My Projects",
            proj_1_desc: "An integrated digital POS/Cashier platform specifically designed to optimize F&amp;B business operations. Equipped with order management, automated Financial Reports, and real-time Business Performance Analysis.",
            proj_2_desc: "A modern fashion e-commerce platform with comprehensive features, intuitive navigation, and the best shopping experience for users.",
            btn_detail: '<i class="bi bi-box-arrow-up-right"></i> Visit the web',
            skill_title: "Soft Skills",
            cert_title: "Certificates",
            tools_title: "Favorite Tools",
            contact_title: "Contact Me",
            footer_rights: "© 2026 Thomas Lefvi Baehaqi. All Rights Reserved."
        }
    };

    const langToggleBtn = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');
    let currentLang = localStorage.getItem('portfolio_lang') || 'id'; 

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        langLabel.innerText = lang === 'id' ? 'EN' : 'ID'; 
        document.documentElement.lang = lang; 
        localStorage.setItem('portfolio_lang', lang); 
    }

    updateLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            updateLanguage(currentLang);
            
            anime({
                targets: langToggleBtn,
                scale: [0.9, 1],
                duration: 300,
                easing: 'easeOutElastic(1, .8)'
            });
        });
    }

    // ==========================================
    // FITUR SHARE PORTFOLIO
    // ==========================================
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: 'Thomas Lefvi Baehaqi | Web Developer',
                text: 'Halo! Lihat portofolio Thomas Lefvi Baehaqi, Web Developer & Founder Flavory.id.',
                url: window.location.href
            };

            try {
                if (navigator.share) {
                    await navigator.share(shareData);
                } else {
                    await navigator.clipboard.writeText(window.location.href);
                    alert('Link portofolio berhasil disalin ke clipboard!');
                }
            } catch (err) {
                console.log('Share dibatalkan atau terjadi kesalahan:', err);
            }
        });
    }
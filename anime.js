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

    console.log('%c✅ Portfolio Thomas Lefvi Baehaqi siap digunakan!', 'color:#00d4ff; font-size:16px; font-weight:bold');
});

const certModal = document.getElementById('certModal');
    if (certModal) {
        certModal.addEventListener('show.bs.modal', function (event) {
            // Tangkap elemen kartu yang baru saja diklik
            const button = event.relatedTarget;
            
            // Ambil data dari atribut data-img dan data-title pada kartu tersebut
            const imgSrc = button.getAttribute('data-img');
            const certTitle = button.getAttribute('data-title');
            
            // Cari elemen-elemen di dalam Modal yang akan diubah
            const modalTitle = certModal.querySelector('.modal-title');
            const modalImg = certModal.querySelector('#modalCertImg');
            const modalDownloadBtn = certModal.querySelector('#modalDownloadBtn');
            
            // Ubah teks judul dan gambar sesuai sertifikat yang diklik
            modalTitle.textContent = certTitle;
            modalImg.src = imgSrc;
            
            // Siapkan tombol Download di dalam Modal agar langsung mendownload gambar yang tampil
            modalDownloadBtn.href = imgSrc;
            
            // Atur nama file saat didownload (mengganti spasi dengan underscore)
            const extension = imgSrc.substring(imgSrc.lastIndexOf('.'));
            const fileName = certTitle.replace(/\s+/g, '_') + extension;
            modalDownloadBtn.setAttribute('download', fileName);
        });
    }
    
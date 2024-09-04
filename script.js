document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  
        document.querySelectorAll('.section-content').forEach(section => {
            section.classList.remove('active');
        });

        const sectionToShow = document.getElementById(this.getAttribute('data-section'));
        sectionToShow.classList.add('active');
    });
});


const video = document.querySelector('.video'),
        btnTutup = document.getElementById('tutup'),
            navVideo = document.getElementById('nav-video');


        navVideo.addEventListener('click', () => {
        video.style.display = 'flex'
        })
btnTutup.addEventListener('click', () => {
video.style.display = "none"
})
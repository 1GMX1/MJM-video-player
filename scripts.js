window.addEventListener('load', () => {
    const logo = document.querySelector('.logo');
    const downloadBtn = document.querySelector('.download-btn');
    logo.addEventListener('click', () => {
        window.open('https://' + (window.location.hostname).toString() + '/mjm-video-player/index.html', '_self');
    }, false);
    downloadBtn.addEventListener('mousedown', () => {
        downloadBtn.classList.add('hidden');
    }, false);
}, false);

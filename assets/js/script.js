// Bloqueia o botão direito do mouse no vídeo e na logo
document.getElementById('background-video').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.querySelector('.logo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Desabilita a função de arrastar e soltar na logo
document.querySelector('.logo').draggable = false;


document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    var audio = document.getElementById('background-audio');

    // Mute the video initially
    video.muted = true;

    function playVideo() {
        video.play().then(function() {
            // If video playback succeeds, unmute the video
            video.muted = false;
        }).catch(function(error) {
            // Log any errors to the console
            console.error('Video playback failed:', error);
        });
    }

    // Play the video when user interacts with the document
    document.addEventListener('click', playVideo, { once: true }); // Ensure this event listener only runs once
    document.addEventListener('touchstart', playVideo, { once: true }); // For touch devices
    document.addEventListener('scroll', playVideo, { once: true }); // For scrolling
});




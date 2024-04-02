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

    // Mute the video
    video.muted = true;

    // Play the video with audio muted to ensure playback on iOS
    video.play().then(function() {
        // Pause the video immediately to avoid unwanted playback
        video.pause();
        // Unmute the audio for further playback
        video.muted = false;
    }).catch(function(error) {
        console.error('Video playback failed:', error);
    });
});



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

    video.muted = true; // Mute the video

});

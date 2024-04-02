document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('background-video');

  // Mute o vídeo
  video.muted = false;

  // Desabilita o loop do vídeo
  video.loop = true;

  // Define o vídeo como comp3.mp4
  video.src = 'media/comp3.mp4';

  // Adiciona o iframe ao elemento .content para posicionamento correto
  var iframe = document.createElement('iframe');
  iframe.style.border = '0';
  iframe.style.width = '350px';
  iframe.style.height = '786px';
  iframe.style.position = 'absolute'; // Alterado para absolute
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.src = 'https://bandcamp.com/EmbeddedPlayer/album=1175760154/size=large/bgcol=333333/linkcol=ffffff/transparent=true/';
  
  // Adiciona uma classe ao iframe para aplicar a transição CSS
  iframe.classList.add('bandcamp-iframe');

  // Adiciona o iframe ao elemento .content para posicionamento correto
  document.querySelector('.content').appendChild(iframe);

  // Mostra o iframe com uma animação suave
  showBandcampIframe();
});

// Função para mostrar o iframe com uma animação suave
function showBandcampIframe() {
  // Adiciona uma classe ao iframe para aplicar a transição CSS
  var iframe = document.querySelector('.bandcamp-iframe');
  iframe.classList.add('show');
}

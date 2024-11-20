const observerSection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => observerSection.observe(element));

const audio = document.getElementById('background-music');
let isPlaying = false; // Variável para controlar o estado da música
let userInteracted = false; // Marca se o usuário já interagiu com a página

// Função para tocar a música
function playMusic() {
  if (userInteracted) {
    audio
      .play()
      .then(() => {
        console.log('Música tocando!');
        isPlaying = true;
        removeScrollListener();
      })
      .catch((error) => {
        console.error('Erro ao tocar música:', error.message);
      });
  } else {
    console.warn('Usuário ainda não interagiu com a página.');
  }
}

// Função para pausar a música
function stopMusic() {
  if (isPlaying) {
    audio.pause();
    console.log('Música pausada!');
    isPlaying = false;
  }
}

// Função para alternar entre tocar e pausar a música
function toggleMusic() {
  if (isPlaying) {
    stopMusic();
  } else {
    playMusic();
  }
}

// Remove o evento de scroll após a música começar
function removeScrollListener() {
  document.removeEventListener('scroll', playMusic);
  console.log('Listener de scroll removido.');
}

// Adiciona eventos com base na interação inicial
function enableInteractions() {
  userInteracted = true; // Marca que o usuário interagiu
  console.log('Usuário interagiu com a página.');

  // Adiciona o evento de scroll em dispositivos móveis
  if (isMobileDevice()) {
    console.log('Adicionando evento de scroll.');
    document.addEventListener('scroll', playMusic);
  }
}

// Detecta se o dispositivo é móvel
function isMobileDevice() {
  return (
    /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent) ||
    window.matchMedia('(pointer: coarse)').matches
  );
}

// Configura o evento inicial de interação
document.addEventListener('click', () => {
  enableInteractions();
  toggleMusic();
});

console.log('Aguardando interação inicial do usuário...');

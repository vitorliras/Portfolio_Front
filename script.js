// Seleciona o elemento HTML com a classe "about-progress-bars-wrapper" e armazena-o na variável 'progress'.
const progress = document.querySelector(".about-progress-bars-wrapper");

// Cria um array chamado 'progressBarPercents' que contém valores numéricos representando porcentagens.
const progressBarPercents = [97, 89, 85, 87, 80, 60, 35];

// Adiciona um ouvinte de evento para a janela que fica à escuta do evento de rolagem (scroll).
window.addEventListener("scroll", () => {
  mainFn();
});

// Define uma função chamada 'mainFn'.
const mainFn = () => {
  // Verifica se a posição vertical da janela mais a altura da janela é maior ou igual à posição vertical do elemento 'progress'.
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    // Se a condição for verdadeira, itera sobre todos os elementos com a classe "about-progress-percent".
    document.querySelectorAll(".about-progress-percent").forEach((el, i) => {
      // Define a largura do elemento 'el' com base no valor da porcentagem correspondente no array 'progressBarPercents'.
      el.style.width = `${progressBarPercents[i]}%`;

      // Encontra o elemento anterior ao 'el' e atualiza seu conteúdo de texto para mostrar a porcentagem correspondente.
      el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
    });
  }
};

mainFn();

// Esta linha seleciona todos os elementos que têm a classe 'about-story-btn' e itera sobre eles.
document.querySelectorAll('.about-story-btn').forEach(btn => {
  // Para cada elemento com a classe 'about-story-btn', adicionamos um ouvinte de evento de clique.
  btn.addEventListener('click', () => {
      // Quando um botão é clicado, alternamos a classe 'change' no próprio botão.
      btn.classList.toggle('change')
      // Em seguida, alternamos a classe 'change' no elemento irmão seguinte do botão.
      btn.nextElementSibling.classList.toggle('change')
  })
})

// Função de inicialização do mapa
function initMap() {
  // Coordenadas aleatórias em Recife, PE (substitua por coordenadas reais)
  var myLatLng = { lat: -8.047562, lng: -34.878044 };

  // Opções do mapa
  var mapOptions = {
      zoom: 15,
      center: myLatLng
  };

  // Crie o mapa e coloque-o na div com a classe "map-container"
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Marque um marcador no local
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Local Aleatório em Recife, PE'
  });
}

// Adiciona um ouvinte de evento para a janela que fica à escuta do evento de redimensionamento (resize).
window.addEventListener("resize", () => {
  // Quando ocorrer um redimensionamento da janela, recarrega a página.
  window.location.reload();
});
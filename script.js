//Usei o chat gpt para comentar algumas linhas e deixa mais bem explicado possivel
const progress = document.querySelector(".about-progress-bars-wrapper");
const progressBarPercents = [75,78, 88, 86, 85, 79, 80, 60, 35];
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

// Adiciona um ouvinte de evento para a janela que fica à escuta do evento de rolagem (scroll).
window.addEventListener("scroll", () => {
  mainFn();
});

// Define uma função chamada 'mainFn'.
const mainFn = () => {

  // Verifica se o deslocamento vertical da janela é maior ou igual à posição em que a barra de navegação deve se tornar "sticky".
if (window.pageYOffset >= navbarOffsetTop) {
  // Se a condição for verdadeira, adiciona a classe "sticky" à barra de navegação.
  navbar.classList.add("sticky");
} else {
  // Se a condição for falsa, remove a classe "sticky" da barra de navegação.
  navbar.classList.remove("sticky");
}

// Itera sobre um conjunto de seções na página, fornecendo a seção e seu índice (i).
sections.forEach((section, i) => {
  // Verifica se o deslocamento vertical da janela é maior ou igual à posição vertical da seção, com uma folga de 10 pixels.
  if (window.pageYOffset >= section.offsetTop - 10) {
      // Remove a classe "change" de todos os elementos da barra de navegação (navbarLinks).
      navbarLinks.forEach((navbarLink) => {
          navbarLink.classList.remove("change");
      });
      // Adiciona a classe "change" apenas ao link de navegação correspondente à seção atualmente visível.
      navbarLinks[i].classList.add("change");
  }
});


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

// Adiciona um ouvinte de evento para a janela que fica à escuta do evento de redimensionamento (resize).
window.addEventListener("resize", () => {
  // Quando ocorrer um redimensionamento da janela, recarrega a página.
  window.location.reload();
});
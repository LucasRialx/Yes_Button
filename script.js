// script.js

// Captura o botão "Sim" e o elemento de resposta
const yesButton = document.getElementById("yesButton");
const responseMessage = document.getElementById("responseMessage");

// Evento ao clicar no botão "Sim"
yesButton.addEventListener("click", () => {
  responseMessage.innerHTML = "<p>I already knew.</p>";
});

// Captura o botão "Não" e determina suas dimensões
const noButton = document.getElementById("noButton");
const buttonWidth = noButton.clientWidth;
const buttonHeight = noButton.clientHeight;

let isMoving = false; // Variável para controle do movimento do botão "Não"

// Evento quando o mouse passa por cima do botão "Não"
noButton.addEventListener("mouseover", () => {
  isMoving = true;
});

// Evento quando o mouse sai de cima do botão "Não"
noButton.addEventListener("mouseleave", () => {
  isMoving = false;
});

// Evento ao clicar no botão "Não" (impede propagação do evento)
noButton.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Função para obter posição aleatória na tela
const getRandomPosition = () => {
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  return {
    x: randomX,
    y: randomY,
  };
};

// Evento de movimento do mouse na página
document.addEventListener("mousemove", (event) => {
  if (isMoving) {
    const { x, y } = getRandomPosition();

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
  }
});

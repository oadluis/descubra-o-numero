'use strict';

let score = 20;
let numeroSecreto = Math.trunc(Math.random() * 100) + 1;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//BUTTON CHECK EVENT ->
document.querySelector('.check').addEventListener('click', function () {
  const tentativa = Number(document.querySelector('.guess').value);

  //caso não haja nada no input ->
  if (!tentativa) {
    displayMessage(`⛔ Número inválido!`);

    //caso o número da tentativa estiver certo ->
  } else if (tentativa === numeroSecreto) {
    displayMessage(`🎉 Número correto!`);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = numeroSecreto;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //caso a tentativa for diferente ->
  } else if (tentativa !== numeroSecreto) {
    if (score > 0) {
      tentativa > numeroSecreto
        ? displayMessage(`📈 Muito alto!`)
        : displayMessage(`📉 Muito baixo!`);

      if (tentativa === numeroSecreto + 5) {
        displayMessage(`📈 Muito alto, mas está quente! 🔥`);
      } else if (tentativa === numeroSecreto - 5) {
        displayMessage(`📉 Muito baixo, mas está quente!🔥`);
      }

      if (tentativa > 100 || tentativa < 0) {
        displayMessage(`🤚🏽 Tente apenas números de 1 a 100!`);
        score++;
      }

      score--;
      document.querySelector('.score').textContent = score;

      if (score === 3 || score === 2 || score === 1 || score === 0) {
        displayMessage(`🫣 Últimas tentativas...`);
      }
    } else {
      displayMessage(`👎 Você perdeu o jogo!`);
      document.querySelector('.number').textContent = numeroSecreto;
      document.querySelector('body').style.backgroundColor = '#ec5353';
    }
  }
});

//BUTTON AGAIN EVENT ->
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numeroSecreto = Math.trunc(Math.random() * 100) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

  displayMessage(`Começando os palpites...`);
});

import './css/main.css';

const divMessages: HTMLDivElement = document.querySelector('#divMessages');
const textBoxMessage: HTMLInputElement = document.querySelector('#tbMessage');
const btnSend: HTMLButtonElement = document.querySelector('#btnSend');

textBoxMessage.addEventListener('keyup', (e: KeyboardEvent) => {
  if (e.keyCode === 13) {
    send();
  }
});

btnSend.addEventListener('click', send);

function send() {}

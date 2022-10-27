const container = document.querySelector('.container');
const changeColourBtn = document.querySelector('.change-colour-button');

function generateRandomColour() {
  const randomColour = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColour}`;
}

changeColourBtn.addEventListener('click', generateRandomColour)
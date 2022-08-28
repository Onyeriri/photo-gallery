let descriptionElement = document.getElementById('description');

let closeElement = document.getElementById('close');

let BTNLetter = document.getElementById('card_two_btn');

let openLetter = document.getElementById('card_one_btn');

const toggleDescription = () => {

  if (descriptionElement.style.display === 'block') {
    descriptionElement.style.display = 'none';

    openLetter.innerText = 'Open description';
  } else {
    descriptionElement.style.display = 'block';

    openLetter.innerText = 'Close description'
  }

}

const closeDescription = () => {

  if (closeElement.style.display === 'block') {
    closeElement.style.display = 'none';
    BTNLetter.innerText = 'Open description';

  } else {
    closeElement.style.display = 'block';
    BTNLetter.innerText = 'Close description'
  }

}

console.log(descriptionElement.style.display);
// First card section variables
let descriptionElement = document.getElementById('description');
let closeElement = document.getElementById('close');
let BTNLetter = document.getElementById('card_two_btn');
let openLetter = document.getElementById('card_one_btn');

// Second card section variables
let secondDescriptionOne = document.getElementById('second_description_one');
let secondClose = document.getElementById('second_close');
let secondBTNOne = document.getElementById('second_one_btn');
let secondBTNTwo = document.getElementById('second_two_btn');

// First section function declaration
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

// second card section function declaration
const secondToggleDescription = () => {
  if (secondDescriptionOne.style.display === 'block') {
    secondDescriptionOne.style.display = 'none';

    secondBTNOne.innerText = 'Open description';
  } else {
    secondDescriptionOne.style.display = 'block';

    secondBTNOne.innerText = 'Close description';
  }

};

const SecondCloseDescription = () => {
  if (secondClose.style.display === 'block') {
    secondClose.style.display = 'none';
    secondBTNTwo.innerText = 'Open description';

  } else {
    secondClose.style.display = 'block';
    secondBTNTwo.innerText = 'Close description';
  }
};
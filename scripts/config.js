function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;  //sprawdza, który btn kliknięty - player 1 czy 2
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  document.getElementById('playername').value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  //zapobiega automatycznemu wysyłaniu formularza do serwera
  //i odświeżaniu strony (bo przeglądarka nie wie, co innego z tym zrobić)

  const formData = new FormData(event.target);
  //FormData - instantiating an object based on an object blueprint
  //knows how to generate objects that have a certain shape
  //takes a form (HTML elem.) and then automatically extract values entered into inputs in that form
  //JS automatycznie będzie szukał inputs w formularzu (którę mają name), dzięki Form Data

  const enteredPlayerName = formData.get('playername').trim();
  //get value; name att., nie id!!
  //trim usuwa nadmiar white space - '     Max      ' => 'Max'

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;                                 //return stops executing a function!
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
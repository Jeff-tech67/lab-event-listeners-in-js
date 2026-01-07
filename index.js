function changeBackgroundColor() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

function displayKeyPress(event) {
  var keyPressDisplay = document.getElementById('keyPressDisplay')
  keyPressDisplay.textContent = 'Key pressed: ' + event.key
}

function displayUserInput() {
  var textInput = document.getElementById('textInput')
  var textInputDisplay = document.getElementById('textInputDisplay')

  textInputDisplay.textContent = 'You typed: ' + textInput.value
}

function setupEventListeners() {
  var changeButton = document.getElementById('changeColorButton')
  changeButton.addEventListener('click', changeBackgroundColor)

  var resetButton = document.getElementById('resetColorButton')
  resetButton.addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)

  var inputField = document.getElementById('textInput')
  inputField.addEventListener('input', displayUserInput)
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners
}
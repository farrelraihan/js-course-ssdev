const buttonTest = document.querySelector('.js-btn')
const containsResult = buttonTest.classList.contains('js-btn');
document.querySelector('.js-check-result').innerHTML = containsResult

function toggleCheck(selector){
  const buttonToggle = document.querySelector(selector);
  const toggleResult = buttonToggle.classList.contains('is-toggled');

  if (toggleResult === true){
    buttonToggle.classList.remove('is-toggled');
  } else {
    buttonToggle.classList.add('is-toggled');
  }
}

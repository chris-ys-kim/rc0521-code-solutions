var $open = document.querySelector('.open');
var $background = document.querySelector('.background.off');
var $content = document.querySelector('.content.off');
var $survey = document.querySelector('.survey');

function on(event) {
  $background.className = 'background on';
  $content.className = 'content on';
}

$open.addEventListener('click', on);

function off(event) {
  $background.className = 'background off';
  $content.className = 'content off';
}

$survey.addEventListener('click', off);

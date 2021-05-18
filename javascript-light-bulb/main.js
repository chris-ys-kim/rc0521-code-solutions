var $bulb = document.querySelector('.light.on');
var $background = document.querySelector('.light-container.on');
var counter = 0;
$bulb.addEventListener('click', function (event) {
  counter++;
  if (counter % 2 === 1) {
    $bulb.className = 'light off';
    $background.className = 'light-container off';
  } else {
    $bulb.className = 'light on';
    $background.className = 'light-container on';
  }
});

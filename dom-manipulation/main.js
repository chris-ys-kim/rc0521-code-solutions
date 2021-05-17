var clickCount = 0;

var $hot = document.querySelector('.hot-button');
var $click = document.querySelector('.click-count');

function increment(event) {
  clickCount++;
  $click.textContent = $click.textContent.replace(clickCount - 1, clickCount);
  if (clickCount < 4) {
    $hot.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hot.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hot.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hot.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hot.className = 'hot-button hot';
  } else {
    $hot.className = 'hot-button nuclear';
  }
}

$hot.addEventListener('click', increment);

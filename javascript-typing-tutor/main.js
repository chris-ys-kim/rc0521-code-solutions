var $body = document.querySelector('body');
var $span = document.querySelectorAll('span');

var count = 0;
$body.addEventListener('keydown', function (event) {
  if (count < $span.length) {
    if ($span[count].innerText === event.key) {
      $span[count].className = 'right';
      if (count !== $span.length - 1) {
        $span[count + 1].className = 'underline';
      }
      count++;
    } else {
      $span[count].className = 'wrong red';
    }
  }
});

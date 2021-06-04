var $ = document.querySelector.bind(document);
var $circleOne = document.querySelector('.circleOne');
var $circleTwo = $('.circleTwo');
var $circleThree = $('.circleThree');
var $circleFour = $('.circleFour');
var $circleFive = $('.circleFive');
var $next = $('.next');
var $prev = $('.prev');
var img = $('img');
var imgInterval = setInterval(imgChange, 2000);
var count = 1;

function verifyImg() {
  if (count === 1) {
    img.className = 'img01';
    img.setAttribute('src', 'images/001.png');
    $circleOne.className = 'fas fa-circle cir circleOne ';
    $circleTwo.className = 'far fa-circle cir circleTwo';
    $circleFive.className = 'far fa-circle cir circleFive';

  } else if (count === 2) {
    img.className = 'img02';
    img.setAttribute('src', 'images/004.png');
    $circleOne.className = 'far fa-circle cir circleOne';
    $circleTwo.className = 'fas fa-circle cir circleTwo';
    $circleThree.className = 'far fa-circle cir circleThree';

  } else if (count === 3) {
    img.className = 'img03';
    img.setAttribute('src', 'images/007.png');
    $circleTwo.className = 'far fa-circle cir circleTwo';
    $circleThree.className = 'fas fa-circle cir circleThree';
    $circleFour.className = 'far fa-circle cir circleFour';

  } else if (count === 4) {
    img.className = 'img04';
    img.setAttribute('src', 'images/025.png');
    $circleThree.className = 'far fa-circle cir circleThree';
    $circleFour.className = 'fas fa-circle cir circleFour';
    $circleFive.className = 'far fa-circle cir circleFive';

  } else if (count === 5) {
    img.className = 'img05';
    img.setAttribute('src', 'images/039.png');
    $circleOne.className = 'far fa-circle cir circleOne';
    $circleFour.className = 'far fa-circle cir circleFour';
    $circleFive.className = 'fas fa-circle cir circleFive';

  }
}

function imgChange(event) {
  count++;
  verifyCount();
  verifyImg();
}

function verifyCount() {
  if (count > 5) {
    count = 1;
  }
}

function verifyCountFloor() {
  if (count <= 0) {
    count = 5;
  }
}

$next.addEventListener('click', function (event) {
  clearInterval(imgInterval);
  count--;
  verifyCountFloor();
  verifyImg();
  imgInterval = setInterval(imgChange, 2000);
});

$prev.addEventListener('click', function (event) {
  clearInterval(imgInterval);
  count++;
  verifyCount();
  verifyImg();
  imgInterval = setInterval(imgChange, 2000);
});

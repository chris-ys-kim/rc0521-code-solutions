var $contactForm = document.querySelector('#contact-form');

var x = {};
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  x.name = $contactForm.elements.name.value;
  x.email = $contactForm.elements.email.value;
  x.message = $contactForm.elements.message.value;
  console.log(x);
});

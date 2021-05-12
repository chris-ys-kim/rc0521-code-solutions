var num100 = 100;
var num200 = 200;
var num300 = 300;
var maximumValue = Math.max(num100 + num200 + num300);
console.log('result of maximumValue:', maximumValue);

var heroes = [
  'superman', 'batman', 'spiderman', 'ironman', 'antman'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('result of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('result of randomHero:', randomHero);

var library = [
  {
    title: 'Point Blanc',
    author: 'Anthony Horowitz'
  },
  {
    title: 'Stormbreaker',
    author: 'Anthony Horowitz'
  },
  {
    title: 'Eagle Strike',
    author: 'Anthony Horowitz'
  }
];

var lastBook = library.pop();
console.log('result of lastBook:', lastBook);

var firstBook = library.shift();
console.log('result of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1);
console.log('library array:', library);

var fullName = 'Chris Kim';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastname:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('result of sayMyName:', sayMyName);

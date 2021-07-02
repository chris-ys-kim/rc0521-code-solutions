const takeAChance = require('./take-a-chance');
const person = takeAChance('Chris');
person.then(value => {
  console.log(value);
});
person.catch(error => {
  console.log(error);
});

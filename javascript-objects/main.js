var student = {
  firstName: 'Chris',
  lastName: 'Kim',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Banker';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Lexus',
  model: 'IS 300',
  year: '2020'
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Mochi',
  type: 'corgi'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);

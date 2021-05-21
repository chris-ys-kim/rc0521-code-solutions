var books = [
  {
    isbn: '9780142406120',
    title: 'Point Blank',
    author: 'Anthony Horowitz'
  },
  {
    isbn: '0142406139',
    title: 'Eagle Strike',
    author: 'Anthony Horowitz'
  },
  {
    isbn: '0142407380',
    title: 'Ark Angel',
    author: 'Anthony Horowitz'
  }
];

console.log('Array of books:', books);
console.log('Type of books:', typeof books);

var json = JSON.stringify(books);
console.log('jsonBooks', json, typeof jsonBooks);

var studentStr = '{"id": "25", "name": "Smith}';
console.log("The student's ID and Name: ", studentStr);
console.log('typeof studentInfo: ', typeof studentStr);

var studentJson = JSON.parse(studentStr);
console.log('studentJson', studentJson);
console.log('type of studentJson', typeof studentJson);

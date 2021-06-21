var xhr = new XMLHttpRequest();
xhr.open('GET', 'https:www.themealdb.com/api/json/v1/1/lookup.php?i=52772');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
});
xhr.send();

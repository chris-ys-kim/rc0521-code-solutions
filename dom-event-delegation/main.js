var $taskList = document.querySelector('.task-List');
$taskList.addEventListener('click', function (event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('closest', event.target.tagName.closest('.task-list-item'));
    event.target.tagName.closest('.task-list-item').remove();
  }
});

//JavaScript Functionality Part 1 Goes Here. Comment it all out once finished.

var section = document.querySelector('section');
var button = document.querySelector('button');

var slideToggle = function () {
  section.classList.toggle('hide');
}

button.addEventListener('click', slideToggle);

//jQuery functionality will go here. Make sure to iclude the document.ready function.

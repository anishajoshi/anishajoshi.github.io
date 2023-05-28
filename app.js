// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
	var projectItems = document.querySelectorAll(".project-item");

	for (var i = 0; i < projectItems.length; i++) {
	  (function(index) {
		setTimeout(function() {
		  projectItems[index].classList.add("show");
		}, index * 300); 
	  })(i);
	}
	
	// Rest of your existing code for navigation bar and form functionality
  
	const menu = document.querySelector('.header .nav-bar .nav-list .menu');
	const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
	const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
	const header = document.querySelector('.header.container');
  
	menu.addEventListener('click', () => {
	  menu.classList.toggle('active');
	  mobile_menu.classList.toggle('active');
	});
  
	document.addEventListener('scroll', () => {
	  var scroll_position = window.scrollY;
	  if (scroll_position > 100) {
		header.style.backgroundColor = '#83C5BE';
	  } else {
		header.style.backgroundColor = 'transparent';
	  }
	});
  
	menu_item.forEach((item) => {
	  item.addEventListener('click', () => {
		menu.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	  });
	});
  
	const scriptURL = 'https://script.google.com/macros/s/AKfycbx_1sXY0-wZG2lFnFHzrJf1OOCWfW77dN305-wCoVGbXH86qI1u/exec';
	const form = document.forms['submit-to-google-sheet'];
  
	form.addEventListener('submit', e => {
	  e.preventDefault();
	  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message));
	});
  });  
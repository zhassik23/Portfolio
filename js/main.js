// navbar
// variables
const navM = document.getElementById('nav_menu');
const navT = document.getElementById('nav_toggle');
const navC = document.getElementById('nav_close');
const navL = document.querySelectorAll('.nav_link');

// show navbar
if (navT) {
	navT.addEventListener('click', e => {
		navM.classList.add('show_menu');
		navT.classList.add('hide_toggle');
	});
}

// hide navbar
if (navC) {
	navC.addEventListener('click', e => {
		navM.classList.remove('show_menu');
	});

	// hides nav-menu, while clicking nav_links
	navL.forEach(element => {
		element.addEventListener('click', e => {
			navM.classList.remove('show_menu');
		});
	});
}


// home
// typing script
var typed = new Typed(".typing", {
	strings: ["Web Developer", "UI/UX Designer", "React / Vue / Django"],
	typeSpeed: 75,
	loop: true
});


// experience
// variables
const items = document.querySelectorAll('.experience_item');
const viewButtons = document.querySelectorAll('.experience_button');
const closeButtons = document.querySelectorAll('.experience_close');

var item = function(itemClick) {
	items[itemClick].classList.add('item_active');
}

viewButtons.forEach((viewBtn, i) => {
	viewBtn.addEventListener('click', () => {
		item(i);
	});
});

closeButtons.forEach(closeBtn => {
	closeBtn.addEventListener('click', () => {
		items.forEach(item => {
			item.classList.remove('item_active');
		});
	});
});


// qualification
// variables
const tabContents = document.getElementsByClassName('qualification_list');
const tabs = document.querySelectorAll('[data-target]');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);
		// content show/hide
		for (var i = 0; i < tabContents.length; i++) 
			tabContents[i].className = 'qualification_list qualification_hide';
		target.className = 'qualification_list qualification_show';
		// tab color switch
		tabs.forEach(tab => {
			tab.classList.remove('qualification_active');
		})
		tab.classList.add('qualification_active');
	});
});


// skills
// variables
const content = document.getElementsByClassName('skills_content');
const	header = document.querySelectorAll('.skills_header');

function toggleSkills() {
	var currentClass = this.parentNode.className;
	
	// hide skills bars
	for (var i = 0; i < content.length; i++) 
		content[i].className = 'skills_content skills_close';
	
	// show skills bars
	if (currentClass === 'skills_content skills_close') 
		this.parentNode.className = 'skills_content skills_open';
}

header.forEach(element => {
	element.addEventListener('click', toggleSkills);
});


// swiper
var swiper = new Swiper(".projects_container", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
});
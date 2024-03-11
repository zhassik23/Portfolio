// Navbar - variables
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

// Experience - variables
const items = document.querySelectorAll('.experience_item');
const viewButtons = document.querySelectorAll('.experience_button');
const closeButtons = document.querySelectorAll('.experience_close');

var item = function(itemClick) {
	items[itemClick].classList.add('item_active');
	document.body.classList.add("freeze");
}

viewButtons.forEach((viewBtn, i) => {
	viewBtn.addEventListener('click', () => {
		item(i);
	});
});

closeButtons.forEach(closeBtn => {
	closeBtn.addEventListener('click', () => {
		document.body.classList.remove("freeze");
		items.forEach(item => {
			item.classList.remove('item_active');
		});
	});
});

// variables
const navM = document.getElementById('nav_menu');
const navT = document.getElementById('nav_toggle');
const navC = document.getElementById('nav_close');
const navL = document.querySelectorAll('.nav_link')

// show navbar
if (navT) {
	navT.addEventListener('click', (e) => {
		navM.classList.add('show_menu');
		navT.classList.add('hide_toggle');
	})
}

// hide navbar
if (navC) {
	navC.addEventListener('click', (e) => {
		navM.classList.remove('show_menu');
	});

	// hides nav-menu, while clicking nav_links
	navL.forEach(e => {
		e.addEventListener('click', (e) => {
			navM.classList.remove('show_menu');
		});
	});
}

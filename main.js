const navM = document.getElementById('nav_menu');
const navC = document.getElementById('nav_close'); 
const navT = document.getElementById('nav_toggle'); 

if (navT) {
	navT.addEventListener('click', () =>{
		navM.classList.add('show_menu')
	})
}

if (navC) {
	navC.addEventListener('click', () =>{
		navM.classList.remove('show_menu')
	})
}
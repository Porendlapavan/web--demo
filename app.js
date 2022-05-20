// main header navbar open on click
function classToggle() {
	const navs = document.querySelectorAll('.navbar-links')

	navs.forEach(nav => nav.classList.toggle('navbar-links-active'));
}

document.querySelector('.toggle-buttons')
	.addEventListener('click', classToggle);
window.addEventListener('load', function() {
	var menu = document.querySelector('.header-menu');
	var title = document.querySelector('.header-menu-titulo');
	if (title) {
		title.addEventListener('click', function() {
			if (menu.hasAttribute('data-ativo')) {
				menu.removeAttribute('data-ativo');
			} else {
				menu.setAttribute('data-ativo', '');
			}
		})
	}
});
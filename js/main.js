const cards = document.querySelectorAll('.wrap__card');
const popup = document.getElementById('popup');
const btn_cerrar = document.getElementById('btn_close');
const popup_title = document.getElementById('titulo');
const popup_img = document.getElementById('popup_img');
const popup_description = document.getElementById('descripcion');

cards.forEach(card => {
	card.addEventListener('click', e => {
		if (
			e.target.className.includes('wrap__h3') ||
			e.target.className.includes('wrap__p')
		) {
			popup.classList.add('popup--visible');
			popup_title.textContent = e.target.parentNode.dataset.titulo;
			popup_img.setAttribute(
				'src',
				e.target.parentNode.dataset.image_src
			);
			popup_description.textContent =
				e.target.parentNode.dataset.descripcion;
		} else {
			popup.classList.add('popup--visible');
			popup_title.textContent = e.target.dataset.titulo;
			popup_img.setAttribute('src', e.target.dataset.image_src);
			popup_description.textContent = e.target.dataset.descripcion;
		}
	});
});

popup.addEventListener('click', e => {
	e.target.id !== 'pop' ? popup.classList.remove('popup--visible') : '';
});

btn_cerrar.addEventListener('click', e => {
	popup.classList.remove('popup--visible');
});

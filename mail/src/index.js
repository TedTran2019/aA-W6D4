const Router = require('./router.js');

document.addEventListener('DOMContentLoaded', event => {
	let eles = document.querySelectorAll('.sidebar-nav li');
	let content = document.querySelector('.content');
	new Router(content)
	eles.forEach(ele => {
		ele.addEventListener('click', event => {
			window.location.hash = ele.innerText.toLowerCase();
		});
	});
});

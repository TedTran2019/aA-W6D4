const Router = require('./router.js');
const Inbox = require('./Inbox.js');

const routes = {
	inbox: Inbox
};

document.addEventListener('DOMContentLoaded', event => {
	let eles = document.querySelectorAll('.sidebar-nav li');
	let content = document.querySelector('.content');
	new Router(content, routes);
	location.hash = "#inbox";
	eles.forEach(ele => {
		ele.addEventListener('click', event => {
			window.location.hash = ele.innerText.toLowerCase();
		});
	});
});

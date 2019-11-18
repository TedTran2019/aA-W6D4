const DomNodeCollection = require('./dom_node_collection.js');

window.$l = arg => {
	let arr = [];

	if (arg instanceof HTMLElement) {
		arr = [arg];
	} else {
		let nodeList = document.querySelectorAll(arg);
		nodeList.forEach(node => {
			arr.push(node);
		});
	}
	return new DomNodeCollection(arr);
};

class DOMNodeCollection {
	constructor(arr) {
		this.arr = arr;
	}

	html(string) {
		if (typeof string === 'string') {
			this.arr.forEach(node => {
				node.innerHTML = string;
			});
		} else if (this.arr.length > 0) {
			return this.arr[0].innerHTML;
		}
	}

	empty() {
		this.html('');
	}

	append(children) {
		if (this.arr.length === 0) {
			return;
		}
		if (typeof children === 'string') {
			this.arr.forEach(node => node.innerHTML += children);
		}
		if (children instanceof Object) {
			if (!(children instanceof DOMNodeCollection)) {
				children = window.$l(children);
			}
			this.arr.forEach(node => {
				children.arr.forEach(child => {
					node.appendChild(child.cloneNode(true));
				});
			});
		}
	}

	attr(attrib, value) {
		if (attrib === undefined || this.arr.length === 0) {
			return;
		}

		if (value !== undefined) {
			this.arr.forEach(node => {
				node.setAttribute(attrib, value);
			});
		} else {
			return this.arr[0].getAttribute(attrib);
		}
	}

	addClass(classes) {
		classes = classes.split(' ');
		this.arr.forEach(node => {
			node.classList.add(...classes);
		});
	}

	removeClass(classes) {
		classes = classes.split(' ');
		this.arr.forEach(node => {
			node.classList.remove(...classes);
		});
	}

	children() {
		let arr = [];
		this.arr.forEach(node => {
			arr.push(...Array.from(node.children));
		});
		return new DOMNodeCollection(arr);
	}

	parent() {
		let arr = [];
		this.arr.forEach(node => {
			if (!node.parentNode.visited) {
				arr.push(node.parentNode);
				node.parentNode.visited = true;
			}
		});
		return new DOMNodeCollection(arr);
	}

	find(selector) {
		let arr = [];
		this.arr.forEach(node => {
			arr = arr.concat(Array.from(node.querySelectorAll(selector)));
		});
		return new DOMNodeCollection(arr);
	}

	remove() {
		this.arr.forEach(node => {
			node.remove();
		});
	}
}

module.exports = DOMNodeCollection;

class Router {
	constructor(node) {
		this.node = node;
		this.start();
	}

	start() {
		this.render();
		window.addEventListener('hashchange', _event => this.render());
	}

	activeRoute() {
		let locationStr = window.location.hash
		return locationStr.slice(1, locationStr.length);
	}

	render() {
		this.node.innerHTML = "";
		let currentRoute = this.activeRoute();
		let newP = document.createElement('p');
		newP.innerHTML = currentRoute;
		this.node.appendChild(newP);
	}
}

module.exports = Router;

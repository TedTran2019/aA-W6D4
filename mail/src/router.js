class Router {
	constructor(node, routes) {
		this.node = node;
		this.routes = routes;
		this.start();
	}

	start() {
		this.render();
		window.addEventListener('hashchange', _event => this.render());
	}

	activeRoute() {
		let locationStr = window.location.hash
		return this.routes[locationStr.slice(1, locationStr.length)];
	}

	render() {
		let component = this.activeRoute();
		this.node.innerHTML = "";
		if (component) {
			let componentNode = component.render();
			this.node.appendChild(componentNode);
		}
	}
}

module.exports = Router;

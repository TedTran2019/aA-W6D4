const DomNodeCollection = require('./dom_node_collection.js');

window.queue = [];
const runOnceLoaded = function() {
	window.queue.forEach(func => func());
	window.queue = [];
	clearInterval(waitForLoad);
};

const waitForLoad = function() {
	if (document.readyState === 'complete') {
		runOnceLoaded();
		return;
	}

	setInterval(() => {
		if (document.readyState === 'complete') {
			runOnceLoaded();
		}
	}, 100);
};

window.$l = arg => {
	if (typeof arg === 'function') {
		window.queue.push(arg);
		if (window.queue.length === 1) {
			waitForLoad();
		}
		return;
	}

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

window.$l.extend = (first_obj, ...objs) => {
	objs.forEach(obj => {
		for (let attrib in obj) {
			first_obj[attrib] = obj[attrib];
		}
	});
	return first_obj;
};

window.$l.ajax = options => {
	const defaults = {
		success: () => console.log('success!') ,
		error: () => console.log('error!'),
		url: window.location.href,
		method: 'GET',
		data: {},
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
	};
	$l.extend(defaults, options);
	const xhr = new XMLHttpRequest();
	xhr.open(defaults['method'], defaults['url']);
	xhr.onload = () => {
		if (xhr.status === 200) {
			defaults['success'](JSON.parse(xhr.response), xhr.status);
		} else {
			defaults['error'](xhr.statusText);
		}
	};
	xhr.send(defaults['data']);
};

const MessageStore = require('./message_store.js');

Sent = {};

Sent.render = function () {
	let ul = document.createElement('ul');
	ul.className = 'messages';
	MessageStore.getSentMessages().forEach(message => {
		messageNode = this.renderMessage(message);
		ul.appendChild(messageNode);
	});
	return ul;
};

Sent.renderMessage = function (message) {
	let li = document.createElement('li');
	li.className = 'message';
	li.innerHTML = `
	<span class="to">To: ${message.to}</span>
	<span class="subject">${message.subject}</span>
	<span class="body">${message.body}</span>
	`;
	return li;
};

module.exports = Sent;

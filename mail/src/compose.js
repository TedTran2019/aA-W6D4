const MessageStore = require('./message_store.js');

Compose = {};

Compose.render = function() {
	const div = document.createElement('div');
	div.addEventListener('change', event => {
		let ele = event.target;
		MessageStore.updateDraftField(ele.name, ele.value);
	});
	div.addEventListener('submit', event => {
		event.preventDefault();
		MessageStore.sendDraft();
		window.location.hash = "#inbox";
	});
	div.className = 'new-message';
	div.innerHTML = this.renderForm();
	return div;
};

Compose.renderForm = function() {
	const draft = MessageStore.getMessageDraft;
	const draftForm = `
		<p>New Message</p>
		<form class="compose-form">
			<input type="text"
			name="to"
			value="${draft.to}"
			placeholder="Recipient">

			<input type="text"
			name="subject"
			value="${draft.subject}"
			placeholder="Subject">

			<textarea name="body" rows="20">${draft.body}</textarea>

			<button
			type="submit"
			class="btn btn-primary submit-message">Send</button>
		</form>
	`;
	return draftForm;
};

module.exports = Compose;

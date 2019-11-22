const messages = {
	sent : [],
	inbox : []
};

const message1 = {
	to: "friend@mail.com",
	subject: "Check this out",
	body: "It's so cool"
};
const message2 = {
	to: "person@mail.com",
	subject: "zzz",
	body: "so booring"
};
const message3 = {
	from: "grandma@mail.com",
	subject: "Fwd: Fwd: Fwd: Check this out",
	body:
		"Stay at home mom discovers cure for leg cramps. Doctors hate her"
};
const message4 = {
	from: "person@mail.com",
	subject: "Questionnaire",
	body: "Take this free quiz win $1000 dollars"
};

messages.sent.push(message1, message2);
messages.inbox.push(message3, message4);

MessageStore = {
	getInboxMessages : () => messages.inbox,
	getSentMessages : () => messages.sent
};

module.exports = MessageStore;

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (user,number) => {
    console.log(`data recieved from ${user} number ${number}`);
});


customEmitter.on('response', () => {
    console.log('some other logic here');
});


customEmitter.emit('response', 'john', 34);
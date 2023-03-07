// events: The module provides ways on how to handle and emit events. 
//Example of thie module is to create a custom event emitter for a Node.js application.

const EventEmitting = require('events');

class MyEmitting extends EventEmitting {}
const myEmitting = new MyEmitting();
// Attaching a listener to an event
myEmitting.on('event', () => {
  console.log('A great event just occurred right now!!!!!');
});
// Emitting an event
myEmitting.emit('event');

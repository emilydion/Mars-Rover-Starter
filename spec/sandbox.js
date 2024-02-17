const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

let roverObject = new Rover(123456); 
let commands = [new Command('STATUS_CHECK')];
let message = new Message('Test message', commands);

console.log(roverObject.receiveMessage(message));
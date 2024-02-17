const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // 7 tests here!

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let newRover = new Rover(123456); 
    expect(newRover.position).toBe(123456);
    expect(newRover.mode).toBe("NORMAL"); 
    expect(newRover.generatorWatts).toBe(110); 
  }); 

  it("response returned by receiveMessage contains the name of the message", function() {
    let roverObject = new Rover(123456); 
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let response = roverObject.receiveMessage(message);
    expect(roverObject.message = "Test message with two commands"); 
  }); 

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let roverObject = new Rover(123456); 
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    expect(roverObject.receiveMessage(message).results.length).toBe(2); 
  }); 

  it("responds correctly to the status check command", function() {
    let roverObject = new Rover(123456); 
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Test message', commands);
    expect(roverObject.receiveMessage(message).results[0].roverStatus).toEqual(roverObject); 
  });

  it("responds correctly to the mode change command", function() {
    let roverObject = new Rover(123456); 
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Test message', commands);
    expect(roverObject.receiveMessage(message).results[0].completed).toBe(true);
    roverObject.receiveMessage(message);  
    expect(roverObject.mode).toEqual("LOW_POWER"); 
  });

  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let roverObject = new Rover(123456); 
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 54321)];
    let message = new Message('Test message', commands);
    expect(roverObject.receiveMessage(message).results[1].completed).toBe(false);
  }); 

  it("responds with the position for the move command", function() {
    let roverObject = new Rover(123456); 
    let commands = [new Command('MOVE', 67890)];
    let message = new Message('Test message', commands);
    expect(roverObject.receiveMessage(message).results[0].completed).toBe(true);
    roverObject.receiveMessage(message);  
    expect(roverObject.position).toEqual(67890); 
  });
});

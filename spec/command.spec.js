const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  it("constructor sets command type", function() {
    let newConstructor = new Command("string", 0); 
    expect(newConstructor.commandType).toBe("string"); 
  });

  it("constructor sets value passed in as the 2nd argument", function() {
    let firstConstructor = new Command("string", 0); 
    expect(firstConstructor.value).toBe(0); 

    let secondConstructor = new Command("string", "value"); 
    expect(secondConstructor.value).toBe("value"); 
  });

});
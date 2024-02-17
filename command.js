class Command {
  // commandType: MODE_CHANGE, MOVE, STATUS_CHECK
  // some commandTypes are coupled with value property, but not all
  // Every Command object is a single instruction to be delivered to rover
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
 
 module.exports = Command;
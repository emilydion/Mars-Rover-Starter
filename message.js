class Message {
   // has a name, contains several command objects
   // bundling commands from mission control and delivers them to rover
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error("Name required.");
      }
      this.commands= commands;
   }

}

module.exports = Message;
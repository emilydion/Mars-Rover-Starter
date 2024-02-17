class Rover {
   // represents Mars rover
   // receiveMessage handles various types of commands it receives and updates the rover properties
   constructor(position) {
      this.position = position; 
      if (!position) {
         throw Error("Position required.");
      }
      this.mode = "NORMAL";
      this.generatorWatts = 110; 
   }

   receiveMessage(messageObject) {
      let commandResults = []; 
      for (let i = 0; i < messageObject.commands.length; i++) {
         let resultsObject = {completed: false};

         if (messageObject.commands[i].commandType === "STATUS_CHECK") {
            resultsObject.completed = true; 
            let roverStatus = {generatorWatts: this.generatorWatts, mode: this.mode, position: this.position}; 
            resultsObject["roverStatus"] = roverStatus; 
         }

         if (messageObject.commands[i].commandType === "MODE_CHANGE") {
            resultsObject.completed = true; 
            this.mode = messageObject.commands[i].value; 
         }

         if (messageObject.commands[i].commandType === "MOVE") {
            if (this.mode === "LOW_POWER") {
               resultsObject.completed = false; 
               console.log("Low power, rover cannot be moved at this time."); 
            } else {
               resultsObject.completed = true; 
               this.position = messageObject.commands[i].value;
            }
         }

         commandResults.push(resultsObject); 
      }

      let messageReceived = {
         message: messageObject.name,
         results: commandResults
      }
      return messageReceived; 
   }
}

module.exports = Rover;
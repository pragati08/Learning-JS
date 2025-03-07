function main() {
  class Message {
    // Define static properties here
    sender;
    receiver;
    messageContent;

    // Define the constructor to initialize instance variables
    constructor(sender, receiver, messageContent) {
      this.sender = sender;
      this.receiver = receiver;
      this.messageContent = messageContent;
    }

    static status = "offline";
    static totalMessages = 0;

    // Define static method to change the status
    static changeStatus(updateStatus) {
      this.status = updateStatus;
      console.log(`The status has been changed to ${updateStatus}`);
    }

    static recordMessage() {
      this.totalMessages++;
    }

    // Define static method to record a message and Increment totalMessages

    // Define instance method to display details
    displayDetails() {
      console.log(`
          Sender: ${this.sender}
          Receiver: ${this.receiver}
          Message: ${this.Message}
          Status: ${this.status}
          Total Messages: ${this.totalMessages} `);
    }

    //       Sender: John
    // Receiver: Jane
    // Message: Hello
    // Status: online
    // Total Messages: 1
  }

  Message.changeStatus("online");
  Message.recordMessage();
  const myMessage = new Message("John", "Jane", "Hello");
  myMessage.displayDetails();

  return Message;
}
main();

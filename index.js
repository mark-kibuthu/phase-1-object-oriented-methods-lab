// BoardMember constructor function//
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  
    // Method: veto//
    this.veto = function() {
      return "No, I must disagree";
    };
  
    // Method: approve//
    this.approve = function() {
      return "You can do that!";
    };
  
    // Method: doCharity//
    this.doCharity = function() {
      return "I like to help people.";
    };
  
    // Method: releasePressStatement//
    this.releasePressStatement = function() {
      return "You will see great things from Scuber.";
    };
  
    // Method: sayHi//
    this.sayHi = function() {
      return "Hi, my name is " + this.name + ". I am from " + this.homeState + ", and I was trained in " + this.training + ".";
    };
  }
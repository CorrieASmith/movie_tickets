function Ticket(userType, matinee) {

  this.userType = userType;
  this.matinee = matinee;
}

Ticket.prototype.ticketPrice = function() {
  if (this.userType === "senior" && this.matinee === false) {
    return "$10.50";
  } else if (this.userType === "student" && this.matinee === false){
    return "$10.50";
  } else if (this.userType === "child" && this.matinee === false){
    return "$9.50";
  } else if (this.userType === "adult" && this.matinee === false){
    return "$12.50";
  }

  if (this.matinee === true) {
    return "$6.50";
  }

};

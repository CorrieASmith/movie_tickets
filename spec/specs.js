describe("Ticket", function() {
  it("receives user input and returns price of ticket", function() {
    var testTicket = new Ticket("senior", false);
    expect(testTicket.ticketPrice()).to.equal("$10.50");
  });

  it("gives a major discount for the matinee", function() {
    var testTicket = new Ticket("adult", true);
    expect(testTicket.ticketPrice()).to.equal("$6.50");
  });
});

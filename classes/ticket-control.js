class Ticket {
  constructor (number, desktop) {
    this.number = number
    this.desktop = desktop
  }
}

class TicketControl {
  constructor() {
    this.lastTicket = 0
    this.tickets = []
    this.lastFourTickets = []
  }

  createNewTicket() {
    this.lastTicket += 1
    const ticket = new Ticket(this.lastTicket, null)
    this.tickets.push(ticket)

    return `Ticket ${this.lastTicket}`
  }

  getLastTicket() {
    return `Ticket ${this.lastTicket}`
  }
}
module.exports = {
  TicketControl
}
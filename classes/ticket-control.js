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

  attendNextTicket() {
    if (this.tickets.length <= 0) {
      return ''
    } else {
      const ticketAttend = this.tickets.shift()
      return ticketAttend.number
    }
  }
}
module.exports = {
  TicketControl
}
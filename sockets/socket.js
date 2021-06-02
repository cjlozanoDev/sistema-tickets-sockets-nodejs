const { io } = require('../server');
const  { TicketControl } = require('../classes/ticket-control')

const ticketControl = new TicketControl

io.on('connection', client => {
  console.log('Usuario conectado')
  
  client.emit('currentState', {
    currentTicket: ticketControl.getLastTicket(),
    lastFourTickets: ticketControl.getLastFourTickets()
  })
  client.on('currentState', (data, callback) => {
    const currentTicket = ticketControl.getLastTicket()
    const lastFourTickets = ticketControl.getLastFourTickets()
    callback({currentTicket, lastFourTickets})
  })
 
  client.on('getLastTicket', (data, callback) => {
    const lastTicket = ticketControl.getLastTicket()
    callback(lastTicket)
  })
  client.on('attendNextTicket', (data, callback) => {
    const ticket = ticketControl.attendNextTicket(data.numberDesktop)
    client.broadcast.emit('lastFourTickets', {
      lastFourTickets: ticketControl.getLastFourTickets()
    })
    callback(ticket)
  })

  client.on('generateNewTicket', (data, callback) => {
    console.log('Generando nuevo ticket')
    const newTicket = ticketControl.createNewTicket()
    console.log('El nuevo ticket es: ', newTicket )
    callback(newTicket)
  })
})


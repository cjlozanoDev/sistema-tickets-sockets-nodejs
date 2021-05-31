const { io } = require('../server');
const  { TicketControl } = require('../classes/ticket-control')

const ticketControl = new TicketControl

io.on('connection', client => {
  console.log('Usuario conectado')
  
  client.emit('currentState', {
    currentTicket: ticketControl.getLastTicket()
  })

  client.on('getLastTicket', (data, callback) => {
    const lastTicket = ticketControl.getLastTicket()
    callback(lastTicket)
  })
  client.on('attendNextTicket', (data, callback) => {
    const ticket = ticketControl.attendNextTicket()
    callback(ticket)
  })

  client.on('generateNewTicket', (data, callback) => {
    console.log('Generando nuevo ticket')
    const newTicket = ticketControl.createNewTicket()
    console.log('El nuevo ticket es: ', newTicket )
    callback(newTicket)
  })
})


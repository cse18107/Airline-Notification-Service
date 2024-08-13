const {TicketRepository} = require('../repositories')
const { Mailer } = require('../config')

const ticketRepo = new TicketRepository()

async function sendEmail(mailForm, mailTo, subject, text) {
  try {
    const response = await Mailer.sendMail({
      from: mailForm,
      to: mailTo,
      subject: subject,
      text: text,
    })
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function createTicket(data) {
  try {
    const response = await ticketRepo.create(data)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function getPendingEmails() {
  try {
    const response = await ticketRepo.getPendingEmails()
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  sendEmail,
  createTicket,
  getPendingEmails
}

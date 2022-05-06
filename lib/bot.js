const TelegramBot = require('node-telegram-bot-api')
const ExplorerController = require('./controllers/ExplorerController')

const token = ''
const bot = new TelegramBot(token, { polling: true })
bot.on('polling_error', console.log) // Muestra donde están los errores.

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id
  const resp = match[1] // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp)
})

// Listen for any kind of message.
bot.on('message', msg => {
  const chatId = msg.chat.id
  const message = Number(msg.text) || msg.text.toLowerCase().trim()

  if (typeof message === 'number') {
    const fizzbuzzTrick = ExplorerController.applyValidationInNumber(message)
    const responseBot = `Tu número es: ${message}. Validación: ${fizzbuzzTrick}`
    bot.sendMessage(chatId, responseBot)
    return
  }

  if (message === 'node' || message === 'java') {
    const explorerNamesList = ExplorerController.getListNameByMission(message)
    let templateExplorersList = ''
    templateExplorersList += 'Lista de Explorers | Mission Backend con '
    templateExplorersList += message === 'node' ? 'NodeJs.\n' : 'Java.\n'
    templateExplorersList += '//'.repeat(24) + '\n'

    explorerNamesList.forEach((names, index) => {
      templateExplorersList += `${++index}. ${names}\n`
    })

    bot.sendMessage(chatId, templateExplorersList)
    return
  }

  bot.sendMessage(chatId, 'Envía un número válido')
})

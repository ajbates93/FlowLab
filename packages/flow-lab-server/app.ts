import { feathers } from '@feathersjs/feathers'
import { koa, rest, bodyParser, errorHandler, serveStatic } from '@feathersjs/koa'
import socketio from '@feathersjs/socketio'

// This is the interface for the message data
interface Message {
  id?: number,
  text: string
}

// A message service that allows us to create new
// and return all existing messages
class MessageService {
  messages: Message[] = []

  async find() {
    // Just return all our messages
    return this.messages
  }

  async create(data: Pick<Message, 'text'>) {
    // The new message is the data text with a unique identifier added
    // using the messages length since it changes whenever we add one
    const message: Message = {
      id: this.messages.length,
      text: data.text
    }

    this.messages.push(message)

    return message
  }
}

// This tells Typescript what services we are registering
type ServiceTypes = {
  messages: MessageService
}

// Creates a KoaJS compatible Feathers application
const app = koa<ServiceTypes>(feathers())

// Use the current folder for static file hosting
app.use(serveStatic('.'))
// Register the error handle
app.use(errorHandler())
// Parse JSON request bodies
app.use(bodyParser())

// Register REST service handler
app.configure(rest())
// Configure Socket.io real-time APIs
app.configure(socketio())
// Register our messages service
app.use('messages', new MessageService())

// Add any new real-time connection to the `everybody` channel
app.on('connection', (connection) => app.channel('everybody').join(connection))
// Publish all events to the `everybody` channel
app.publish((_data) => app.channel('everybody'))

// Start the server
app.listen(3030).then(() => console.log('Feathers server listening on localhost:3030'))

// For good measure let's create a message
// So our API doesn't look so empty
app.service('messages').create({
  text: 'Hello world from the server'
})
// const app = feathers<ServiceTypes>()

// // Register the message service on the Feathers application
// app.use('messages', new MessageService())

// // Log every time a new message has been created
// app.service('messages').on('created', (message: Message) => {
//   console.log('A new message has been created', message)
// })

// // A function that creates messages and then logs
// // all existing messages on the service
// const main = async () => {
//   // Create a new message on our message service
//   await app.service('messages').create({
//     text: 'Hello Feathers'
//   })

//   // add another one
//   await app.service('messages').create({
//     text: 'Hello again'
//   })

//   const messages = await app.service('messages').find()

//   console.log('All messages', messages)
// }

// main()
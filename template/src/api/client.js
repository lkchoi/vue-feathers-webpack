import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import socket from './socket'

const client = feathers()

client.configure(socketio(socket))
client.configure(auth({storage: window.localStorage}))

export default client

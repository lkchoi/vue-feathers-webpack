import io from 'socket.io-client'

const host = '{{ feathersClientUrl }}'

const socket = io(host, {
  transports: ['websocket'],
  forceNew: true
})

socket.on('connect', () => console.info(`socket connected to ${host}`))
socket.on('disconnect', (...args) => console.warn('socket disconnected', ...args))

export default socket

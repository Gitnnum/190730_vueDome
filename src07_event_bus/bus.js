const bus = {}
let listenersContainer = {}
bus.on = function (eventName, listener) {
    let listeners = listenersContainer[eventName]
    if (!listeners) {
        listenersContainer[eventName] = listeners = []
    }
    listeners.push(listener)
}
bus.emit = function (eventName, data) {
    let listeners = listenersContainer[eventName]
    if (listeners && listeners.length) {
        listeners.forEach(listener => {
            listener(data)
        })
    }
}
bus.off = function (eventName) {
    if (eventName === undefined || eventName === null) {
        listenersContainer = {}
    } else {
        listenersContainer[eventName] = []
    }
}
export default bus

bus.on('add', (data) => {
    console.log(data)
})
bus.on('add', (data) => {
    console.log(data)
})
bus.on('delete', (data) => {
    console.log(data)
})
bus.off('add')
bus.emit('add', 'add')
bus.emit('delete', 'delete')

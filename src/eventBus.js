let eventBus = {}
// 在on的时候我们需要将回调函数存起来，等到分发事件的时候调用
let listenersContainer = {} // {eventName1: [listener1,listener2],eventName2: [listener3]}
// 存在一个listenersContainer容器中
eventBus.on = function (eventName, listener) {
    let listeners = listenersContainer[eventName]
    if (!listeners) {
        listenersContainer[eventName] = listeners = []
    }
    listeners.push(listener)
}
eventBus.emit = function (eventName, data) {
    const listeners = listenersContainer[eventName]
    if (listeners && listeners.length) {
        listeners.forEach(listener => {
            listener(data)
        })
    }
}
eventBus.off = function (eventName) {
    if (eventName === undefined || eventName === null) {
        listenersContainer = {}
    } else {
        delete listenersContainer[eventName]
    }
}
export default eventBus

eventBus.on('add', (data) => {
    console.log('add', data)
})
eventBus.on('add', (data) => {
    console.log('add2', data)
})
eventBus.on('delete', (data) => {
    console.log('delete', data)
})
// eventBus.off()
// eventBus.off('add')
eventBus.emit('add', 'add')
eventBus.emit('delete', 'delete')

// importa o módulo eventos
const events = require('events')

// cria um gerenciado de eventos
const eventMgmt = new events.EventEmitter();
eventMgmt.on('bomdia', (data) =>{
    console.log('Recebi um bom dia de: ${data}')
})

//inclui um subscriber ao evento
eventMgmt.addListener('boatarde', (data) =>{
    console.log('Aconteceu de ${data}');
})

//dispara o evento
eventMgmt.emit('bomdia','Romel')
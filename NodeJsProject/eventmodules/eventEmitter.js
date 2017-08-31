/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var event=require('events');
var eventEmitter=new event.EventEmitter();

function my() {
    console.log('i hear a scream')
}

eventEmitter.on('scream',my);

eventEmitter.emit('scream');
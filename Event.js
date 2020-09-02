var events=require('events');
// console.log(events)
var eventEmitter = new events.EventEmitter();
// console.log(eventEmitter)


//eventEmitter.on('eventName',eventHandler/call backfunction)
eventEmitter.on('sahil',()=>{
    console.log('Hii i am an event')
})

eventEmitter.emit('sahil')



var timeid=setTimeout(()=>{
    console.log("Hii")
},4000)
clearTimeout(timeid)    

 var timeid =setInterval(()=>
{
    console.log("Hii i'm SetInterval")
},2000)

clearInterval(timeid)
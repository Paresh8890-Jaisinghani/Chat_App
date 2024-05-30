const socket = io()
const messageform = document.getElementById("messageform")
const textmessage = document.getElementById("textmessage")

messageform.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const message = textmessage.value;
    socket.emit('sendmessage',message)
})

socket.on('message',(message)=>{
    console.log(message)
})
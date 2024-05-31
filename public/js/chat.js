const socket = io()
const messageform = document.getElementById("messageform")
const textmessage = document.getElementById("textmessage")

messageform.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const message = textmessage.value;
    socket.emit('sendmessage',message,(error)=>{
        if(error){
            return console.log(error)
        }

        console.log('Message Delivered!')
    })
})

socket.on('message',(message)=>{
    console.log(message)
})


document.querySelector('#btn_location').addEventListener('click',()=>{
    if(!navigator.geolocation){
        return alert("Your Browser doesn't support geolcation")
    }


    navigator.geolocation.getCurrentPosition((position)=>{
        const data ={
            lat : position.coords.latitude,
            long : position.coords.longitude
        }
        
        socket.emit('sendLocation',data,()=>{
            console.log("Location Shared!");
        });
    })
})
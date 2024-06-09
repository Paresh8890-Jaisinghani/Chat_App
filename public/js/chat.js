const socket = io()
const messageform = document.getElementById("message-form")
const textmessage = document.getElementById("textmessage")
const btnmessage = document.getElementById("btnmessage")
const btn_location = document.getElementById("btn_location")
const messages = document.getElementById("messages")


//Templates
const messagetemp = document.getElementById("message-template").innerHTML
const locationtemp = document.getElementById("location-message-template").innerHTML

//options
const {username,room} = Qs.parse(location.search ,{ignoreQueryPrefix : true})

socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messagetemp,{
        message : message.text,
        createdAt : moment(message.createdAt).format('h:mm a')
    })
    messages.insertAdjacentHTML('beforeend',html)
})

socket.on('locationmessage',(url)=>{
    console.log(url);
    const html = Mustache.render(locationtemp,{
        url
    })
    messages.insertAdjacentHTML('beforeend',html);
})


messageform.addEventListener('submit', (ev) => {
    ev.preventDefault();

    btnmessage.setAttribute('disabled','disabled')
    const message = textmessage.value;


    socket.emit('sendmessage', message, (error) => {

        btnmessage.removeAttribute('disabled')
        textmessage.value = ''
        textmessage.focus()
        if (error) {
            return console.log(error)
        }

        console.log('Message Delivered!')
    })
})



btn_location.addEventListener('click', () => {
     


    if (!navigator.geolocation) {
        return alert("Your Browser doesn't support geolcation")
    }

    
    navigator.geolocation.getCurrentPosition((position) => {
        const data = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        }
        btn_location.setAttribute('disabled','disabled');

        socket.emit('sendLocation', data, () => {
            btn_location.removeAttribute('disabled')
            console.log("Location Shared!");
        });
    })
})


socket.emit('join',{username,room});
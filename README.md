1.creating src/index.js in chat_app folder
2.install express and set up the server
3.require path module from express which is a inbuilt library so no need to install 
4.using path library join the public folder which contains index.html with our server 
5.npm i nodemon --save-dev
6.add start script in package.json "start" : "node src/index.js"
7.add "dev": "nodemon src/index.js"
8.In terminal run npmrun start or npm run dev to start the server 
9.setup socket.io connection by calling server using http method 
10.Taking response from index.html (client side response) to the server
11.server --> client using socket.emit()
12.client --> server using socket.on(); 
13.socket.broadcast.emit to emit everybody except the socket itself
14.using socket.on('disconnect',()=>{}) inside io.on('connection') to send message to users if he leaves the chat room
15.using navigator.geolocation.getCurrentPosition to get current location of user.
16.sending the user current location to other users in the form of link
17.Sending acknowledgement message to the client or to the server
18.Rendering Messages to the window using Mustache library.
19.sending location to the client in the form of link 
20.creating messages.js file to send messages with timestamp
21.styling the website and creating join page for the users
22.Accesing username and room name from the client side using QS option in chat.html
23.sending message to the specific room if new user entered using io.to.emit
24.creating users.js file for some functions -- addUsers,removeUsers,getUsers,getUsersinroom

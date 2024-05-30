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
14.socket.on('disconnect',()=>{}) to send message to users if he leaves the chat room
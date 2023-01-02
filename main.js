const express = require('express')
const app = express()
const path = require("path")
const port = 3000
const http=require("http")
const http_server=http.createServer(app)
const io=require('socket.io')(http_server)
 
app.get('/', function (req, res) {
    
    res.sendFile(path.join(__dirname,"index.html"))
})

// hna 3malt event
io.on('connection',function(client) // this line to open connect from server side
 {
    client.on('send_messege',function(msg_text)
    {
        // console.log("Aly")
        client.broadcast.emit("messege",msg_text); 
    })
 })

http_server.listen(port, () => console.log(`Example app listening on port ${port}!`))


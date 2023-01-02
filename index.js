let client=io(); // this line to open connect from Client side
    function send_data()
    {
        let msg_text=document.getElementById("msg_text").value;
        client.emit("send_messege",msg_text);
    }

    client.on('messege',function(msg_text)
    {
        let h2=document.createElement("h2");
        h2.innerText=msg_text;
        // let body=document.getElementById("body")
        document.body.appendChild(h2);

    })


var ws = new WebSocket("ws://www.bitonair.com:8181");

ws.onopen = function (e) {

    console.log('Connection to server opened');
    // ws.send(JSON.stringify(msg1));
}
ws.onmessage = function(e){
    postMessage(e.data);
}
ws.onclose = function(e){
    console.log('connection is closed');
}

function closeWs(){
    ws.close();
}
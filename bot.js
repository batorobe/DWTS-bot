var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexDa = /^\/dae/; botRegexRegr = /^\/regression/; botRegexPos = /^\/positions/;
      botRegexCon = /^\/contracts/; botRegexOff = /^\/offseason/; botRegexRelo = /^\/relocation/; botRegexSail = /^\/sail/;
      botRegexWtf = /^\/wtf/; botRegexHm = /^\/home/; botRegexSch = /^\/schedule/; botRegexRls = /^\/rules/;
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDa.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/540x960.png.d946e263ad1e427f9cf739bcb626f78b");
    this.res.end();
  }
  else if(request.text && botRegexSch.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://sites.google.com/view/dwts2017/schedule");
    this.res.end();
  }
  else if(request.text && botRegexHm.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://sites.google.com/view/dwts2017/home");
    this.res.end();
  }
  else if(request.text && botRegexRls.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://sites.google.com/view/dwts2017/rules");
    this.res.end();
  }
  else if(request.text && botRegexFour.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/657x217.png.e2c156a853e94178b1548bc87e637731");
    this.res.end();
  }
  else if(request.text && botRegexWtf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/272x480.gif.4c76b1febbbf465bac8ed5a1102005bc");
    this.res.end();
  }
  else if(request.text && botRegexSail.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/400x225.gif.570576e78449412994227bed2b86a38d");
    this.res.end();
  }
  else if(request.text && botRegexNo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif");
    this.res.end();
  }
   else if(request.text && botRegexOff.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/576x346.png.52711a67ee0249d48a1597d1109f5003");
    this.res.end();
  }
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/669x475.jpeg.0e19247fd8214658b78863efe178e7c0");
    this.res.end();
  }
  else if(request.text && botRegexRej.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/550x303.gif.eb28e3040fdb4496b8e63fb1c5d2a200");
    this.res.end();
  }
  else if(request.text && botRegexCon.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/667x53.png.9fa76149e29944a4a57609bc2074b974");
    this.res.end();
  }
  else if(request.text && botRegexPos.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/650x292.png.81802bd323ee4104a6495f22fb545854");
    this.res.end();
  }
  else if(request.text && botRegexBed.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/200x150.gif.46eff841d47041328d46f275c5a9041c");
    this.res.end();
  }
  else if(request.text && botRegexTrg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/371x209.gif.9a488370b81243b48b1c8b20f8630a6d");
    this.res.end();
  }
  else if(request.text && botRegexBull.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/112x200.gif.1aa64b691da341e3bbf4e0d52ad66a21");
    this.res.end();
  }
  else if(request.text && botRegexJet.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/200x148.gif.cf9eeb40e4034d7e9fb95e4365a6f8d4");
    this.res.end();
  }
  else if(request.text && botRegexZk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/960x540.gif.377ae8a3a94d4abab13e693196767cd3");
    this.res.end();
  }
  else if(request.text && botRegexPly.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/258x222.gif.e5ceb901c9b04b6190a74eea635fe78b");
    this.res.end();
  }
  else if(request.text && botRegexDeal.test(request.text)) {
    this.res.writeHead(200);
    postMessage("issa big deal");
    this.res.end();
  }
  else if(request.text && botRegexWat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media2.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexLit.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/310x233.gif.f8466181bf184a1a964ef0ee9ba5a604");
    this.res.end();
  }
  else if(request.text && botRegexDon.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/26tknCqiJrBQG6bxC/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexPrz.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1280x687.png.add1b915c55844638d3b4b350b01949d");
    this.res.end();
   }
  
   else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;

var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexHm = /^\/home/; botRegexSch = /^\/schedule/; botRegexRls = /^\/rules/; 
      botRegexUser = /^\/users/; 
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
   else if(request.text && botRegexHm.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://sites.google.com/view/dwts2017/home");
    this.res.end();
  }
  else if(request.text && botRegexSche.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://sites.google.com/view/dwts2017/schedule");
    this.res.end();
  }
  else if(request.text && botRegexRls.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://sites.google.com/view/dwts2017/rules");
    this.res.end();
  }
  else if(request.text && botRegexUser.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://sites.google.com/view/dwts2017/league-members");
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

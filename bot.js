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

var request = require('request');

for (var i = 1 ; i <= 100 ; i++){
setTimeout(() => {
request.post(`https://api.thingspeak.com/apps/thingtweet/1/statuses/update?api_key=${api_key}&status=${message} @${target_account}`);    
}, 50000);
}
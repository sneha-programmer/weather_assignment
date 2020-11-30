var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./route/route.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',routes);
app.engine('html', require('ejs').renderFile);
var PORT = 8080; 
app.set('view engine', 'html');
app.set('views','./views');  

//base request
app.get('/',(req,res)=>{
  console.log('inside default url');
  var data = route.getDate();
})
  
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
});  
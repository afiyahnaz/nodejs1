const express = require('express');
const bodyParser = require('body-parser');
//........................common js...........................

const defaultRouter = require('./routes/defaultRouter');
const bookRouter = require('./routes/bookRouter');

const app = express();
app.listen(3000,function(){
    console.log('server is running on 3000!!!');
});

app.use(bodyParser.json());

//......register   routing.................................
app.use('/',defaultRouter);
app.use('/api/books',bookRouter);


//.............unexpected end of json input...........

// try{
//     const result = JSON.parse('');
//     console.log(result);
// } catch (err){
//     //syntaxError: unexpected end of JSON input
//     console.log('error', err);
// }





//status co
//1xx : information
//2xx : success,    200   ok,   201 created,  204 content
//3xx : redirects
//4xx : client errors,    404  
//5xx : server errors,    501,   500
//100 / sec - 100 / sec

//HTTP request format
//http protocol
//url: www.google.com/api/users

//Request headers:
//Content-Type:application/json
//accept:application/json
//authorization:token
//x-username: xlslsl
//x-password:kadjfgd

//Response Headers:
//Content-type:application/json
//accept:application/xml
//max:


//body:{}
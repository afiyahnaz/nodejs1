console.log("hello node js");
//.................................how to develop server for wesites.....................
const http = require('http');

//handler function
function handler(req,res){
    //routing:........sending user to right place............
    console.log(req.url);
    switch(req.url){
        case'/':
        res.write("Node API");
        break;
        case'/products':
               res.write("List of products");
               break;
       case'/books':
               const books = [
                   {id:1 , name: 'headfirst JS', cost: 140, stock:'true' },
                   {id:2 , name: 'Book by Naz', cost: 140, stock:'false' },
                   {id:3 , name: 'book by afi', cost: 140, stock:'true' },
               ];
               res.write(JSON.stringify(books));// using JSON should use JSON.Stringify
               break;
       case'/authour':
               res.write("List of authour");
               break;
       case'/colors':
               res.write("List of colors");
               break;
       default:
                res.write("Not found");
                break;

    }
    res.end();
   }
//higher order function...
const server = http.createServer(handler);
server.listen(3000,function(){
    console.log("server is running on a port 3000!");  
});



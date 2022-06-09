console.log("hello node js");
//.................................how to develop server for wesites.....................
const http = require('http');

//handler function
function handler(req,res){
    //routing:........sending user to right place............
    console.log(req.url);

   if (req.url){
       res.write("NODE API");
   }
    else if('/products'){
       res.write("List of products");
   }
    else if('/books'){
    res.write("List of books");
}
 else if('/colors'){
    res.write("List of colors");
}
else{
    res.write("Not found")  ;   
    }
res.end();
   }
//higher order function...
const server = http.createServer(handler);
server.listen(3000,function(){
    console.log("server is running on a port 3000!");  
});
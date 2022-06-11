const books = [
    {id:1 , name: 'headfirst JS', cost: 140, stock:'true' },
    {id:2 , name: 'Book by ghdhd', cost: 140, stock:'false' },
    {id:3 , name: 'book by hjdshhd', cost: 140, stock:'true' },
    {id:4 , name: 'headfirst JS',   cost: 140, stock:'true' },
    {id:5 , name: 'Book by ghdhd', cost: 140, stock:'false' },
    {id:6 , name: 'book by hjdshhd', cost: 140, stock:'true' },
    {id:7 , name: 'book by hjdshhd', cost: 140, stock:'true' },
];
class BookCtrl {
get (req,res)  {
    res.status(200);
    res.json(books);    
}
//////summary and details pattern
 ///.....get......adding id.....................
 //GET http://localhost:3000/books/id
getById(req, res){
    const id = +req.params.id;
    console.log(req.params, "parameters");
    let book;
    for(let i =0; i< books.length; i++){
        if(id===books[i].id){
            book = books[i];
        }
    }
    if(book){
        res.status(200);
        res.json(book);
    }else{
        res.status(404);
        res.send("Not Found");
    }
}
//POST http://localhost:3000/books body
//creat...adding book.....mean key POST
create = (req, res) => {

    const payload = req.body;
//..........validation..............
    if(payload.id && payload.name && payload.cost){
        books.push(payload);
        res.status(201); //created
        res.send();

    }else{
        res.status(400);
        res.send("invalid payload");
    }
   
}

//DELETE http://localhost:3000/api/books/:id
delete = (req, res) => {
    const id = +req.params.id;
    for(let i =0; i<books.length; i++){
        if(books[i].id===id){
            books.splice(i, 1);
            break;

        }
    }

    res.status(204);
    res.send();
}

//PUT http://localhost:3000/api/books/:id body{name : "UPdated book name"}

update = (req, res) => {
    const id = +req.params.id;
    const payload = req.body;

  for( let i = 0; i< books.length; i++){
        if(books[i].id ===id){
            books[i].name = payload.name;
            books[i].cost = payload.cost;
        }
    }
    res.status(204);
    res.send();
    
}
 }
module.exports = new BookCtrl();

class BookCtrl {

    get (req,res)  {

    const books = [
        {id:1 , name: 'headfirst JS', cost: 140, stock:'true' },
        {id:2 , name: 'Book by Naz', cost: 140, stock:'false' },
        {id:3 , name: 'book by afi', cost: 140, stock:'true' },
    ];
    res.status(200);
    res.json(books);    
}
}

module.exports = new BookCtrl();

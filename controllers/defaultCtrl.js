//monitoring
//alerting:::::sending msg to any channel
//localhost:3000/health
//facebook.com/health



function get(req,res){
    res.status(200);
    res.send("Hello Express JS!!!!!!!!");
}

function health(req, res){
    const status = {status: 'up'};
    res.json(status);
    res.status(200);
}


module.exports = {
    get,
    health
};
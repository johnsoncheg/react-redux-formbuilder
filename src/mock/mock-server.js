var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());


server.get('/forms', function(req, res) {

    if(req.query["symbol"]) {
        res.send(db.get('forms').filter(function(item) {
            return item.symbol === req.query['symbol'];
        }));
    } else {
        res.jsonp(db.get('forms'))
    }
})

server.use(jsonServer.bodyParser)

server.post('/forms', function(req, res) {
    var body = req.body;
    var flag = true;
    db.get('forms').value().forEach(function(item) {
        if(item.symbol === body.symbol) {
            db.get('forms')
                .find({ symbol: item.symbol })
                .assign({ name: body.name, description: body.description, fields: body.fields})
                .write();
            console.log('Update')
            flag = false;
        }

    })

    if(flag) {
        db.get('forms').push(body).write();

        console.log('add')

        res.jsonp({ success: true })
    } else {
        res.jsonp({ update: true })
    }


});

// Returns an Express router
var router = jsonServer.router('db.json');

var db = router.db;

// console.log(router.db.getState());
server.use(router);

server.listen(3003);
console.log("Mock node backend listening on port 3003 - http://localhost:3003");
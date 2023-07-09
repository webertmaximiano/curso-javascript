/* sem consign
let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=> {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'Rede We2m',
            email: 'sac@redewe2m.com.br',
            id: 1
        }]
    });

});

routes.get('/admin', (req, res)=> {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: []
    });

});

module.exports = routes;
*/

//com consign e NeDB
let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload:true
});

module.exports = (app)=> {

    app.get('/users', (req, res)=> {

        db.find({}).sort({name:1}).exec((err, users)=>{
            if (err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error:err
                });
            }else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                });
            }
        });
        /*
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'Rede We2m',
                email: 'sac@redewe2m.com.br',
                id: 1
            }]
        });
    */
    });
    
    app.post('/users', (req, res)=> {

        //res.json(req.body);
        db.insert(req.body, (err, user)=> {
            if (err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                });
            } else {
                res.status(200).json(user);
            }
        });
    
    });  
};
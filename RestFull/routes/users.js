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

    let route = app.route('/users');

    route.get((req, res)=> {

        db.find({}).sort({name:1}).exec((err, users)=>{
            if (err) {
                app.utils.error.send(err, req, res);
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
    
    route.post((req, res)=> {

        //res.json(req.body);
        db.insert(req.body, (err, user)=> {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    
    });
    
    let routeId = app.route('/users/:id');
    //buscando 1 usuario
    routeId.get((req, res)=> {
        db.findOne({_id:req.params.id}).exec((err,user)=>{
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        }); 
    });
    // editando
    routeId.put((req, res)=> {
        db.update({_id:req.params.id}, req.body, err => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign(req.params, req.body));
            }
        }); 
    });

     // excluindo
     routeId.delete((req, res)=> {
        db.remove({_id:req.params.id}, {}, err => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }
        }); 
    });

};
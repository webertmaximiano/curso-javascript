//const http = require('http'); // loading module
const express = require('express'); // ja carrega o http internamente
const consign = require('consign');
const bodyParser = require('body-parser');

/*sem consign
let routesIndex = require('./routes/index'); //carrega o arquivo da rota index
let routesUsers = require('./routes/users');
// passa pro expresse a rota a ser usada
app.use(routesIndex); 
app.use('/users', routesUsers); 
*/

let app = express(); //load app express

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

consign().include('routes').include('utils').into(app); //carregar arquivos de rotas usando consign

app.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando!');
});

/* sem express nativo
// create serve
let serve = http.createServer((req, res)=>{

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    switch (req.url) {

        case '/':

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello</h1>');

        break;

        case '/users':

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            users: [{
                name: 'Rede We2m',
                email: 'sac@redewe2m.com.br',
                id: 1
            }]
        }));

        break;
    }

});

serve.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando!');
});
*/
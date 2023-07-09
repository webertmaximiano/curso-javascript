const http = require('http'); // loading module

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
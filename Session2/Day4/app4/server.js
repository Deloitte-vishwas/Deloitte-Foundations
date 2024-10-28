const http = require('http');
const PORT = 3000;

const server = http.createServer(
    (req, res)=>{
        if(req.url == '/'){
            res.write('Hello World');
            res.end();
        }

        if(req.url == '/api/users'){
            res.write(JSON.stringify([{id:1, username:'vishwas'},{id:2, username:'singh'}]));
            res.end()
        }
    }
);


server.listen(PORT);
console.log(`Listeneing to port ${PORT}`);
// server.on('connection', (socket)=>{
//     console.log('New Connection....');
    
// });



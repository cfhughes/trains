const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }else if(request.url === '/send_me_my_css_please'){
        fs.readFile('css/style.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }else if(request.url.startsWith('/img')){
        console.log("Request url: "+request.url);
        fs.readFile(request.url.substring(1), (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});
server.listen(6789);
console.log("listening on port 6789");
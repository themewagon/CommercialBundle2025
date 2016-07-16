var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var baseDirectory = './bin/';   // or whatever base directory you want
var pug = require("pug");
var fileExists = require('file-exists');

var port = 3001

http.createServer(function (request, response) {
   try {
     var requestUrl = url.parse(request.url)

     // need to use path.normalize so people can't access directories underneath baseDirectory
     var reqFile = path.normalize(requestUrl.pathname);
     var fsPath = baseDirectory+reqFile;


     //compiling pug
     if (reqFile.indexOf('.html') > -1) {
        
        var filename = reqFile.substring(1, (reqFile.length - 5));

        //console.log(__filename);

        console.log("COMPILING: "+filename);
        if (!fileExists('src/pages/'+filename+'.pug')) {
            filename = 'index';
        } 

        var fn = pug.compileFile('src/pages/'+filename+'.pug', {
            filename: __dirname+'/src/pages/'+filename+'.pug'
        });
        var html = fn();
        fs.writeFileSync('./bin/'+filename+'.html', html);
     } 
     //end compiling pug

     response.writeHead(200)
     var fileStream = fs.createReadStream(fsPath)
     fileStream.pipe(response)
     fileStream.on('error',function(e) {
         response.writeHead(404)     // assume the file doesn't exist
         response.end()
     })
   } catch(e) {
     response.writeHead(500)
     response.end()     // end the response so browsers don't hang
     console.log(e.stack)
   }
}).listen(port)

console.log("ZiON Core is rinning hot@ "+port)
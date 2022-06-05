var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var filename = path;
console.log('filename');

http.createServer = (function(req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            let originalFileNameArr = files.filetoupload.originalFilename.split('.')
            let originalFileExt = originalFileNameArr[originalFileNameArr.length - 1];

            let newFileName = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}-${Math.random()}`;
            console.log(newFileName)
            var newpath = 'C:\\Users\\user\\Desktop\\Playground\\myfirstNodejs\\upload/' + newFileName + "." + originalFileExt;

            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
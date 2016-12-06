
let express = require('express');
let app = express();
let formidable = require('formidable');
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();
let fs = require('fs');

app.use('*',function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
app.post('/upload',multipartMiddleware,function(req, res){
  fs.rename(req.files.myfile.path, './imgs/' + req.files.myfile.originalFilename ,function(err){
    if (err) {
      res.json({'code':500});
    }
    res.json({'code':200});
  })
})



app.listen(3000);

console.log('listening on http://localhost:'+3000+'/');

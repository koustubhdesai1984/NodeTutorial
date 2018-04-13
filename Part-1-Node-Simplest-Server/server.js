/*
1. create a static node server
2. enable sending html file
*/

const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer(function(req,res){
	var url = req.url;
	var filetype = url.match(/\.(html|js)/gi);
	filetype = filetype.length?filetype[0]:'none';
	switch(filetype){
		case '.html':
			ReadFile(res,url,'text/html');
		break;
		case '.js':
			ReadFile(res,url,'text/javascript');
		break;
	}
	
}).listen('8000');

function ReadFile(res,url,content_type){
	console.log('reading...',url);
	fs.readFile('dist'+url,function(err,data){
		res.writeHead(200,{'Content-Type':content_type});
		res.write(data);
		res.end();
	});
}
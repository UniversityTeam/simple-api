const http = require('http');
const fs = require('fs')
const Database = require('./db.js');

const inisql = fs.readFileSync('init.sql', 'utf8');

const workingDB = new Database({
    user: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 3030,
    database: 'WebNodeJS'
}, inisql);

http.createServer(async (request, response) => {
	console.log("Server started...");
}).listen(3000);
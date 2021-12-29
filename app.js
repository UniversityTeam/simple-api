const http = require('http');
const fs = require('fs')
const Database = require('./db.js');

const initSql = fs.readFileSync('init.sql', 'utf8');

const workingDB = new Database({
    user: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 3030,
    database: 'WebNodeJS'
}, initSql);


http.createServer(async (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    const query = workingDB.sql();

    let data = '';
    await request.on('data', chunk => {
        data += chunk;
    })
    data = JSON.parse(data);

    if (request.url === "/filmsList"){
        query.select('*').inTable('Films')
        await query.exec((e, res) => {
            if (e) {
                console.log(e.message);
            } else {
                console.log(`Result: ${JSON.stringify(res)}`);
            }

        })
    } else if (request.url === "/addUser"){
        query.insert({ email: data.email, password: data.password}).inTable('User');
        await query.exec((e, res) => {
            if (e) {
                console.log(e.message);
            } else {
                console.log(`Result: ${JSON.stringify(res)}`);
            }

        })

    }
    response.end();
}).listen(3000);

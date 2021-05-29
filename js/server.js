var http = require('http');

var express = require('express');

var mysql = require('mysql');



var client = mysql.createConnection({

        user : 'root',

        password : '1234',

        database : 'abc'

        });



//웹서버를 생성합니다.

var app = express();

app.use(express.static('public'));

//app.use(express.bodyParser());

app.use(express.json());

app.use(express.urlencoded());







/*client.query('SELECT * FROM products', function (error, result, fields) {

        if (error) {

        console.log('쿼리 문장에 오류가 있습니다.');

        } else {

        console.log(result); //매개변수 result로 결과 출력

        }



});*/



app.get('/products', function (request, response) {

        //데이터베이스 요청을 수행합니다.

        client.query('SELECT * FROM products', function (error, data) {

        //response.type('text/xml');

        //response.header("Access-Control-Allow-Origin" , "*");

        response.set('Access-Control-Allow-Origin', '*');

        response.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');

        response.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

        response.send(data);

        });



});



app.get('/:id', function (request, response) {

        //변수 선언

        var id = Number(request.param('id'));



        //데이터베이스 요청을 수행합니다.

        client.query('SELECT * FROM products WHERE id=?', [id], function (error, data) {

        response.set('Access-Control-Allow-Origin', '*');

        response.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');

        response.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

        response.send(data);

        });



});



app.post('/products', function (request, response) {

        //변수를 선언합니다.

        var name = request.param('name');

        var seat = request.param('seat');

        var carnumber = request.param('carnumber');

        var phone = request.param('phone');




        //데이터베이스 요청을 수행합니다.

        client.query('INSERT INTO products(name, modelnumber, series) VALUES(?,?,?)', [name, seat, carnumber, phone], function (error, data) {

        response.set('Access-Control-Allow-Origin', '*');

        response.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');

        response.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

        //     response.send(data);

        response.send({

        message: '데이터를 추가했습니다.',

        data: item

        });

        

        });



});



app.put('/products/:id', function (request, response) {

        //변수를 선언합니다.

        var id = Number(request.param('id'));

        var name = request.param('name');

        var seat = request.param('seat');

        var carnumber = request.param('carnumber');

        var phone = request.param('phone');

        var query = 'UPDATA products SET';



        //쿼리를 생성합니다.

        if (name)

        query += 'name="' + name + '" ';

        if (seat)

        query += 'seat="' + seat + '" ';

        if (carnumber)

        query += 'carnumber="' + carnumber + '" ';

        if (phone)

        query += 'phone="' + phone + '" ';



        //데이터베이스 요청을 수행합니다.

        client.query(query, function (error, data) {

        response.set('Access-Control-Allow-Origin', '*');

        response.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');

        response.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

        response.send(data);

        });



});



app.del('http://127.0.0.1:52273/products/:id', function (request, response) {

        //변수를 선언합니다.

        var id = Number(request.param('id'));



        //데이터베이스 요청을 수행합니다.

        client.query(query, function (error, data) {

        response.set('Access-Control-Allow-Origin', '*');

        response.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');

        response.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

        response.send(data);

        });

});



//웹서버를 실행

http.createServer(app).listen(52273, function () {

        console.log('Server Running at http://127.0.0.1:52273');

});


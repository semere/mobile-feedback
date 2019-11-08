const express = require('express');
const app = express();
const mysql = require('mysql');

app.get('post/id:id', (req, res) => {
    console.log("Fetching user with id:" + res.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'book'
    })

    connection.query("SELECT * FROM post", (err, rows, fields) => {
        console.log("I think I fetched a data")
        res.send("Hello Semere")
    })
})

app.get('/public', (req, res) => {
    var user1 = {firstName: "Semere", lastnName: "Abraham"}
    var user2 = {firstName: "Siomn", lastnName: "Tekle"}
    res.json([user1, user2]);
});
app.get('/', (req, res) => {
    console.log('Responding to Route');
    res.send("Hello Semere");
});

app.listen(3000, () => {
    console.log('Hi Semere!!!');
});


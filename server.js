var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "integrationcontinue_odl",
    password: "JLora65SWeNJTqi",
    database: "integrationcontinue_odl"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM utilisateurs", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
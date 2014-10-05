var fs = require("fs");
var file = "rideme.db";
var exists = fs.existsSync(file);

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);



/*exports.createTables = function() {
    console.log("Created table person");
    db.run("CREATE TABLE person (
				fname varchar(25),
				lname varchar(25),
				street varchar(40),
				city varchar(40),
				zipcode integer,
				driver boolean,
				hash varchar(32),
				id integer PRIMARY KEY)");
    console.log("Created table schedule");
    db.run("CREATE TABLE schedule(
			datetime DATETIME,
			eventName varchar(40),
			person_id integer,
			FOREIGN KEY(person_id) REFERENCES person(id))");
}*/


exports.insertUser = function() {

    var stmt = db.prepare("INSERT INTO person VALUES (?,?,?,?,?,?,?,?)");

    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }

    stmt.finalize(readAllRows);
}

exports.query = function() {
    console.log("readAllRows lorem");
    db.all("SELECT rowid AS id, info FROM lorem", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": " + row.info);
        });
    });
}


exports.closeDb = function() {
    console.log("closeDb");
    db.close();
}












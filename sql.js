var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


exports.test = function(){
	db.serialize(function() {
	  if(!exists) {
	  	console.log("new file");
	    db.run("CREATE TABLE Stuff (thing TEXT, name varchar(20))");
	  }
	  
	        var stmt = db.prepare("INSERT INTO Stuff VALUES (?, ?)");
	  
	//Insert random data
	  var rnd;
	  var names = ["sam","paul","steve","pat"];
	  for (var i = 0; i < names.length; i++) {
	    rnd = Math.floor(Math.random() * 10000000);
	    stmt.run(names[i] + rnd,names[i]);
	  }
	  
	stmt.finalize();
	  db.each("SELECT rowid AS id, thing, name FROM Stuff", function(err, row) {
	    console.log(row.id + ": " + row.thing + row.name);
	  });
	});

	db.close();
}

exports.test2 = function(){
	db.serialize(function() {
		db.each("SELECT rowid AS id, thing, name FROM Stuff", function(err, row) {
	    console.log(row.id + ": " + row.thing + row.name);
	  	});	
		db.close();
	});
}


exports.readAllRows = function () {
    console.log("readAllRows samk");
    db.all("SELECT name, id FROM samk", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.name + ": " + row.id);
        });
        closedb();
    });
}

DROP TABLE person;
DROP TABLE schedule;


CREATE TABLE person (
	fname varchar(25),
	lname varchar(25),
	street varchar(40),
	city varchar(40),
	zipcode integer,
	driver boolean,
	hash varchar(32),
	id integer PRIMARY KEY
);


INSERT INTO person VALUES("Sam","kreter","7600 Twin lake drive","Columbia","65104",1,"270703a6aa55759fac333eea13d8f301",NULL);
INSERT INTO person VALUES("Paul","Chess","764 lakeword drive","Columbia","65104",0,"270703a6aa55759fac333eea13d8f301",NULL);
INSERT INTO person VALUES("alfonzo","pressy","7768 dickwood lake","Columbia","65104",1,"270703a6aa55759fac333eea13d8f301",NULL);

CREATE TABLE schedule(
	datetime DATETIME,
	eventName varchar(40),
	person_id integer,
	FOREIGN KEY(person_id) REFERENCES person(id)
);

INSERT INTO schedule VALUES('2007-01-01 10:00:00',"funtime",1);


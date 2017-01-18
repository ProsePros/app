use aehxyfb8hl4u8mvv;


INSERT INTO photos (url, red, green, blue, dominant) VALUES (?, ?, ?, ?, ?);



INSERT INTO allusers (username, password, email) VALUES ('hanbom', 'mickey', 'tmesis3@gmail.com');


CREATE TABLE hanbom 
(
	id int, 
  url varchar (255), 
  upvoted boolean default 1, 
  uploaded boolean
);



CREATE TABLE sentences
(
	id int NOT NULL AUTO_INCREMENT,
	url varchar(255) NOT NULL,
	red int NOT NULL,
	green int NOT NULL,
	blue int NOT NULL,
	dominant varchar(255),
	upvotes int DEFAULT 0,
	downvotes int DEFAULT 0,
	category varchar(255),
	tagword varchar(255),
	PRIMARY KEY (id)
);


CREATE TABLE allusers
(
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	upvotes int DEFAULT 0,
	downvotes int DEFAULT 0,
	totalUploads int DEFAULT 0,
	PRIMARY KEY (username)
);





select * from hanbom;

SELECT COUNT(*) AS images
FROM photos;
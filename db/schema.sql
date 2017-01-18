use aehxyfb8hl4u8mvv;


INSERT INTO photos (url, red, green, blue, dominant) VALUES (?, ?, ?, ?, ?);



INSERT INTO allusers (username, password, email) VALUES ('hanbom', 'mickey', 'tmesis3@gmail.com');


CREATE TABLE mickey 
(
	id int, 
    url varchar (255), 
    upvoted boolean default 1, 
    uploaded boolean
);



use aehxyfb8hl4u8mvv;

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
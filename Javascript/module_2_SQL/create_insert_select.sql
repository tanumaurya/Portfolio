----------create table query-------------
CREATE TABLE emp(
id INTEGER AUTO_INCREMENT UNIQUE,
name VARCHAR(255) NOT NULL,
phno BIGINT UNIQUE,
salary FLOAT NOT NULL CHECK(salary>2500),
dep VARCHAR(255),
age INTEGER DEFAULT 25,
gender ENUM("M", "F", "TG")
);

-----insert-----------
INSERT INTO emp(name, salary, gender)
VALUES("TANU", 5000, "F");

INSERT INTO emp(id, name, salary, gender) 
VALUES(3, "ANU", 3000, "F");

------you need to put all the entries
INSERT INTO emp VALUES(3, "Anuj",1243456, 4000, "tech", 27, "M");

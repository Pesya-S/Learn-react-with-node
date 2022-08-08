ALTER USER 'root'@'localhost' IDENTIFIED BY '1234'; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

create database shopDB;
use shopDB;

# users
CREATE TABLE user (
id Int  PRIMARY KEY AUTO_INCREMENT   NOT NULL,
firstName VARCHAR(45) DEFAULT '',
lastName varchar(45) default ''
);
create table words(
id Int primary key auto_increment not null,
word varchar(30) default ''
);
 
# users
CREATE TABLE product (
id Int  PRIMARY KEY AUTO_INCREMENT   NOT NULL,
name VARCHAR(45) DEFAULT '',
price double default 0
);

create table productToUser(
id Int  PRIMARY KEY AUTO_INCREMENT   NOT NULL,
userId int,CONSTRAINT fk_user1 FOREIGN KEY (userId) REFERENCES user(id),
productId int,CONSTRAINT fk_product1 FOREIGN KEY (productId) REFERENCES product(id),
status int default 0
);

INSERT INTO `shopdb`.`user` (`firstName`, `lastName`) VALUES ('Tamar', 'Mizrachi');
INSERT INTO `shopdb`.`user` (`firstName`, `lastName`) VALUES ('Ayala', 'David');

select * from user;
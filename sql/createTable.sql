create database recipeDB;
use recipeDB;

# users
CREATE TABLE user (
id Int  PRIMARY KEY AUTO_INCREMENT   NOT NULL,
email varchar(100) default '',
password varchar(45) default '',
name VARCHAR(45) DEFAULT ''
);

CREATE TABLE product (
id Int  PRIMARY KEY AUTO_INCREMENT   NOT NULL,
userId int,CONSTRAINT fk_userProduct FOREIGN KEY (userId) REFERENCES user(id),
name VARCHAR(45) DEFAULT ''
);

CREATE TABLE recipe (
id Int  PRIMARY KEY AUTO_INCREMENT   NOT NULL,
userId int,CONSTRAINT fk_userRecipe FOREIGN KEY (userId) REFERENCES user(id),
name VARCHAR(45) DEFAULT '',
src varchar(45),
how varchar(1000)
);

 


create table productToRecipe(
id Int  PRIMARY KEY AUTO_INCREMENT   NOT NULL,
recipeId int,CONSTRAINT fk_recipe1 FOREIGN KEY (recipeId) REFERENCES recipe(id),
productId int,CONSTRAINT fk_product1 FOREIGN KEY (productId) REFERENCES product(id),
sum float default 0,
size varchar(40) default ''
);
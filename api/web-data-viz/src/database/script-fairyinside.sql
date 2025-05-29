drop database FairyInside;
create database FairyInside;
use FairyInside;

create table usuario(
idusuario int not null auto_increment primary key,
nomeusuario varchar(250),
data_nasc date,
email varchar(200),
senha char(10),
genero varchar(45));

create table forum(
idfeed int not null auto_increment primary key,
titulo varchar(100),
data_feed date ,
descricao varchar(255),
fkusuario int,
foreign key(fkusuario)references usuario (idusuario));

create table quiz(
idquiz int not null auto_increment,
fkusuario int not null,
resultado int not null,
data_quiz date not null,
primary key(idquiz, fkusuario),
foreign key(fkusuario) references usuario(idusuario)
);

select*from usuario;
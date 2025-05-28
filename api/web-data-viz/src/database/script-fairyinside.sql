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
idquiz int not null auto_increment primary key
);

CREATE TABLE resposta_usuario (
    fkusuario INT NOT NULL,
    fkquiz INT NOT NULL,
    resposta_escolhida VARCHAR(255),
    PRIMARY KEY (fkusuario, fkquiz),
    FOREIGN KEY (fkusuario) REFERENCES usuario(idusuario),
    FOREIGN KEY (fkquiz) REFERENCES quiz(idquiz)
);

select*from usuario;
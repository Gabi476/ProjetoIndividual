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

create table filme(
idfilme int not null auto_increment primary key,
nomefilme varchar(100) not null);

insert into filme(nomefilme)values
('Tinker Bell'),
('O tesouro perdido'),
('O resgate da fada'),
('O segredo das fadas'),
('Fadas e piratas'),
('O monstro da Terra do Nunca');

create table avaliacao(
    idavaliacao int not null auto_increment primary key,
    fkusuario int not null,
    fkfilme int not null,
    nota decimal(2,1),
    data_avaliacao datetime DEFAULT CURRENT_TIMESTAMP,
    foreign key(fkusuario) references usuario(idusuario),
    foreign key(fkfilme) references filme(idfilme)
);

create table quiz(
idquiz int not null auto_increment,
fkusuario int not null,
resultado int,
data_quiz  DATETIME DEFAULT CURRENT_TIMESTAMP,
personalidade varchar(50),
primary key(idquiz, fkusuario),
foreign key(fkusuario) references usuario(idusuario)
);
show tables;
select*from usuario;
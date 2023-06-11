create database tmblog;

use tmblog;

create table usuario(
iduser int primary key auto_increment,
nome varchar(45), 
email varchar(50),
senha char(8) 
);


select * from usuario;

create table preQuiz(
fkusuario int,
tempo int,
constraint fkusuario foreign key (fkusuario) references usuario(iduser)
);

create table resultadoFinal(
acertos int,
erros int,
fkuser int,
constraint fkuser foreign key (fkuser)
references usuario (iduser)
);

select * from resultadoFinal;

SELECT * FROM preQuiz;


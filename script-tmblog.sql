create database tmblog;

use tmblog;

create table usuario(
iduser int primary key auto_increment,
nome varchar(45), 
email varchar(50),
senha char(8) 
);

create table quiz_pergunta(
idpergnt int primary key auto_increment,
pergunta int
);

create table quiz_resposta(
idresp int primary key auto_increment,
resposta int,
constraint chkresposta check(resposta in ('0', '1' ))
);

create table resultado_quiz(
fkpergunta int,
constraint fkpergunta foreign key (fkpergunta)
references quiz_pergunta (idpergnt),
fkresposta int,
constraint fkresposta foreign key (fkresposta)
references quiz_resposta (idresp),
constraint pkcomposta primary key (fkpergunta,fkresposta),
fkuser int,
constraint fkuser foreign key (fkuser)
references usuario (iduser),
porcento_xaveco int
);





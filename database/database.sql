drop schema if exists proyecto;
create database proyecto;
use proyecto;

create table dato (
	id int primary key auto_increment,
    dato varchar(255)
);

select * from dato;	
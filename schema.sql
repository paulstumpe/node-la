CREATE DATABASE IF NOT EXISTS nodela;

USE nodela;

CREATE TABLE IF NOT EXISTS users(
id INTEGER NOT NULL AUT
username V
password
);

CREATE TABLE IF NOT EXISTS posts(
  id 
  username 
  body 
  votes 
  time 
  hood_id fk hoods id
  post_id  fk users id
  type_id
)

CREATE TABLE IF NOT EXISTS post_type(
  id 
  help_gen
)

CREATE TABLE IF NOT EXISTS comments(
  id 
  id_user FK
  id_post FK
  body
  time
)

CREATE TABLE IF NOT EXISTS hoods(
  id fk posts id_types
  up_dwn
  hood_name
)
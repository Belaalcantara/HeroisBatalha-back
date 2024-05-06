/*criacao das tabelas jogadores e combate*/

CREATE TABLE jogadores (
id SERIAL PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 distrito VARCHAR(100) NOT NULL,
 arma VARCHAR(100) NOT NULL,
 nivel INT NOT NULL,
 vida INT NOT NULL
 );

  CREATE TABLE combate(
 id SERIAL PRIMARY KEY,
 jogadores1_id INT NOT NULL,
 jogadores2_id INT NOT NULL,
 ganhador_id INT NOT NULL,
 FOREING KEY (jogadores1_id) REFERENCES jogadores(id),
 FOREING KEY (jogadores2_id) REFERENCES jogadores(id),
 );


/*criacao dos inserts dos jogadores que iram batalhar*/

INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Finnick Odair', 'distrito 4', 'tridente', 90, 77);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Coriolanus Snow', 'Capital', 'veneno',  85, 90);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Katniss Everdeen', 'distrito 12', 'arco e flecha', 100, 1000);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Peeta Mellark', 'distrito 12', 'manipulação', 100, 99);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Gale Hawthorne', 'distrito 2', 'arma de fogo',70, 80);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Lucy Gray Baird', 'distrito 12', 'cobras',90, 70);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Boggs', 'distrito 13', 'arma de fogo',70, 0);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Effie Trinket', 'capital', 'conhecimento',70, 73);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Haymitch Abernathy', 'distrito 12', 'faca',60, 80);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Presidente Alma Coin', 'distrito 13', 'armas nucleares',80, 0);
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Gloss', 'distrito 1', 'punhal', 80,0 );
INSERT INTO jogadores(nome, distrito, arma, nivel, vida) VALUES ('Thresh', 'distrito 11', 'foice', 60,0 );
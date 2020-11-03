CREATE TABLE impuestos(
    id INT NOT NULL AUTO_INCREMENT,
    iva FLOAT,
    empresa VARCHAR(50),
    porcentaje FLOAT,
    PRIMARY KEY(id)
);
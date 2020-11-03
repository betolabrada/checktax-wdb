CREATE TABLE seguroAuto(
    id INT NOT NULL AUTO_INCREMENT,
    compania VARCHAR(50),
    primaTotal FLOAT,
    formaPago VARCHAR(50),
    noPoliza INT,
    financiado BOOLEAN,
    fechaInicio DATE,
    fechaFinal DATE,
    tipoUnidad VARCHAR(50),
    fechaPago DATE,
    relacionPago VARCHAR(50),
    siniestros VARCHAR(50),
    cantPolizas VARCHAR(50),
    sigVcmto VARCHAR(50),
    asegueado VARCHAR(50),
    PRIMARY KEY(id)
);
CREATE TABLE centroCostoConcepto(
    id INT NOT NULL AUTO_INCREMENT,
    idConcepto INT,
    idCentroCosto INT,
    PRIMARY KEY(id),
    FOREIGN KEY(idConcepto) REFERENCES concepto(idConcepto),
    FOREIGN KEY(idCentroCosto) REFERENCES centroCosto(idCentroCosto)
);
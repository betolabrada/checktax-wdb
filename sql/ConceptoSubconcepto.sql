CREATE TABLE conceptoSubconcepto(
    id INT NOT NULL AUTO_INCREMENT,
    idConcepto INT,
    idSubconcepto INT,
    PRIMARY KEY(id),
    FOREIGN KEY(idConcepto) REFERENCES concepto(idConcepto),
    FOREIGN KEY(idSubconcepto) REFERENCES subconcepto(idSubconcepto)
);
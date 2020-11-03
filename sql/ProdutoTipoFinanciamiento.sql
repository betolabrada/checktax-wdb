CREATE TABLE productoTipoFinanciamiento(
    id INT NOT NULL AUTO_INCREMENT,
    idProducto INT,
    idTipoFin INT,
    PRIMARY KEY(id),
    FOREIGN KEY(idProducto) REFERENCES producto(idProducto),
    FOREIGN KEY(idTipoFin) REFERENCES tipoFinanciamiento(idTipoFin)
);
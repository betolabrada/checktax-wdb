CREATE TABLE impuestos(
    id INT NOT NULL AUTO_INCREMENT,
    iva FLOAT,
    empresa VARCHAR(50),
    porcentaje FLOAT,
    PRIMARY KEY(id)
);

CREATE TABLE concepto(
    idConcepto INT NOT NULL AUTO_INCREMENT,
    concepto VARCHAR(50),
    PRIMARY KEY(idConcepto)
);

CREATE TABLE conceptoSubconcepto(
    id INT NOT NULL AUTO_INCREMENT,
    idConcepto INT,
    idSubconcepto INT,
    PRIMARY KEY(id),
    FOREIGN KEY(idConcepto) REFERENCES concepto(idConcepto),
    FOREIGN KEY(idSubconcepto) REFERENCES subconcepto(idSubconcepto)
);

CREATE TABLE centroCostoConcepto(
    id INT NOT NULL AUTO_INCREMENT,
    idConcepto INT,
    idCentroCosto INT,
    PRIMARY KEY(id),
    FOREIGN KEY(idConcepto) REFERENCES concepto(idConcepto),
    FOREIGN KEY(idCentroCosto) REFERENCES centroCosto(idCentroCosto)
);

CREATE TABLE centroCosto(
    idCentroCosto INT NOT NULL AUTO_INCREMENT,
    centroCosto VARCHAR(50),
    PRIMARY KEY(idCentroCosto)
);

CREATE TABLE tipoFinanciamiento(
    idTipoFin INT NOT NULL AUTO_INCREMENT,
    tipoFin VARCHAR(50),
    tasa FLOAT,
    anticipo FLOAT,
    apertura FLOAT,
    deposito FLOAT,
    vRescate FLOAT,
    tfValorRescate BOOLEAN,
    descuento FLOAT,
    admon FLOAT,
    tfAdmon BOOLEAN,
    gps FLOAT,
    tfGps BOOLEAN,
    seguroAuto FLOAT,
    tfSeguroAuto BOOLEAN,
    seguroDeuda FLOAT,
    tfSeguroDeuda BOOLEAN,
    liquidacion FLOAT,
    ppTipo VARCHAR(50),
    PRIMARY KEY(idTipoFin)
);

CREATE TABLE subconcepto(
    idSubConcepto INT NOT NULL AUTO_INCREMENT,
    subconcepto VARCHAR(50),
    PRIMARY KEY(idSubConcepto)
);

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
    asegurado VARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE productoTipoFinanciamiento(
    id INT NOT NULL AUTO_INCREMENT,
    idProducto INT,
    idTipoFin INT,
    PRIMARY KEY(id),
    FOREIGN KEY(idProducto) REFERENCES producto(idProducto),
    FOREIGN KEY(idTipoFin) REFERENCES tipoFinanciamiento(idTipoFin)
);

CREATE TABLE producto(
    idProducto INT NOT NULL AUTO_INCREMENT,
    producto VARCHAR(50),
    PRIMARY KEY(idProducto)
);

-- Implementar en OCI

CREATE TABLE financiamiento(
    idFinanciamiento INT NOT NULL AUTO_INCREMENT,
    idProducto INT,
    idConcepto INT,
    noPagos INT,
    descuento FLOAT,
    totalPrimerPago FLOAT,
    descripcion VARCHAR(255),
    PRIMARY KEY(idFinanciamiento),
    FOREIGN KEY(idProducto) REFERENCES producto(idProducto),
    FOREIGN KEY(idConcepto) REFERENCES concepto(idConcepto)
);

CREATE TABLE datosPersonales(
    idPer INT NOT NULL AUTO_INCREMENT,
    rfc VARCHAR(20),
    curp VARCHAR(20),
    edoCivil VARCHAR(50),
    PRIMARY KEY(idPer)
);

CREATE TABLE comunicacion(
    idCom INT NOT NULL AUTO_INCREMENT,
    telOficina VARCHAR(50),
    telOtro VARCHAR(50),
    telCelular VARCHAR(50),
    mail VARCHAR(50),
    PRIMARY KEY(idCom)
);

CREATE TABLE domicilio(
    idDom INT NOT NULL AUTO_INCREMENT,
    calle VARCHAR(100),
    colonia VARCHAR(100),
    noExt VARCHAR(10),
    noInt VARCHAR(10),
    ciudad VARCHAR(100),
    cp VARCHAR(10),
    PRIMARY KEY(idDom)
);

CREATE TABLE contacto(
    idContacto INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100),
    tipo VARCHAR(30),
    razonSocial VARCHAR(150),
    idPer INT,
    idCliente INT,
    idCom INT,
    idDom INT,
    recomendado VARCHAR(50),
    asesor INT,
    tipoAsesor VARCHAR(50),
    puesto VARCHAR(50),
    activo BOOLEAN,
    web VARCHAR(50),
    PRIMARY KEY(idContacto),
    FOREIGN KEY(idPer) REFERENCES datosPersonales(idPer),
    FOREIGN KEY(idCom) REFERENCES comunicacion(idCom),
    FOREIGN KEY(idDom) REFERENCES domicilio(idDom),
    FOREIGN KEY(asesor) REFERENCES contacto(idContacto)
);

CREATE TABLE factura(
    idFactura INT NOT NULL AUTO_INCREMENT,
    idCliente INT,
    ffzc VARCHAR(50),
    ffzi VARCHAR(50),
    ffzg VARCHAR(50),
    ffza VARCHAR(50),
    PRIMARY KEY(idFactura)
);

CREATE TABLE loteAutos(
    id INT NOT NULL AUTO_INCREMENT,
    razonSocial VARCHAR(50),
    sinIVA FLOAT,
    conIVA FLOAT,
    lineaVenta VARCHAR(50),
    comision VARCHAR(50),
    sucursal VARCHAR(50),
    domicilio VARCHAR(50),
    asesor INT,
    PRIMARY KEY(id),
    FOREIGN KEY(asesor) REFERENCES contacto(idContacto)
);

CREATE TABLE aplicarOp(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id)
);

CREATE TABLE operacion(
    numOperacion INT NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(50),
    fecha DATE,
    folio VARCHAR(50),
    referenciaPagos INT,
    cliente INT,
    persona VARCHAR(50),
    descripcion VARCHAR(255),
    asesor INT,
    idFinanciamiento INT,
    aplicarOp INT,
    impuestos INT,
    loteAutos INT,
    seguroAuto INT,
    comentarios VARCHAR(510),
    tfIva BOOLEAN,
    tfSeguro BOOLEAN,
    fPago VARCHAR(20),
    poliza VARCHAR(20),
    tfSeguroFin BOOLEAN,
    tipoUnidad VARCHAR(20),
    fechaPago DATE,
    relPago VARCHAR(50),
    marca VARCHAR(50),
    factura VARCHAR(50),
    version VARCHAR(50),
    importe FLOAT,
    tipoFin VARCHAR(50),
    idCentroCosto INT,
    idFactura INT,
    estatus VARCHAR(50),
    cancelado BOOLEAN,
    aplicPagos BOOLEAN,
    fFondeo DATE,
    confirmado BOOLEAN,
    PRIMARY KEY(numOperacion),
    FOREIGN KEY(cliente) REFERENCES contacto(idContacto),
    FOREIGN KEY(asesor) REFERENCES contacto(idContacto),
    FOREIGN KEY(idFinanciamiento) REFERENCES financiamiento(idFinanciamiento),
    FOREIGN KEY(aplicarOp) REFERENCES aplicarOp(id),
    FOREIGN KEY(impuestos) REFERENCES impuestos(id),
    FOREIGN KEY(loteAutos) REFERENCES loteAutos(id),
    FOREIGN KEY(seguroAuto) REFERENCES seguroAuto(id),
    FOREIGN KEY(idCentroCosto) REFERENCES centroCosto(idCentroCosto),
    FOREIGN KEY(idFactura) REFERENCES factura(idFactura)
);

CREATE TABLE IF NOT EXISTS users (
     id varchar(128) PRIMARY KEY,
     username varchar(255) NOT NULL,
     password varchar(255) NOT NULL,
     registered datetime,
     last_login datetime
);

create table if not exists permissions_section (
     id varchar(128) primary key,
     section varchar(128)
);

create table if not exists permissions (
     id varchar(128) primary key,
     permission varchar(64) not null,
     idPermissionSection varchar(128),
     foreign key (idPermissionSection) references permissions_section(id)
);

create table if not exists user_permissions(
     id varchar(128) primary key,
     userID varchar(128),
     permissionID varchar(128),
     foreign key (userID) references users(id),
     foreign key (permissionID) references permissions(id)
);
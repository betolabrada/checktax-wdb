-- CENTRO COSTO
CREATE TABLE centroCosto(
    idCentroCosto NUMBER(10) NOT NULL,
    centroCosto VARCHAR2(50),
    PRIMARY KEY(idCentroCosto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE centroCosto_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER centroCosto_seq_tr
    BEFORE INSERT ON centroCosto FOR EACH ROW
    WHEN (NEW.idCentroCosto IS NULL)
BEGIN
    SELECT centroCosto_seq.NEXTVAL INTO :NEW.idCentroCosto FROM DUAL;
END;
/

--CONCEPTO
CREATE TABLE concepto(
     idConcepto NUMBER(10) NOT NULL,
     concepto VARCHAR2(50),
     PRIMARY KEY(idConcepto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE concepto_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER concepto_seq_tr
    BEFORE INSERT ON concepto FOR EACH ROW
    WHEN (NEW.idConcepto IS NULL)
BEGIN
    SELECT concepto_seq.NEXTVAL INTO :NEW.idConcepto FROM DUAL;
END;
/


--CENTRO COSTO CONEPTO
CREATE TABLE centroCostoConcepto(
    id NUMBER(10) NOT NULL,
    idConcepto NUMBER(10),
    idCentroCosto NUMBER(10),
    PRIMARY KEY(id),
    FOREIGN KEY(idConcepto) REFERENCES concepto(idConcepto),
    FOREIGN KEY(idCentroCosto) REFERENCES centroCosto(idCentroCosto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE centroCostoConcepto_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER centroCostoConcepto_seq_tr
    BEFORE INSERT ON centroCostoConcepto FOR EACH ROW
    WHEN (NEW.id IS NULL)
BEGIN
    SELECT centroCostoConcepto_seq.NEXTVAL INTO :NEW.id FROM DUAL;
END;
/

--SUBCONCEPTO
CREATE TABLE subconcepto(
    idSubConcepto NUMBER(10) NOT NULL,
    subconcepto VARCHAR2(50),
    PRIMARY KEY(idSubConcepto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE subconcepto_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER subconcepto_seq_tr
    BEFORE INSERT ON subconcepto FOR EACH ROW
    WHEN (NEW.idSubConcepto IS NULL)
BEGIN
    SELECT subconcepto_seq.NEXTVAL INTO :NEW.idSubConcepto FROM DUAL;
END;
/

--CONEPTO SUBCONCEPTO
CREATE TABLE conceptoSubconcepto(
    id NUMBER(10) NOT NULL,
    idConcepto NUMBER(10),
    idSubconcepto NUMBER(10),
    PRIMARY KEY(id),
    FOREIGN KEY(idConcepto) REFERENCES concepto(idConcepto),
    FOREIGN KEY(idSubconcepto) REFERENCES subconcepto(idSubconcepto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE conceptoSubconcepto_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER conceptoSubconcepto_seq_tr
    BEFORE INSERT ON conceptoSubconcepto FOR EACH ROW
    WHEN (NEW.id IS NULL)
BEGIN
    SELECT conceptoSubconcepto_seq.NEXTVAL INTO :NEW.id FROM DUAL;
END;
/

--IMPUESTOS
CREATE TABLE impuestos(
                          id NUMBER(10) NOT NULL,
                          iva BINARY_DOUBLE,
                          empresa VARCHAR2(50),
                          porcentaje BINARY_DOUBLE,
                          PRIMARY KEY(id)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE impuestos_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER impuestos_seq_tr
    BEFORE INSERT ON impuestos FOR EACH ROW
    WHEN (NEW.id IS NULL)
BEGIN
    SELECT impuestos_seq.NEXTVAL INTO :NEW.id FROM DUAL;
END;
/

--PRODUCTO
CREATE TABLE producto(
    idProducto NUMBER(10) NOT NULL,
    producto VARCHAR2(50),
    PRIMARY KEY(idProducto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE producto_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER producto_seq_tr
    BEFORE INSERT ON producto FOR EACH ROW
    WHEN (NEW.idProducto IS NULL)
BEGIN
    SELECT producto_seq.NEXTVAL INTO :NEW.idProducto FROM DUAL;
END;
/

--TIPO FINANCIAMIENTO
CREATE TABLE tipoFinanciamiento(
                                   idTipoFin NUMBER(10) NOT NULL,
                                   tipoFin VARCHAR2(50),
                                   tasa BINARY_DOUBLE,
                                   anticipo BINARY_DOUBLE,
                                   apertura BINARY_DOUBLE,
                                   deposito BINARY_DOUBLE,
                                   vRescate BINARY_DOUBLE,
                                   tfValorRescate CHAR(1),
                                   descuento BINARY_DOUBLE,
                                   admon BINARY_DOUBLE,
                                   tfAdmon CHAR(1),
                                   gps BINARY_DOUBLE,
                                   tfGps CHAR(1),
                                   seguroAuto BINARY_DOUBLE,
                                   tfSeguroAuto CHAR(1),
                                   seguroDeuda BINARY_DOUBLE,
                                   tfSeguroDeuda CHAR(1),
                                   liquidacion BINARY_DOUBLE,
                                   ppTipo VARCHAR2(50),
                                   PRIMARY KEY(idTipoFin)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE tipoFinanciamiento_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER tipoFinanciamiento_seq_tr
    BEFORE INSERT ON tipoFinanciamiento FOR EACH ROW
    WHEN (NEW.idTipoFin IS NULL)
BEGIN
    SELECT tipoFinanciamiento_seq.NEXTVAL INTO :NEW.idTipoFin FROM DUAL;
END;
/

--PRODUCTO TIPO FINANCIAMIENTO
CREATE TABLE productoTipoFinanciamiento(
    id NUMBER(10) NOT NULL,
    idProducto NUMBER(10),
    idTipoFin NUMBER(10),
    PRIMARY KEY(id),
    FOREIGN KEY(idProducto) REFERENCES producto(idProducto),
    FOREIGN KEY(idTipoFin) REFERENCES tipoFinanciamiento(idTipoFin)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE productoTipoFinanciamiento_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER productoTipoFinanciamiento_seq_tr
    BEFORE INSERT ON productoTipoFinanciamiento FOR EACH ROW
    WHEN (NEW.id IS NULL)
BEGIN
    SELECT productoTipoFinanciamiento_seq.NEXTVAL INTO :NEW.id FROM DUAL;
END;
/

--SEGURO AUTO
CREATE TABLE seguroAuto(
   id NUMBER(10) NOT NULL,
   compania VARCHAR2(50),
   primaTotal BINARY_DOUBLE,
   formaPago VARCHAR2(50),
   noPoliza NUMBER(10),
   financiado CHAR(1),
   fechaInicio DATE,
   fechaFinal DATE,
   tipoUnidad VARCHAR2(50),
   fechaPago DATE,
   relacionPago VARCHAR2(50),
   siniestros VARCHAR2(50),
   cantPolizas VARCHAR2(50),
   sigVcmto VARCHAR2(50),
   asegurado VARCHAR2(50),
   PRIMARY KEY(id)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE seguroAuto_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER seguroAuto_seq_tr
    BEFORE INSERT ON seguroAuto FOR EACH ROW
    WHEN (NEW.id IS NULL)
BEGIN
    SELECT seguroAuto_seq.NEXTVAL INTO :NEW.id FROM DUAL;
END;
/

CREATE TABLE financiamiento(
                               idFinanciamiento NUMBER(10) NOT NULL,
                               idProducto NUMBER(10),
                               idConcepto NUMBER(10),
                               noPagos NUMBER(10),
                               descuento BINARY_DOUBLE,
                               totalPrimerPago BINARY_DOUBLE,
                               descripcion VARCHAR2(255),
                               PRIMARY KEY(idFinanciamiento),
                               FOREIGN KEY(idProducto) REFERENCES producto(idProducto),
                               FOREIGN KEY(idConcepto) REFERENCES concepto(idConcepto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE financiamiento_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER financiamiento_seq_tr
    BEFORE INSERT ON financiamiento FOR EACH ROW
    WHEN (NEW.idFinanciamiento IS NULL)
BEGIN
    SELECT financiamiento_seq.NEXTVAL INTO :NEW.idFinanciamiento FROM DUAL;
END;
/

CREATE TABLE datosPersonales(
                                idPer NUMBER(10) NOT NULL,
                                rfc VARCHAR2(20),
                                curp VARCHAR2(20),
                                edoCivil VARCHAR2(50),
                                PRIMARY KEY(idPer)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE datosPersonales_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER datosPersonales_seq_tr
    BEFORE INSERT ON datosPersonales FOR EACH ROW
    WHEN (NEW.idPer IS NULL)
BEGIN
    SELECT datosPersonales_seq.NEXTVAL INTO :NEW.idPer FROM DUAL;
END;
/

CREATE TABLE comunicacion(
                             idCom NUMBER(10) NOT NULL,
                             telOficina VARCHAR2(50),
                             telOtro VARCHAR2(50),
                             telCelular VARCHAR2(50),
                             mail VARCHAR2(50),
                             PRIMARY KEY(idCom)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE comunicacion_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER comunicacion_seq_tr
    BEFORE INSERT ON comunicacion FOR EACH ROW
    WHEN (NEW.idCom IS NULL)
BEGIN
    SELECT comunicacion_seq.NEXTVAL INTO :NEW.idCom FROM DUAL;
END;
/

CREATE TABLE domicilio(
                          idDom NUMBER(10) NOT NULL,
                          calle VARCHAR2(100),
                          colonia VARCHAR2(100),
                          noExt VARCHAR2(10),
                          noInt VARCHAR2(10),
                          ciudad VARCHAR2(100),
                          cp VARCHAR2(10),
                          PRIMARY KEY(idDom)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE domicilio_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER domicilio_seq_tr
    BEFORE INSERT ON domicilio FOR EACH ROW
    WHEN (NEW.idDom IS NULL)
BEGIN
    SELECT domicilio_seq.NEXTVAL INTO :NEW.idDom FROM DUAL;
END;
/

CREATE TABLE contacto(
                         idContacto NUMBER(10) NOT NULL,
                         nombre VARCHAR2(100),
                         tipo VARCHAR2(30),
                         razonSocial VARCHAR2(150),
                         idPer NUMBER(10),
                         idCliente NUMBER(10),
                         idCom NUMBER(10),
                         idDom NUMBER(10),
                         recomendado VARCHAR2(50),
                         asesor NUMBER(10),
                         tipoAsesor VARCHAR2(50),
                         puesto VARCHAR2(50),
                         activo CHAR(1),
                         web VARCHAR2(50),
                         PRIMARY KEY(idContacto),
                         FOREIGN KEY(idPer) REFERENCES datosPersonales(idPer),
                         FOREIGN KEY(idCom) REFERENCES comunicacion(idCom),
                         FOREIGN KEY(idDom) REFERENCES domicilio(idDom),
                         FOREIGN KEY(asesor) REFERENCES contacto(idContacto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE contacto_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER contacto_seq_tr
    BEFORE INSERT ON contacto FOR EACH ROW
    WHEN (NEW.idContacto IS NULL)
BEGIN
    SELECT contacto_seq.NEXTVAL INTO :NEW.idContacto FROM DUAL;
END;
/

CREATE TABLE factura(
                        idFactura NUMBER(10) NOT NULL,
                        idCliente NUMBER(10),
                        ffzc VARCHAR2(50),
                        ffzi VARCHAR2(50),
                        ffzg VARCHAR2(50),
                        ffza VARCHAR2(50),
                        PRIMARY KEY(idFactura)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE factura_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER factura_seq_tr
    BEFORE INSERT ON factura FOR EACH ROW
    WHEN (NEW.idFactura IS NULL)
BEGIN
    SELECT factura_seq.NEXTVAL INTO :NEW.idFactura FROM DUAL;
END;
/

CREATE TABLE loteAutos(
                          id NUMBER(10) NOT NULL,
                          razonSocial VARCHAR2(50),
                          sinIVA BINARY_DOUBLE,
                          conIVA BINARY_DOUBLE,
                          lineaVenta VARCHAR2(50),
                          comision VARCHAR2(50),
                          sucursal VARCHAR2(50),
                          domicilio VARCHAR2(50),
                          asesor NUMBER(10),
                          PRIMARY KEY(id),
                          FOREIGN KEY(asesor) REFERENCES contacto(idContacto)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE loteAutos_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER loteAutos_seq_tr
    BEFORE INSERT ON loteAutos FOR EACH ROW
    WHEN (NEW.id IS NULL)
BEGIN
    SELECT loteAutos_seq.NEXTVAL INTO :NEW.id FROM DUAL;
END;
/

CREATE TABLE aplicarOp(
                          id NUMBER(10) NOT NULL,
                          PRIMARY KEY(id)
);

-- Generate ID using sequence and trigger
CREATE SEQUENCE aplicarOp_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER aplicarOp_seq_tr
    BEFORE INSERT ON aplicarOp FOR EACH ROW
    WHEN (NEW.id IS NULL)
BEGIN
    SELECT aplicarOp_seq.NEXTVAL INTO :NEW.id FROM DUAL;
END;
/

CREATE TABLE operacion(
                          numOperacion NUMBER(10) NOT NULL,
                          tipo VARCHAR2(50),
                          fecha DATE,
                          folio VARCHAR2(50),
                          referenciaPagos NUMBER(10),
                          cliente NUMBER(10),
                          persona VARCHAR2(50),
                          descripcion VARCHAR2(255),
                          asesor NUMBER(10),
                          idFinanciamiento NUMBER(10),
                          aplicarOp NUMBER(10),
                          impuestos NUMBER(10),
                          loteAutos NUMBER(10),
                          seguroAuto NUMBER(10),
                          comentarios VARCHAR2(510),
                          tfIva CHAR(1),
                          tfSeguro CHAR(1),
                          fPago VARCHAR2(20),
                          poliza VARCHAR2(20),
                          tfSeguroFin CHAR(1),
                          tipoUnidad VARCHAR2(20),
                          fechaPago DATE,
                          relPago VARCHAR2(50),
                          marca VARCHAR2(50),
                          factura VARCHAR2(50),
                          version VARCHAR2(50),
                          importe BINARY_DOUBLE,
                          tipoFin VARCHAR2(50),
                          idCentroCosto NUMBER(10),
                          idFactura NUMBER(10),
                          estatus VARCHAR2(50),
                          cancelado CHAR(1),
                          aplicPagos CHAR(1),
                          fFondeo DATE,
                          confirmado CHAR(1),
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

-- Generate ID using sequence and trigger
CREATE SEQUENCE operacion_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER operacion_seq_tr
    BEFORE INSERT ON operacion FOR EACH ROW
    WHEN (NEW.numOperacion IS NULL)
BEGIN
    SELECT operacion_seq.NEXTVAL INTO :NEW.numOperacion FROM DUAL;
END;
/

CREATE TABLE users (
                       id varchar2(128) PRIMARY KEY,
                       username varchar2(255) NOT NULL,
                       password varchar2(255) NOT NULL,
                       registered timestamp(0),
                       last_login timestamp(0)
);

create table permissions_section (
                                     id varchar2(128) primary key,
                                     section varchar2(128)
);

create table permissions (
                             id varchar2(128) primary key,
                             permission varchar2(64) not null,
                             idPermissionSection varchar2(128),
                             foreign key (idPermissionSection) references permissions_section(id)
);

create table user_permissions(
                                 id varchar2(128) primary key,
                                 userID varchar2(128),
                                 permissionID varchar2(128),
                                 foreign key (userID) references users(id),
                                 foreign key (permissionID) references permissions(id)
);
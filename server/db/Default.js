const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'restsql'
});

connection.connect(err => {
    if(err) return err;
    console.log("Database connected");
})

async function get (res) {
    const sql = 'SELECT * FROM valdefault';

    connection.query(sql, (err,results) => {
        if (err) return err;
        if (results.length > 0){
            res.json(results);
        } else {
            res.send('No data found');
        }
    });
}

async function getById (req, res) {
    const sql = 'SELECT * FROM valdefault WHERE id = ?';

    const id = req.params.id;

    connection.query(sql, id, (err,results) => {
        if (err) return err;
        if (results.length > 0){
            res.json(results);
        } else {
            res.send('No data found');
        }
    });
}

async function add (req,res) {
    const sql = 'INSERT INTO valdefault SET ?';

    const defaultObj = {
        tipo: req.body.tipo,
        tasa: req.body.tasa,
        anticipo: req.body.anticipo,
        apertura: req.body.apertura,
        deposito: req.body.deposito,
        vrescate: req.body.vrescate,
        tfrescate: req.body.tfrescate,
        descuento: req.body.descuento,
        admon: req.body.admon,
        tfadmon: req.body.tfadmon,
        gps: req.body.gps,
        tfgps: req.body.tfgps,
        segauto: req.body.segauto,
        tfsegauto: req.body.tfsegauto,
        segdeuda: req.body.segdeuda,
        tfsegdeuda: req.body.tfsegdeuda,
        liquidacion: req.body.liquidacion,
        pptipo: req.body.pptipo
    };

    connection.query(sql, defaultObj, (err) => {
        if (err) return err;
        res.send('Default value added');
    });
}

async function update (req,res) {
    var sql = 'UPDATE valdefault SET ';

    const id = req.params.id;

    const defaultObj = {};

    var change = false;

    if(req.body.tipo){
        defaultObj.tipo = req.body.tipo;
        sql += `tipo = '${defaultObj.tipo}' `;
        change = true;
    }

    if(req.body.tasa){
        defaultObj.tasa = req.body.tasa;
        if(change){
            sql += `,tasa = ${defaultObj.tasa} `;
        } else {
            sql += `tasa = ${defaultObj.tasa} `;
            change = true;
        }
    }
    
    if(req.body.anticipo){
        defaultObj.anticipo = req.body.anticipo;
        if(change){
            sql += `,anticipo = ${defaultObj.anticipo} `;
        } else {
            sql += `anticipo = ${defaultObj.anticipo} `;
            change = true;
        }
    }

    if(req.body.apertura){
        defaultObj.apertura = req.body.apertura;
        if(change){
            sql += `,apertura = ${defaultObj.apertura} `;
        } else {
            sql += `apertura = ${defaultObj.apertura} `;
            change = true;
        }
    }

    if(req.body.deposito){
        defaultObj.deposito = req.body.deposito;
        if(change){
            sql += `,deposito = ${defaultObj.deposito} `;
        } else {
            sql += `deposito = ${defaultObj.deposito} `;
            change = true;
        }
    }

    if(req.body.vrescate){
        defaultObj.vrescate = req.body.vrescate;
        if(change){
            sql += `,vrescate = ${defaultObj.vrescate} `;
        } else {
            sql += `vrescate = ${defaultObj.vrescate} `;
            change = true;
        }
    }

    if(req.body.tfrescate){
        defaultObj.tfrescate = req.body.tfrescate;
        if(change){
            sql += `,tfrescate = ${defaultObj.tfrescate} `;
        } else {
            sql += `tfrescate = ${defaultObj.tfrescate} `;
            change = true;
        }
    }

    if(req.body.descuento){
        defaultObj.descuento = req.body.descuento;
        if(change){
            sql += `,descuento = ${defaultObj.descuento} `;
        } else {
            sql += `descuento = ${defaultObj.descuento} `;
            change = true;
        }
    }

    if(req.body.admon){
        defaultObj.admon = req.body.admon;
        if(change){
            sql += `,admon = ${defaultObj.admon} `;
        } else {
            sql += `admon = ${defaultObj.admon} `;
            change = true;
        }
    }
    
    if(req.body.tfadmon){
        defaultObj.tfadmon = req.body.tfadmon;
        if(change){
            sql += `,tfadmon = ${defaultObj.tfadmon} `;
        } else {
            sql += `tfadmon = ${defaultObj.tfadmon} `;
            change = true;
        }
    }

    if(req.body.gps){
        defaultObj.gps = req.body.gps;
        if(change){
            sql += `,gps = ${defaultObj.gps} `;
        } else {
            sql += `gps = ${defaultObj.gps} `;
            change = true;
        }
    }

    if(req.body.tfgps){
        defaultObj.tfgps = req.body.tfgps;
        if(change){
            sql += `,tfgps = ${defaultObj.tfgps} `;
        } else {
            sql += `tfgps = ${defaultObj.tfgps} `;
            change = true;
        }
    }

    if(req.body.segauto){
        defaultObj.segauto = req.body.segauto;
        if(change){
            sql += `,segauto = ${defaultObj.segauto} `;
        } else {
            sql += `segauto = ${defaultObj.segauto} `;
            change = true;
        }
    }

    if(req.body.tfsegauto){
        defaultObj.tfsegauto = req.body.tfsegauto;
        if(change){
            sql += `,tfsegauto = ${defaultObj.tfsegauto} `;
        } else {
            sql += `tfsegauto = ${defaultObj.tfsegauto} `;
            change = true;
        }
    }

    if(req.body.segdeuda){
        defaultObj.segdeuda = req.body.segdeuda;
        if(change){
            sql += `,segdeuda = ${defaultObj.segdeuda} `;
        } else {
            sql += `segdeuda = ${defaultObj.segdeuda} `;
            change = true;
        }
    }

    if(req.body.tfsegdeuda){
        defaultObj.tfsegdeuda = req.body.tfsegdeuda;
        if(change){
            sql += `,tfsegdeuda = ${defaultObj.tfsegdeuda} `;
        } else {
            sql += `tfsegdeuda = ${defaultObj.tfsegdeuda} `;
            change = true;
        }
    }

    if(req.body.liquidacion){
        defaultObj.liquidacion = req.body.liquidacion;
        if(change){
            sql += `,liquidacion = ${defaultObj.liquidacion} `;
        } else {
            sql += `liquidacion = ${defaultObj.liquidacion} `;
            change = true;
        }
    }

    if(req.body.pptipo){
        defaultObj.pptipo = req.body.pptipo;
        if(change){
            sql += `,pptipo = ${defaultObj.pptipo} `;
        } else {
            sql += `pptipo = ${defaultObj.pptipo} `;
            change = true;
        }
    }

    sql += `WHERE id = ${id}`;
    console.log(sql)
    console.log(id);
    console.log(defaultObj);
    connection.query(sql, (err) => {
        if (err) return err;
        res.send('Default value updated');
    });
}

async function deleteById (req,res) {
    const sql = 'DELETE FROM valdefault WHERE id = ?';

    const id = req.params.id;

    connection.query(sql, id, (err) => {
        if (err) return err;
        res.send('Default value deleted');
    });
}

module.exports.get = get;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;
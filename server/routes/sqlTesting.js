const router = require('express').Router();
const mysql = require('mysql');

//BD connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restsql'
});

//Check connection
connection.connect(error => {
    if (error) throw error;
    console.log('Connected to database');
})


router.get('/', (req, res) => {
    res.send('Hola!');
});

router.get('/names', (req, res) => {
    const sql = 'SELECT * FROM names';

    connection.query(sql, (err, results) => {
        if(err) return err;
        if(results.length > 0){
            res.json(results);
        } else {
            res.send('No data found');
        }
    });
});

router.get('/names/:id', (req, res) => {
    const {id } = req.params;
    const sql = `SELECT * FROM names WHERE id = ${id}`;
    connection.query(sql, (err, results) => {
        if(err) return error;

        if(results.length > 0){
            res.json(results);
        } else {
            res.send('No data found');
        }
    });

});

router.post('/add', (req, res) => {
    const sql = 'INSERT INTO names SET ?';

    const nameObj = { 
        nombre: req.body.nombre
    }
    connection.query(sql, nameObj, err => {
        if(err) return err;
        res.send('Name created!');
    });
});

router.put('/update/:id', (req, res) => {
    const {id } = req.params;
    const {nombre } = req.body;
    const sql = `UPDATE names SET nombre = '${nombre}' WHERE id=${id }`;
    connection.query(sql, err => {
        if(err) return err;
        res.send('Name updated!');
    });
});

router.delete('/delete/:id', (req, res) => {
    const {id } = req.params;
    const sql = `DELETE FROM names WHERE id = ${id}`;

    connection.query(sql, err => {
        if(err) return err;
        res.send('Deleted name!');
    });
})

module.exports = router;
module.exports = {
    pool: {
        user: process.env.ORCL_USER,
        password: process.env.ORCL_PASSWORD2,
        connectionString: process.env.ORCL_CONN2,
        poolMin: 10,
        poolMax: 10,
        poolIncrement: 0
    }
}
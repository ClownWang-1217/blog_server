const mysql = require('mysql');
const config = require('../config/db.config.json')
const pool = mysql.createPool({
    user: config.user,
    host: config.host,
    port: config.port,
    database: config.database,
    password: config.password
})

const execSQL = (sql) => {
    const promise = new Promise((reslove, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                reject(err);
            }
            conn.query(sql, (err, results) => {
                conn.release();
                if (err) {
                    console.error('There is something wrong in which Mysql was querying, ' +
                        'you had better to check this flow!');
                    reject(err);
                }
                if (results) {
                    reslove(results);
                }
            });
        })

    });
    return promise;
}


module.exports = {
    execSQL
}

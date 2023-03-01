const mysql = require('mysql');
const config = require('../config/db.config.json')
const connection = mysql.createConnection({
    user:config.user,
    host:config.host,
    port:config.port,
    database:config.database,
    password:config.password
})

const execSQL = (sql) => {
    const promise = new Promise((reslove,reject)=>{
        connection.query(sql,(err,results)=>{
            if(err){
                console.log('===========',err);
                reject(err);
            }
            if(results){
                console.log('===========',results);
                reslove(results);
            }
        });
    })
    return promise;
}

module.exports = {
    execSQL
}

//some func about blog
const { SqlIterator } = require('../util/Iterator');
const { execSQL } = require('../db/sql');

//query all data from data base
const getList = () => {
    // get data from data
    const sql = 'select * from info;';
    return execSQL(sql);
}

//query a row data from data base
const getDetailByID = (id) => {
    const sql = `select * from info where id = ${id};`;
    return execSQL(sql);
}

//create blog data to data base
const createBlog = (params) => {
    console.log(params)
    const iterator = new SqlIterator(params);
    let tempName = '';
    let tempValue = '';
    for (const mem of iterator) {
        console.log(mem)
        tempName += `${mem[0]},`;
        tempValue += `${mem[1]},`;
    }
    
    const sql = `insert into info (${tempName.replace(/,$/gi, '')}) VALUES (${tempValue.replace(/,$/gi, '')});`;
    console.log('sql',sql)
    return execSQL(sql);
}

//remove a row data from data base
const deleteBlogByID = (id) => {
    const sql = `DELETE FROM info where id = ${id}`;
    return execSQL(sql);
}
JSON.parse

//modify a row data from data base
const updateBlogByID = (id, params) => {
    const iterator = new SqlIterator(params);
    let temp = '';
    for (const mem of iterator) {
        temp += `${mem[0]} = ${mem[1]},`;
    }
    const sql = `UPDATE info set ${temp.replace(/,$/gi, '')} where id = ${id};`;
    return execSQL(sql);
}

module.exports = {
    getList,
    getDetailByID,
    createBlog,
    deleteBlogByID,
    updateBlogByID
};
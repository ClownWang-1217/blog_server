//some func about blog
const {SqlIterator} = require('../util/Iterator');
const {execSQL} = require('../db/sql');
const getList = () => {
    // get data from data
    const sql = 'select * from info ;'
    return execSQL(sql);
}

const getDetailByID = (id) => {
    const sql = `select * from info where id = ${id};`
    return execSQL(sql);
}   


const createBlog = (params) => {
    const{
        title,
        author,
        createDate,
        content
    } = params;
    const sql = `insert into info (title,author,createDate,content) VALUES
     (${title},${author},${createDate},${content});`
    return execSQL(sql);
}
const deleteBlogByID = (id) => {
    const sql = `DELETE FROM info where id = ${id}`;
    return execSQL(sql);
}
const updateBlogByID = (id,params) => {
    const iterator = new SqlIterator(params)[Symbol.iterator]();
    let temp = '';
    for (const mem of object) {
        temp += mem;
    }
    const sql = `UPDATE info set ${temp} where id = ${id};`
    return execSQL(sql);
}
module.exports = { 
    getList, 
    getDetailByID,
    deleteBlogByID,
    updateBlogByID
};
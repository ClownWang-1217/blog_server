//depose route of blog
const { SuccessModel, FailModel } = require('../model/responseModel');
const { getList,getDetail } = require('../controller/blog')
const handleBlogRoute = (req, res,callback) => {
    const method = req.method;
    const path = req.path;
    const query = req.query;
    const {
        author,
        keywords,
        id
    } = query;

    if (method === 'GET' && path === "/api/blog/list") {
        getList().then((res)=>{
            if(res){
                console.log('dfdfdf',res)
                callback(new SuccessModel(res));
            }
        }).catch((err)=>{
            console.log('err',err)
        });
    }   
    if (method === 'GET' && path === "/api/blog/detail") {

        const responseDate = getDetail(id)
        callback(new SuccessModel(responseDate));
    }
    if (method === 'POST' && path === "/api/blog/new") {

        console.log(req.body);
        const responseDate = req.body
        return responseDate;
    }
    if (method === 'POST' && path === "/api/blog/update") {
        const responseDate = {
            name: '汪涛',
            id: '1'
        }
        return responseDate;
    }
    if (method === 'POST' && path === "/api/blog/delete") {
        const responseDate = {
            name: '汪涛',
            id: '1'
        }
        return responseDate;
    }

}

module.exports = handleBlogRoute; 
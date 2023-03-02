//depose route of blog
const { SuccessModel, FailModel } = require('../model/responseModel');
const { getList, getDetailByID, updateBlogByID, deleteBlogByID, createBlog } = require('../controller/blog')
const handleBlogRoute = (req, res, callback) => {
    try {
        const method = req.method;
        const path = req.path;
        const query = req.query;

        if (method === 'GET' && path === "/api/blog/list") {
            getList().then((res) => {
                if (res) {
                    callback(new SuccessModel(res, 'success'));
                }
            }).catch((err) => {
                callback(new FailModel(err, 'failure'));
            });
        } else if (method === 'GET' && path === "/api/blog/detail") {
            getDetailByID(query.id).then((res) => {
                if (res) {
                    callback(new SuccessModel(res, 'success'));
                }
            }).catch((err) => {
                callback(new FailModel(err, 'failure'));
            });
        } else if (method === 'GET' && path === "/api/blog/delete") {
            deleteBlogByID(query.id).then((res) => {
                if (res) {
                    callback(new SuccessModel(res, 'success'));
                }
            }).catch((err) => {
                callback(new FailModel(err, 'failure'));
            });
        } else if (method === 'POST' && path === "/api/blog/new") {
            createBlog(req.body).then((res) => {
                if (res) {
                    callback(new SuccessModel(res, 'success'));
                }
            }).catch((err) => {
                callback(new FailModel(err, 'failure'));
            });
        } else if (method === 'POST' && path === "/api/blog/update") {
            const {
                id,
                ...rest
            } = req.body;
            updateBlogByID(id, rest).then((res) => {
                if (res) {
                    callback(new SuccessModel(res, 'success'));
                }
            }).catch((err) => {
                callback(new FailModel(err, 'failure'));
            });
        } else {
            callback(new FailModel({ data: '404 not found' }, 'failure'))
        }

    } catch (error) {
        callback(new FailModel({ data: '505' }, error))
    }


}

module.exports = handleBlogRoute;
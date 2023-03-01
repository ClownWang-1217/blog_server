const handleBlogRoute = require('./src/routes/blog');
const querystring = require('querystring');
//dispose post request

const getPostData = (req) => {
    const promise = new Promise((resolve,reject)=>{
        if(req.method !== 'POST'){
            resolve({});
            return;
        }
        if(req.headers['content-type'] !== 'application/json'){
            resolve({});
            return;
        }
        let postData = '';
        req.on('data',(chunk)=>{
            console.log('chunk',chunk)
            postData+=chunk.toString();
        });
        req.on('end',()=>{
            if(!postData){
                resolve({});
                return;
            }
        resolve(JSON.parse(postData));
        return;
        })
    })
    return promise;
}

//server handle
const serverHandler = (req, res) => {
    //set up response format
    res.setHeader('Content-Type', 'application/json');
    //set up path
    const url = req.url;
    req.path = url.split('?')[0]
    //set up query
    req.query = querystring.parse(url.split('?')[1])

    getPostData(req).then((data) => {
        req.body = data;
        handleBlogRoute(req, res, (responseDate) => {
            console.log('responseDate',responseDate)
            res.end(JSON.stringify(responseDate));
            return;
        });
        
    })
}

module.exports = serverHandler;
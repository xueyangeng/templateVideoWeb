const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {

    app.use('/api', createProxyMiddleware({
        target: "https://jianyijian-test.pdnews.cn/apiservice/",
        changeOrigin: true,
    }));
  
    // app.use('/cms', createProxyMiddleware({
    //     target: "https://aibrain-test.pdnews.cn",
    //     changeOrigin: true,
    // }));
  };

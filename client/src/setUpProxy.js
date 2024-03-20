
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
app.use(
    '/api',
        createProxyMiddleware({
            target: 'http://3.91.196.73:5000',
            changeOrigin: true,
        })
    );
};
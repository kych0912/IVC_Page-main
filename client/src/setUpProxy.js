
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
app.use(
    '/api',
        createProxyMiddleware({
            target: 'http://ec2-3-91-196-73.compute-1.amazonaws.com:5000',
            changeOrigin: true,
        })
    );
};

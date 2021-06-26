const restify = require('restify');

// Create HTTP server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    server.use(restify.plugins.bodyParser({ mapParams: true }));
    console.log("Sever is running")
});

// Listen for incoming requests.
server.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("UserAgent:"+req.headers['user-agent']);
    console.dir(req.headers)
    res.end();
});

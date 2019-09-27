const express = require('express'),
    path = require('path'),
    http = require('http'),
    socketIo = require('socket.io'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express();

const port = process.env.PORT || 4000;
const DIST_DIR = path.join(__dirname, '..', 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const server = http.createServer(app);
const io = socketIo(server);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(DIST_DIR));
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});
io.on('connection', socket => console.log('new connection' + socket.id));

server.listen(port, function () {
    console.log('App listening on port: ' + port);
});


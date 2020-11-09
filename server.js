// Requires
const app = require('../Backend/api/app');
const http = require('http');




// Port normalization
const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) return val;

    if (port >= 0) return port;

    return false;
};

// onError definition
const onError = error => {
    if (error.syscall !== "listen") throw error;

    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;

    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// onListening definition
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
};

const port = normalizePort("3000");
app.set("port", port);
// Options is used if any type of certificate is needed.
options = {

}

// setting up an http server
// Sets up an https server.
const server = http.createServer(options, app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port, () => {
    console.log("Listening...")
});

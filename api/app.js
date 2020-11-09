// Requires
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');









//Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
  console.log("request arrived for URL", req.url);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});


mongoose.set("useFindAndModify", false);


mongoose.Promise = global.Promise;


// Routes
const usuarioRoutes = require("./routes/usuario-routes.js");
const tareaRoutes = require("./routes/tarea-routes.js");


/// ROUTES

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


app.use("/api/usuario", usuarioRoutes);
app.use("/api/tareas", tareaRoutes);

//Some basic error handling
app.use((req, res, next) => {
  const error = new Error("Path Not Found");
  error.status = 404;
  next(error);
});

// Error handling for last unkown instance.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.log("ERROR:", err);
  res.json({
    error: {
      status: err.status,
      error: "Error en el servidor"
    },
  });
});


mongoose
  .connect(`mongodb://127.0.0.1:27017/EvolutionDB`, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Conected to database: EvolutionDB`);
  })
  .catch((error) => {
    console.log(error);
  });
mongoose.Promise = global.Promise;
// Export app
module.exports = app;

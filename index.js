// Create Express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4111;
// Use ".listen" method to start up a server that runs at http://localhost:4111
app.listen(PORT, console.log("Server has started at port: " + PORT))

// Set the view engine to use .ejs
// Define the root route to use
app.set('view engine', 'ejs');
app.use('/', require('./routes/login'));
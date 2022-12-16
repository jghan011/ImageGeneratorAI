//first we create simple express servere
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.Port || 5000; //ths will get our port value and with this ||  its saying or if the port is not there we  want to getget 5000

const app = express();

//ENable body parser
//the next to lines we use Express to create Middleware so basically It is a request handler, which have the access to the app’s request-response cycle
// urlencoded Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
// {extended: false} The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// remeber we installed openai with npm i openai so we can use /openai
app.use("/openai", require("./routes/openaiRoutes")); //we want to hit openai website and then from openaiRoutes.js use post for "generateimage"
app.listen(port, () => console.log(`server started on port ${port} `));
//Listen for connections.
//A node http.Server is returned, with this application (which is a Function) as its callback. If you wish to create both an HTTP and HTTPS server you may do so with the "http" and "https" modules as shown here:

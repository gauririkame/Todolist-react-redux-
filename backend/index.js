/*import express from 'express';
import connection from './database/db.js';
import cors from "cors";
import bodyParser from "body-parser";
import Routes from './database/routes/route.js';

const app = express();

const PORT = 8000;
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes);


connection();


app.listen(PORT ,() => console.log (`your server is running succesffully on PORT ${PORT}`)) */


// index.js

import express from 'express';
import connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

//const Routes = require('./database/routes/route');
import Routes from './routes/route.js';
//import Routes from './database/routes/route';

const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", Routes);

connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));

//Galactic conquests starts here! -Invader Zim.

import SimplyStore from '@muze-nl/simplystore'
import fs from 'fs'
import JSONTag from '@muze-nl/jsontag'
import cors from 'cors'
import express from 'express'

/*
//configure and start webserver
const app = express();
const portapp = process.env.PORT || 8000;

app.use('/node_modules', express.static('/node_modules', { root: "." }));

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: "." });
});

app.listen(portapp);
console.log('Server started at http://localhost:' + portapp);
*/

//configure cors for the database(s) server
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support``
}

//start database(s)
SimplyStore.use(cors(corsOptions))

SimplyStore.run({
  datafile: process.cwd()+'/Databases/SWAPI.jsontag',
  port : 3000,
  //wwwroot : "."
})
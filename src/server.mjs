//Galactic conquests starts here! -Invader Zim.

import SimplyStore from '@muze-nl/simplystore'
import fs from 'fs'
import JSONTag from '@muze-nl/jsontag'
import cors from 'cors'
import express from 'express'

//configure cors for the database(s) server
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support``
}

//start database(s)
SimplyStore.use(cors(corsOptions))

SimplyStore.run({
  datafile: process.cwd()+'/../data/SWAPI.jsontag',
  port : 3000,
  //wwwroot : "."
})
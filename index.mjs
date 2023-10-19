//Galactic conquests starts here! -Invader Zim.

import SimplyStore from '@muze-nl/simplystore'
import fs from 'fs'
import JSONTag from '@muze-nl/jsontag'
import cors from 'cors'

//let str = fs.readFileSync(process.cwd()+'/Databases/SWAPI.jsontag','utf-8')
//const data = JSONTag.parse(str)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

SimplyStore.use(cors(corsOptions))

SimplyStore.run({
	datafile: process.cwd()+'/Databases/SWAPI.jsontag'
})
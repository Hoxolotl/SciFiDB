# SciFiDB
Movie-OS styled Database containing information about science fiction related topics

Built using simplystore

# naming conventions:
* Simplysotre: a database
* SimplyEdit: a cms for the front-end
* Simplycode: a cms for the back-end
* Simply-view: ?

* src/ contains the sources to build the webiste and the database server
* scripts/ contains scripts to agregate the different databases into a single file in data/data.json that is used to populate the simplystore database in data/data.json.

# Dependencies
* Nodejs
* PHP to run the front end

# Running
After installing the node_modules using "npm install":

* start the database and front end server from two command line interfaces:
 * one with "npm run startDB" to start the database
 * one with "npm run startFE" to start the front end php server 

# Explanation

* the back-end will be hosted at http://localhost:3000/query
* the front-end will be hosted at http://localhosty:4500 

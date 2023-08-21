# grpc-poc
Little Notes API using the gRPC protocol and JavaScript.

## Tools needed to run this project

* NodeJS v18.15.0
* yarn

## How to run the project
You can use the project by typing these commands on your terminal:

* install the project's dependencies: `yarn install`
* run the server: `node ./src/server/index.js`

Once you have all the project's dependencies and the server is up and running, open one more terminal and type:

* to list all the notes: `node ./src/client/index.js listAllNotes`
* to create a note: `node ./src/client/index.js addNote "<note-title>" "<note-content>"`
* to edit a note: `node ./src/client/index.js editNote <note-id> "<new-note-title>" "<new-note-content>"`
* to delete a note: `node ./src/client/index.js deleteNote <note-id>`
* to get a specific note: `node ./src/client/index.js getNote <note-id>`

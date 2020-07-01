const mongoose = require('mongoose');

const connectionString = "";

function connect() {
    
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;

db.on('error', (error)=>{console.error(error)});
db.once('open', () => {console.log("Connected to DB")});

}
function close() {
    return mongoose.disconnect();
}

module.exports = {connect, close};
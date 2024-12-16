const mongoose = require('mongoose');

//Define
const credentialsSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

//export
module.exports = mongoose.model('users', credentialsSchema);

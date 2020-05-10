const server = require('../../app');
const url = require('../../constant');
const mongoose = require('mongoose');
async function startConnection() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        server.listen(8000, () => {
            console.log('App listening on port 8000!');
        });
    } catch (e) {
        console.error(e);
    }
}

module.exports = startConnection;


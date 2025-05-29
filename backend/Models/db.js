const mongoose = require('mongoose');

const mongo_url = 'mongodb+srv://yrsaravanan77:yrsaravanan77@cluster0.q8brunl.mongodb.net/mern-auth';

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })
const mongoose = require('mongoose');

const customSelectorsSchema = new mongoose.Schema({
    name: String,
    price: String,
    imgUrl: String,
});

const pageSchema = new mongoose.Schema({
    pageUrl: String,
    cardSelector: String,
    customSelectors: [customSelectorsSchema],
});

const storeBoxSchema = new mongoose.Schema({
    title: String,
    logo: String,
    pages: [pageSchema],
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rewiew: { type: String, required: false },
    storeBox: [storeBoxSchema],
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);

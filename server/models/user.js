const mongoose = require('mongoose');
const { Schema } = mongoose;

const customSelectorsSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    imgUrl: { type: String, required: true },
});

const pageSchema = new Schema({
    pageUrl: { type: String, required: true },
    cardSelector: { type: String, required: true },
    customSelectors: [customSelectorsSchema],
});

const storeBoxSchema = new Schema({
    title: { type: String, required: true },
    logo: { type: String, required: true },
    pages: [pageSchema],
});

const userSchema = new Schema({
    name: { type: String, required: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rewiew: { type: String, required: false },
    storeBox: [storeBoxSchema],
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);

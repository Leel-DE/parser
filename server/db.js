const { MongoClient } = require('mongodb');

const connectDB = async (app) => {
    try {
        const uri = process.env.MONGO_URI;
        const client = new MongoClient(uri);

        await client.connect();
        console.log('Connected to MongoDB Atlas');
        app.locals.db = client.db('parser');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        process.exit(1);
    }
};

module.exports = connectDB;

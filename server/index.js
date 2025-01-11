require('dotenv').config();

const express = require('express');
const cors = require('cors');
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

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));


connectDB(app); 

const userRoutes = require('./routes/user-routs');
app.use(userRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

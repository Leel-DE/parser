const { MongoClient } = require('mongodb');

const getAllUsers = async (req, res) => {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('parser'); 
        const collection = database.collection('users'); 

     
        const users = await collection.find({}).toArray();

     
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Server Error');
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');
    }
};

module.exports = { getAllUsers };

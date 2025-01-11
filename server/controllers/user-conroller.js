const getAllUsers = async (req, res) => {
    try {
        const database = req.app.locals.db;
        if (!database) {
            return res.status(500).send('Database connection is not initialized');
        }

        const collection = database.collection('users');
        const users = await collection.find({}).toArray();

        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Server Error');
    }
};

module.exports = { getAllUsers };

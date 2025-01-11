const getAllUsers = async (req, res) => {
    try {
        const database = req.app.locals.db; // Используем подключение из `app.locals`
        if (!database) {
            return res.status(500).send('Database connection is not initialized');
        }

        const collection = database.collection('users'); // Указываем коллекцию
        const users = await collection.find({}).toArray(); // Запрашиваем все данные

        res.status(200).json(users); // Отправляем JSON ответ
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Server Error');
    }
};

module.exports = { getAllUsers };

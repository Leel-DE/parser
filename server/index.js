require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

// Подключение к базе данных
const connectDB = async (app) => {
    try {
        const uri = process.env.MONGO_URI;
        const client = new MongoClient(uri);

        await client.connect();
        console.log('Connected to MongoDB Atlas');
        app.locals.db = client.db('parser'); // Добавляем подключение базы в `app.locals`
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        process.exit(1); // Завершаем процесс при ошибке подключения
    }
};

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

// Подключение к MongoDB
connectDB(app); // Передаем `app`, чтобы добавить подключение в `app.locals`

// Подключение роутеров
const userRoutes = require('./routes/user-routs');
app.use(userRoutes);

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

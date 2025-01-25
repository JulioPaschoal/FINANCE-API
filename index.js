import 'dotenv/config';
import express from 'express';
import { PostgresHelpers } from './src/db/postgres/helper.js';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    const result = await PostgresHelpers.query('SELECT * FROM users');
    res.send(JSON.stringify(result));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

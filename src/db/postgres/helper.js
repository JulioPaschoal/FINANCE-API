import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
});

export const PostgresHelpers = {
    query: async (query, params) => {
        const client = await pool.connect();
        const result = await client.query(query, params);
        await client.release();
        return result.rows;
    },
};

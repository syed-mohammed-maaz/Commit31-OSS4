const { Pool } = require('pg')

if (!process.env.DATABASE_URL) {
  throw new Error('Missing required environment variable: DATABASE_URL')
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

pool.on('error', (err) => {
  console.error('Unexpected database error', err)
  process.exit(1)
})

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
  testConnection: async () => {
    try {
      await pool.query('SELECT 1')
      console.log('Database connected successfully')
    } catch (err) {
      console.error('Database connection failed', err)
      throw err
    }
  },
}

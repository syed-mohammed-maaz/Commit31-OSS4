require('dotenv').config()

const express = require('express')
const cors = require('cors')
const db = require('./config/db')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server running' })
})

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()')
    res.json({ status: 'ok', time: result.rows[0] })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

const PORT = process.env.PORT ?? 5000

const startServer = async () => {
  await db.testConnection()
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

startServer()

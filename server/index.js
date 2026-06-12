import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('FlowStack backend is running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
app.post('/api/contact', (req, res) => {
  const { name, email, service, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields.',
    })
  }

  console.log('New contact message received:')
  console.log({
    name,
    email,
    service,
    message,
  })

  res.status(200).json({
    success: true,
    message: 'Message received successfully.',
  })
})
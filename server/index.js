import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import ContactMessage from './models/ContactMessage.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('FlowStack backend is running')
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, service, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      })
    }

    const contactMessage = await ContactMessage.create({
      name,
      email,
      service,
      message,
    })

    console.log('Contact message saved:', contactMessage._id)

    res.status(201).json({
      success: true,
      message: 'Message saved successfully.',
    })
  } catch (error) {
    console.error('Contact message error:', error.message)

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
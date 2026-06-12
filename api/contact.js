import mongoose from 'mongoose'

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    service: {
      type: String,
      required: true,
      default: 'n8n Automation',
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model('ContactMessage', contactMessageSchema)

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  await mongoose.connect(process.env.MONGO_URI)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    await connectDB()

    const { name, email, service, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      })
    }

    await ContactMessage.create({
      name,
      email,
      service,
      message,
    })

    return res.status(201).json({
      success: true,
      message: 'Message saved successfully.',
    })
  } catch (error) {
    console.error('Contact API error:', error)

    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    })
  }
}
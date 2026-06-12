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

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema)

export default ContactMessage
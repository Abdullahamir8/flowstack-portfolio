import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    label: String,
    image: String,
    imageSrc: String,
    databaseImageSrc: String,
    status: {
      type: String,
      default: 'In Progress',
    },
    techStack: [String],
    description: String,
    problem: String,
    solution: String,
    learned: String,
    demoLink: String,
    githubLink: String,
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model('Project', projectSchema);

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URI);
};

const verifyToken = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  return true;
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (!verifyToken(req) && req.method !== 'GET') {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }

  try {
    await connectDB();

    if (req.method === 'GET') {
      // Get all projects or by slug
      const { slug } = req.query;

      if (slug) {
        const project = await Project.findOne({ slug });
        if (!project) {
          return res.status(404).json({
            success: false,
            message: 'Project not found',
          });
        }
        return res.status(200).json({
          success: true,
          data: project,
        });
      }

      const projects = await Project.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        data: projects,
      });
    }

    if (req.method === 'POST') {
      // Create new project
      const projectData = req.body;

      if (!projectData.slug || !projectData.title) {
        return res.status(400).json({
          success: false,
          message: 'Slug and title are required',
        });
      }

      const newProject = new Project(projectData);
      await newProject.save();

      return res.status(201).json({
        success: true,
        message: 'Project created successfully',
        data: newProject,
      });
    }

    if (req.method === 'PUT') {
      // Update project
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Project ID is required',
        });
      }

      const updatedProject = await Project.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!updatedProject) {
        return res.status(404).json({
          success: false,
          message: 'Project not found',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Project updated successfully',
        data: updatedProject,
      });
    }

    if (req.method === 'DELETE') {
      // Delete project
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Project ID is required',
        });
      }

      const deletedProject = await Project.findByIdAndDelete(id);

      if (!deletedProject) {
        return res.status(404).json({
          success: false,
          message: 'Project not found',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Project deleted successfully',
      });
    }

    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  } catch (error) {
    console.error('Admin projects API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
}

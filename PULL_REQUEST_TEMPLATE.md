# Admin Dashboard Feature

## 🎯 Overview
This PR adds a complete admin dashboard system to FlowStack Portfolio, enabling dynamic project management and contact form submission tracking without code changes.

## ✨ Features Added

### 🔐 Authentication
- JWT-based admin authentication system
- Secure login page with credential validation
- 24-hour token expiration
- Protected routes for admin-only access

### 📊 Admin Dashboard
- **Analytics Page**: View total contacts, projects, and engagement metrics
- **Project Management**: Full CRUD operations for projects
  - Create new projects with rich details
  - Edit existing project information
  - Delete projects with confirmation
  - View all projects in an organized grid
- **Contact Viewer**: Paginated list of contact form submissions
  - View all contact details (name, email, service, date)
  - Delete individual contact submissions
  - 10 contacts per page with pagination controls

### 🛠️ Backend APIs
- `POST /api/admin/auth` - Login with username/password
- `GET /api/admin/verify-token` - Verify JWT token validity
- `GET/POST/PUT/DELETE /api/admin/projects` - Project CRUD operations
- `GET/DELETE /api/admin/contacts` - Manage contact submissions

### 📦 Dependencies Added
- `jsonwebtoken@^9.1.2` - JWT token management
- `lucide-react@^0.294.0` - Icon library for UI

## 📋 What Changed

### New Files (14 total)
```
api/
  └── admin/
      ├── auth.js              # JWT authentication endpoint
      ├── verify-token.js      # Token verification endpoint
      ├── projects.js          # Project CRUD operations
      └── contacts.js          # Contact management endpoint

src/
  ├── hooks/
  │   └── useAuth.js           # Authentication hook for token management
  ├── pages/
  │   ├── AdminLogin.jsx       # Admin login page
  │   └── AdminDashboard.jsx   # Main admin dashboard
  ├── components/
  │   ├── ProtectedRoute.jsx   # Route protection wrapper
  │   └── admin/
  │       ├── AdminSidebar.jsx     # Dashboard navigation
  │       ├── AdminAnalytics.jsx   # Analytics overview
  │       ├── AdminProjects.jsx    # Project management interface
  │       ├── ProjectForm.jsx      # Project create/edit form
  │       └── AdminContacts.jsx    # Contact submissions viewer

.env.example                # Environment configuration template
package.json (updated)      # Added new dependencies
src/App.jsx (updated)       # Added admin routes
```

### Modified Files
- `src/App.jsx` - Added admin routes and route protection
- `package.json` - Added jsonwebtoken and lucide-react dependencies

## 🚀 How to Use

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create `.env` file with:
```env
MONGO_URI=your_mongodb_connection_string
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
JWT_SECRET=your-super-secret-key-change-in-production
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Access Admin Dashboard
- **Login**: http://localhost:5173/admin/login
- **Dashboard**: http://localhost:5173/admin/dashboard
- **Demo Credentials**: admin / admin123

## 🔒 Security Features

✅ JWT token-based authentication  
✅ Protected admin routes (redirects to login if unauthorized)  
✅ Token expiration (24 hours)  
✅ Authorization headers on all admin API requests  
✅ CORS enabled for Vercel serverless functions  

## 📱 UI/UX

- Responsive design (mobile, tablet, desktop)
- Dark theme matching portfolio aesthetic
- Intuitive sidebar navigation
- Loading states and error handling
- Confirmation dialogs for destructive actions
- Form validation on create/edit

## ✅ Testing Checklist

- [ ] Verify login with demo credentials works
- [ ] Create a new project
- [ ] Edit an existing project
- [ ] Delete a project (with confirmation)
- [ ] View contact submissions
- [ ] Delete a contact
- [ ] Verify unauthorized access redirects to login
- [ ] Check pagination on contacts page
- [ ] Test logout functionality
- [ ] Verify token refresh/expiration

## 🔄 Integration Notes

- Backend APIs follow existing Vercel serverless function pattern
- Uses existing MongoDB connection
- Maintains portfolio styling consistency
- Compatible with current deploy workflow

## ⚠️ Breaking Changes
None. This is a pure addition of admin functionality.

## 🎓 Future Enhancements

- [ ] Email notifications for new contacts
- [ ] Analytics with charts and trends
- [ ] Export contacts to CSV
- [ ] Project view counter
- [ ] Admin user management
- [ ] Audit logs for admin actions
- [ ] Two-factor authentication

## 📝 Notes

Default credentials should be changed immediately in production environment. Update the `.env` file with secure credentials and ensure `JWT_SECRET` is a strong, random string.

---

**Related Issues**: Improves portfolio with professional admin capabilities for dynamic content management.

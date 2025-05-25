# Spark Student Showcase - Dharma's Portfolio

A full-stack portfolio application featuring a modern React frontend with an Express.js backend API. This project showcases web development skills through a clean, responsive design and robust backend infrastructure.

## 🌟 Features

### Frontend
- **Responsive Design** - Mobile-first approach with smooth animations
- **Interactive UI** - Dynamic components with React hooks and context
- **Modern Styling** - CSS modules with custom animations and transitions
- **Contact Form** - Integrated contact form with validation
- **Project Showcase** - Dynamic project grid with filtering capabilities
- **Skills Section** - Interactive technology stack display
- **Social Integration** - Links to GitHub, LinkedIn, and other platforms

### Backend
- **RESTful API** - Express.js server with organized route structure
- **Contact Form Handler** - Email notifications with auto-reply functionality
- **Project Management** - API endpoints for project data
- **Security Features** - Rate limiting, CORS, input validation
- **Email Service** - Nodemailer integration for contact form submissions

## 🚀 Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **CSS Modules** - Scoped styling with animations
- **React Router** - Client-side routing
- **React Hook Form** - Form validation and handling
- **Framer Motion** - Smooth animations and transitions

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending service
- **express-validator** - Input validation and sanitization
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection

## 📁 Project Structure

```
spark-student-showcase/
├── frontend/                   # React application
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── ContactForm/
│   │   │   └── ProjectCard/
│   │   ├── pages/              # Page components
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Projects/
│   │   │   └── Contact/
│   │   ├── styles/             # CSS modules
│   │   ├── context/            # React context
│   │   ├── hooks/              # Custom hooks
│   │   ├── utils/              # Utility functions
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/                    # Express API server
│   ├── routes/                 # API routes
│   │   ├── contact.js
│   │   └── projects.js
│   ├── middleware/             # Custom middleware
│   ├── server.js               # Main server file
│   ├── package.json
│   ├── .env.example
│   └── README.md
└── README.md                   # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Clone Repository
```bash
git clone https://github.com/dharmaashok-sys/spark-student-showcase.git
cd spark-student-showcase
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
The frontend will run on `http://localhost:3000`

### Backend Setup
```bash
cd backend
npm install

# Copy environment variables
cp .env.example .env

# Configure your email settings in .env
npm run dev
```
The backend will run on `http://localhost:5000`

## ⚙️ Environment Configuration

### Backend Environment Variables
Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-specific-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

### Email Setup for Contact Form
1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password in your Google Account settings
3. Add your email credentials to the `.env` file

## 🔧 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
  ```json
  {
    "name": "Dharma",
    "email": "dharmaashok625@gmail.com",
    "message": "Hello, I'd like to connect!"
  }
  ```

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?featured=true` - Get featured projects only
- `GET /api/projects?limit=3` - Limit number of results
- `GET /api/projects/:id` - Get single project by ID
- `GET /api/projects/data/technologies` - Get all technologies used

### Health Check
- `GET /api/health` - API status check

## 🎨 Frontend Features

### Components
- **Responsive Navigation** - Mobile-friendly header with smooth transitions
- **Hero Section** - Eye-catching introduction with call-to-action
- **About Section** - Professional summary with skills showcase
- **Projects Grid** - Interactive project cards with filtering
- **Contact Form** - Validated form with success/error handling
- **Footer** - Social links and additional information

### Styling
- **CSS Modules** - Scoped styling to prevent conflicts
- **Custom Animations** - Smooth hover effects and transitions
- **Responsive Design** - Mobile-first approach with breakpoints
- **Theme System** - Consistent color palette and typography

## 🔒 Security Features

### Backend Security
- **Rate Limiting** - Prevents spam and abuse
- **Input Validation** - Sanitizes and validates all inputs
- **CORS Configuration** - Secure cross-origin requests
- **Helmet** - Sets various HTTP headers for security
- **Error Handling** - Comprehensive error management

### Frontend Security
- **Input Sanitization** - Client-side validation
- **XSS Protection** - Safe rendering of user content
- **Secure API Calls** - Proper error handling and validation

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend Deployment (Heroku/Railway)
```bash
cd backend
# Set environment variables on your hosting platform
# Deploy with your preferred method
```

### Environment Variables for Production
- Set `NODE_ENV=production`
- Update `FRONTEND_URL` to your deployed frontend URL
- Configure email credentials
- Set up any additional production-specific variables

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** - Full-featured experience with hover effects
- **Tablet** - Adapted layout with touch-friendly interactions
- **Mobile** - Optimized navigation and compact layouts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contact

**Sanjay**
- Portfolio: [https://github.com/dharmaashok/portfolio](https://github.com/dharmaashok/portfolio)
- GitHub: [dharmaashok-sys](https://github.com/dharmaashok/portfolio)

- Email: dharmaashok625@gmail.com

## 🙏 Acknowledgments

- React community for excellent documentation
- Express.js for the robust backend framework
- All open-source contributors whose packages made this project possible

---

⭐ Star this repository if you found it helpful!

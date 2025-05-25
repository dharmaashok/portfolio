# Portfolio Backend API

Express.js backend API for Dharma's portfolio website.

## Features

- Contact form handling with email notifications
- Project data API endpoints
- Rate limiting and security middleware
- Input validation and sanitization
- CORS configuration for frontend integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Configure your email settings in `.env`

4. Start development server:
```bash
npm run dev
```

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?featured=true` - Get featured projects only
- `GET /api/projects?limit=3` - Limit number of results
- `GET /api/projects/:id` - Get single project
- `GET /api/projects/data/technologies` - Get all technologies used

### Health
- `GET /api/health` - API health check

## Email Configuration

To enable contact form emails:

1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password
3. Add your email and app password to `.env`

## Production Deployment

Set `NODE_ENV=production` and configure appropriate CORS origins.

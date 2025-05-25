const express = require('express');
const router = express.Router();

// Mock project data - replace with database later
const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Builder",
    description: "A smart resume builder that uses AI to optimize content and formatting",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
    image: "/images/resume-builder.jpg",
    githubUrl: "https://github.com/dharmaashok625/portfolio",
    featured: true,
    createdAt: "2024-01-15"
  },

];

// Get all projects
router.get('/', (req, res) => {
  try {
    const { featured, limit } = req.query;
    
    let filteredProjects = [...projects];
    
    // Filter by featured if specified
    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(project => project.featured);
    }
    
    // Limit results if specified
    if (limit && !isNaN(parseInt(limit))) {
      filteredProjects = filteredProjects.slice(0, parseInt(limit));
    }
    
    // Sort by creation date (newest first)
    filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    res.json({
      success: true,
      count: filteredProjects.length,
      projects: filteredProjects
    });
  } catch (error) {
    console.error('Projects fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Get single project by ID
router.get('/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json({
      success: true,
      project
    });
  } catch (error) {
    console.error('Project fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// Get project technologies (for skills section)
router.get('/data/technologies', (req, res) => {
  try {
    const allTechnologies = projects.reduce((acc, project) => {
      project.technologies.forEach(tech => {
        if (!acc.includes(tech)) {
          acc.push(tech);
        }
      });
      return acc;
    }, []);
    
    res.json({
      success: true,
      technologies: allTechnologies.sort()
    });
  } catch (error) {
    console.error('Technologies fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch technologies' });
  }
});

module.exports = router;

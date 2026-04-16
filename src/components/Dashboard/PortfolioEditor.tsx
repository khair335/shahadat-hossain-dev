
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

// Mock initial data - from PortfolioSection.tsx
const initialPortfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution featuring product management, payment integration (Stripe), and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tags: ["Next.js", "React", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task board with real-time updates and team features. Used by small teams and startups!",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
];

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const PortfolioEditor = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null); // Store ID of project being edited

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [currentTags, setCurrentTags] = useState(''); // Comma-separated
  const [currentLiveUrl, setCurrentLiveUrl] = useState('');
  const [currentGithubUrl, setCurrentGithubUrl] = useState('');

  useEffect(() => {
    setProjects(initialPortfolioData);
  }, []);

  const resetForm = () => {
    setCurrentTitle('');
    setCurrentDescription('');
    setCurrentImage('');
    setCurrentTags('');
    setCurrentLiveUrl('');
    setCurrentGithubUrl('');
    setIsEditing(null);
  };

  const handleEdit = (project: Project) => {
    setIsEditing(project.id);
    setCurrentTitle(project.title);
    setCurrentDescription(project.description);
    setCurrentImage(project.image);
    setCurrentTags(project.tags.join(', '));
    setCurrentLiveUrl(project.liveUrl);
    setCurrentGithubUrl(project.githubUrl);
  };

  const handleDelete = (projectId: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== projectId);
      setProjects(updatedProjects);
      console.log('Deleting project (mock):', projectId, 'Updated projects:', updatedProjects);
      alert('Project deleted (mock)! Check console.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
      id: isEditing !== null ? isEditing : Date.now(), // Keep existing ID or generate new one
      title: currentTitle,
      description: currentDescription,
      image: currentImage,
      tags: currentTags.split(',').map(tag => tag.trim()).filter(tag => tag),
      liveUrl: currentLiveUrl,
      githubUrl: currentGithubUrl,
    };

    let updatedProjects;
    if (isEditing !== null) {
      updatedProjects = projects.map(p => p.id === isEditing ? projectData : p);
    } else {
      updatedProjects = [...projects, projectData];
    }
    setProjects(updatedProjects);
    console.log('Saving project (mock):', projectData, 'Updated projects:', updatedProjects);
    alert(`Project ${isEditing !== null ? 'updated' : 'added'} (mock)! Check console.`);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing !== null ? 'Edit Project' : 'Add New Project'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="projTitle">Title</Label>
              <Input id="projTitle" value={currentTitle} onChange={e => setCurrentTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="projDesc">Description</Label>
              <Textarea id="projDesc" value={currentDescription} onChange={e => setCurrentDescription(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="projImg">Image URL</Label>
              <Input id="projImg" type="url" value={currentImage} onChange={e => setCurrentImage(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="projTags">Tags (comma-separated)</Label>
              <Input id="projTags" value={currentTags} onChange={e => setCurrentTags(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="projLiveUrl">Live URL</Label>
              <Input id="projLiveUrl" type="url" value={currentLiveUrl} onChange={e => setCurrentLiveUrl(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="projGithubUrl">GitHub URL</Label>
              <Input id="projGithubUrl" type="url" value={currentGithubUrl} onChange={e => setCurrentGithubUrl(e.target.value)} />
            </div>
            <div className="flex space-x-2">
              <Button type="submit">{isEditing !== null ? 'Update Project' : 'Add Project'}</Button>
              {isEditing !== null && <Button type="button" variant="outline" onClick={resetForm}>Cancel Edit</Button>}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Projects</h3>
        {projects.length === 0 && <p>No projects yet.</p>}
        {projects.map(project => (
          <Card key={project.id} className="flex justify-between items-center p-4">
            <div>
              <h4 className="font-semibold">{project.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-md">{project.description}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleEdit(project)}>Edit</Button>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(project.id)}><X className="h-4 w-4" /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioEditor;


import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

// Mock initial data - from BlogSection.tsx
const initialBlogData = [
  { id: 1, title: "Why React Is Perfect For Modern Web Development", date: "June 2024", excerpt: "A quick look at why React has become the go-to for web apps...", url: "#" },
  { id: 2, title: "How to Choose Between Next.js and Create React App", date: "May 2024", excerpt: "Understand the best scenarios for using Next.js...", url: "#" },
];

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

const BlogEditor = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentExcerpt, setCurrentExcerpt] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setPosts(initialBlogData);
  }, []);

  const resetForm = () => {
    setCurrentTitle('');
    setCurrentDate('');
    setCurrentExcerpt('');
    setCurrentUrl('');
    setIsEditing(null);
  };

  const handleEdit = (post: BlogPost) => {
    setIsEditing(post.id);
    setCurrentTitle(post.title);
    setCurrentDate(post.date);
    setCurrentExcerpt(post.excerpt);
    setCurrentUrl(post.url);
  };

  const handleDelete = (postId: number) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const updatedPosts = posts.filter(p => p.id !== postId);
      setPosts(updatedPosts);
      console.log('Deleting blog post (mock):', postId, 'Updated posts:', updatedPosts);
      alert('Blog post deleted (mock)! Check console.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postData = {
      id: isEditing !== null ? isEditing : Date.now(),
      title: currentTitle,
      date: currentDate,
      excerpt: currentExcerpt,
      url: currentUrl,
    };

    let updatedPosts;
    if (isEditing !== null) {
      updatedPosts = posts.map(p => p.id === isEditing ? postData : p);
    } else {
      updatedPosts = [...posts, postData];
    }
    setPosts(updatedPosts);
    console.log('Saving blog post (mock):', postData, 'Updated posts:', updatedPosts);
    alert(`Blog post ${isEditing !== null ? 'updated' : 'added'} (mock)! Check console.`);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing !== null ? 'Edit Blog Post' : 'Add New Blog Post'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="blogTitle">Title</Label>
              <Input id="blogTitle" value={currentTitle} onChange={e => setCurrentTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="blogDate">Date</Label>
              <Input id="blogDate" value={currentDate} onChange={e => setCurrentDate(e.target.value)} placeholder="e.g., June 2024" required />
            </div>
            <div>
              <Label htmlFor="blogExcerpt">Excerpt</Label>
              <Textarea id="blogExcerpt" value={currentExcerpt} onChange={e => setCurrentExcerpt(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="blogUrl">URL</Label>
              <Input id="blogUrl" type="url" value={currentUrl} onChange={e => setCurrentUrl(e.target.value)} required />
            </div>
            <div className="flex space-x-2">
              <Button type="submit">{isEditing !== null ? 'Update Post' : 'Add Post'}</Button>
              {isEditing !== null && <Button type="button" variant="outline" onClick={resetForm}>Cancel Edit</Button>}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Blog Posts</h3>
        {posts.length === 0 && <p>No blog posts yet.</p>}
        {posts.map(post => (
          <Card key={post.id} className="flex justify-between items-center p-4">
            <div>
              <h4 className="font-semibold">{post.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>Edit</Button>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}><X className="h-4 w-4" /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogEditor;

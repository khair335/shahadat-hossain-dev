
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // For taglines

// Mock initial data - in a real app, this would come from Supabase
const initialHeroData = {
  mainText: "Shahadat Hossain",
  taglines: ["React Developer", "Web Designer", "Problem Solver"],
  profileImageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
};

const HeroContentEditor = () => {
  const [mainText, setMainText] = useState('');
  const [taglines, setTaglines] = useState<string[]>([]);
  const [taglinesInput, setTaglinesInput] = useState(''); // For textarea editing
  const [profileImageUrl, setProfileImageUrl] = useState('');

  useEffect(() => {
    // Simulate fetching data
    setMainText(initialHeroData.mainText);
    setTaglines(initialHeroData.taglines);
    setTaglinesInput(initialHeroData.taglines.join('\n'));
    setProfileImageUrl(initialHeroData.profileImageUrl);
  }, []);

  const handleSave = () => {
    const updatedTaglines = taglinesInput.split('\n').map(t => t.trim()).filter(t => t);
    const updatedData = {
      mainText,
      taglines: updatedTaglines,
      profileImageUrl,
    };
    console.log('Saving Hero Section Data:', updatedData);
    // Here, you would typically call a Supabase function to save the data
    alert('Hero content saved! (Check console for data). Backend saving needs Supabase integration.');
  };

  const handleDelete = () => {
    console.log('Deleting Hero Section Data. This action is usually irreversible.');
    // Here, you would call a Supabase function to delete/reset the data
    // For now, we can reset to initial mock data or clear fields
    setMainText(initialHeroData.mainText);
    setTaglines(initialHeroData.taglines);
    setTaglinesInput(initialHeroData.taglines.join('\n'));
    setProfileImageUrl(initialHeroData.profileImageUrl);
    alert('Hero content delete action triggered! (Check console). Backend deletion needs Supabase integration.');
  };


  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
      <div>
        <Label htmlFor="mainText" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Main Heading Text
        </Label>
        <Input
          id="mainText"
          type="text"
          value={mainText}
          onChange={(e) => setMainText(e.target.value)}
          className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="e.g., Your Name"
        />
      </div>
      <div>
        <Label htmlFor="taglines" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Taglines (one per line)
        </Label>
        <Textarea
          id="taglines"
          value={taglinesInput}
          onChange={(e) => setTaglinesInput(e.target.value)}
          rows={3}
          className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="e.g., React Developer&#x0a;Web Designer"
        />
      </div>
      <div>
        <Label htmlFor="profileImageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Profile Image URL
        </Label>
        <Input
          id="profileImageUrl"
          type="url"
          value={profileImageUrl}
          onChange={(e) => setProfileImageUrl(e.target.value)}
          className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="https://example.com/your-image.jpg"
        />
      </div>
      <div className="flex space-x-4">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
          Save Changes
        </Button>
        <Button type="button" onClick={handleDelete} variant="destructive">
          Delete Content (Reset)
        </Button>
      </div>
    </form>
  );
};

export default HeroContentEditor;

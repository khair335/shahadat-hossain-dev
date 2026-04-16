
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

// Mock initial data - from TimelineSection.tsx (simplified icon to string name)
const initialTimelineData = [
  { id: 1, year: "2021-2024", iconName: "Briefcase", title: "Freelancer & Agency Collaborator", desc: "Built over 40 live sites for startups and agencies as a full-stack React/Next.js developer." },
  { id: 2, year: "2020", iconName: "Award", title: "Certified in JavaScript/React", desc: "Completed multiple advanced courses and got certified in JavaScript, React, and WordPress dev." },
];

interface TimelineItem {
  id: number;
  year: string;
  iconName: string;
  title: string;
  desc: string;
}

const TimelineEditor = () => {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);

  const [currentYear, setCurrentYear] = useState('');
  const [currentIconName, setCurrentIconName] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDesc, setCurrentDesc] = useState('');

  useEffect(() => {
    setTimelineItems(initialTimelineData);
  }, []);

  const resetForm = () => {
    setCurrentYear('');
    setCurrentIconName('');
    setCurrentTitle('');
    setCurrentDesc('');
    setIsEditing(null);
  };

  const handleEdit = (item: TimelineItem) => {
    setIsEditing(item.id);
    setCurrentYear(item.year);
    setCurrentIconName(item.iconName);
    setCurrentTitle(item.title);
    setCurrentDesc(item.desc);
  };

  const handleDelete = (itemId: number) => {
    if (window.confirm('Are you sure you want to delete this timeline item?')) {
      const updatedItems = timelineItems.filter(item => item.id !== itemId);
      setTimelineItems(updatedItems);
      console.log('Deleting timeline item (mock):', itemId, 'Updated items:', updatedItems);
      alert('Timeline item deleted (mock)! Check console.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itemData = {
      id: isEditing !== null ? isEditing : Date.now(),
      year: currentYear,
      iconName: currentIconName,
      title: currentTitle,
      desc: currentDesc,
    };

    let updatedItems;
    if (isEditing !== null) {
      updatedItems = timelineItems.map(item => item.id === isEditing ? itemData : item);
    } else {
      updatedItems = [...timelineItems, itemData];
    }
    setTimelineItems(updatedItems);
    console.log('Saving timeline item (mock):', itemData, 'Updated items:', updatedItems);
    alert(`Timeline item ${isEditing !== null ? 'updated' : 'added'} (mock)! Check console.`);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing !== null ? 'Edit Timeline Item' : 'Add New Timeline Item'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="timelineYear">Year/Range</Label>
              <Input id="timelineYear" value={currentYear} onChange={e => setCurrentYear(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="timelineIcon">Icon Name (Lucide)</Label>
              <Input id="timelineIcon" value={currentIconName} onChange={e => setCurrentIconName(e.target.value)} placeholder="e.g., Briefcase" required />
            </div>
            <div>
              <Label htmlFor="timelineTitle">Title</Label>
              <Input id="timelineTitle" value={currentTitle} onChange={e => setCurrentTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="timelineDesc">Description</Label>
              <Textarea id="timelineDesc" value={currentDesc} onChange={e => setCurrentDesc(e.target.value)} required />
            </div>
            <div className="flex space-x-2">
              <Button type="submit">{isEditing !== null ? 'Update Item' : 'Add Item'}</Button>
              {isEditing !== null && <Button type="button" variant="outline" onClick={resetForm}>Cancel Edit</Button>}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Timeline Items</h3>
        {timelineItems.length === 0 && <p>No timeline items yet.</p>}
        {timelineItems.map(item => (
          <Card key={item.id} className="flex justify-between items-center p-4">
            <div>
              <h4 className="font-semibold">{item.title} ({item.year})</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-md">{item.desc}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>Edit</Button>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}><X className="h-4 w-4" /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TimelineEditor;

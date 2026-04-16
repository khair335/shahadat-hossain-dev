
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

// Mock initial data - from ServicesSection.tsx (simplified icon to string name)
const initialServicesData = [
  { id: 1, iconName: "Code2", title: "Custom Web Apps", desc: "High-performance React/Next.js apps tailored for your business goals." },
  { id: 2, iconName: "MonitorSmartphone", title: "Responsive Design", desc: "Mobile-first and visually stunning layouts for every screen size." },
  { id: 3, iconName: "Brush", title: "UI/UX Consulting", desc: "Modern interfaces, delightful interactions, and strong accessibility." },
];

interface Service {
  id: number;
  iconName: string;
  title: string;
  desc: string;
}

const ServicesEditor = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);

  const [currentIconName, setCurrentIconName] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDesc, setCurrentDesc] = useState('');

  useEffect(() => {
    setServices(initialServicesData);
  }, []);

  const resetForm = () => {
    setCurrentIconName('');
    setCurrentTitle('');
    setCurrentDesc('');
    setIsEditing(null);
  };

  const handleEdit = (service: Service) => {
    setIsEditing(service.id);
    setCurrentIconName(service.iconName);
    setCurrentTitle(service.title);
    setCurrentDesc(service.desc);
  };

  const handleDelete = (serviceId: number) => {
     if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter(s => s.id !== serviceId);
      setServices(updatedServices);
      console.log('Deleting service (mock):', serviceId, 'Updated services:', updatedServices);
      alert('Service deleted (mock)! Check console.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceData = {
      id: isEditing !== null ? isEditing : Date.now(),
      iconName: currentIconName,
      title: currentTitle,
      desc: currentDesc,
    };

    let updatedServices;
    if (isEditing !== null) {
      updatedServices = services.map(s => s.id === isEditing ? serviceData : s);
    } else {
      updatedServices = [...services, serviceData];
    }
    setServices(updatedServices);
    console.log('Saving service (mock):', serviceData, 'Updated services:', updatedServices);
    alert(`Service ${isEditing !== null ? 'updated' : 'added'} (mock)! Check console.`);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing !== null ? 'Edit Service' : 'Add New Service'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="serviceIcon">Icon Name (Lucide)</Label>
              <Input id="serviceIcon" value={currentIconName} onChange={e => setCurrentIconName(e.target.value)} placeholder="e.g., Code2" required />
            </div>
            <div>
              <Label htmlFor="serviceTitle">Title</Label>
              <Input id="serviceTitle" value={currentTitle} onChange={e => setCurrentTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="serviceDesc">Description</Label>
              <Textarea id="serviceDesc" value={currentDesc} onChange={e => setCurrentDesc(e.target.value)} required />
            </div>
            <div className="flex space-x-2">
              <Button type="submit">{isEditing !== null ? 'Update Service' : 'Add Service'}</Button>
              {isEditing !== null && <Button type="button" variant="outline" onClick={resetForm}>Cancel Edit</Button>}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Services</h3>
        {services.length === 0 && <p>No services yet.</p>}
        {services.map(service => (
          <Card key={service.id} className="flex justify-between items-center p-4">
            <div>
              <h4 className="font-semibold">{service.title} (Icon: {service.iconName})</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-md">{service.desc}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleEdit(service)}>Edit</Button>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(service.id)}><X className="h-4 w-4" /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesEditor;

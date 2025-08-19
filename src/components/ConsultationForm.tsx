import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bestTime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section id="consultation-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
              <p className="text-gray-600">We'll call you to confirm your consultation.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation-form" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Claim Your Free Consultation
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Take the first step to a confident new you—fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="bestTime">Best Time to Call</Label>
                <Select onValueChange={(value) => handleInputChange('bestTime', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-white py-3 text-lg font-semibold"
              >
                Claim My Free Consultation
              </Button>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Data handled per GDPR.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConsultationForm;
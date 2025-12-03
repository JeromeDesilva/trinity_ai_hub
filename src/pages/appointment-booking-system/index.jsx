import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import ConsultationTypes from './components/ConsultationTypes';
import CalendarScheduler from './components/CalendarScheduler';
import SuccessStories from './components/SuccessStories';
import CTASection from './components/CTASection';

const AppointmentBookingSystem = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setShowCalendar(true);
    // Scroll to calendar section
    setTimeout(() => {
      document?.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Book Your Growth Strategy Session | Trinity Creative Services</title>
        <meta name="description" content="Schedule a free consultation with Trinity's growth experts. Get actionable strategies for market acquisition, scaling, and AI implementation tailored for startups." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <HeroSection onBookNow={() => document?.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })} />
        
        <div id="services-section">
          <ConsultationTypes 
            onServiceSelect={handleServiceSelect}
            selectedService={selectedService}
          />
        </div>

        {showCalendar && (
          <div id="calendar-section" className="scroll-mt-20">
            <CalendarScheduler selectedService={selectedService} />
          </div>
        )}

        <SuccessStories />
        <CTASection />
      </div>
    </>
  );
};

export default AppointmentBookingSystem;
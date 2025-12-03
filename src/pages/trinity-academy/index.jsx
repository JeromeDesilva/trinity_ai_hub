import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillAssessment from './components/SkillAssessment';
import CourseCatalog from './components/CourseCatalog';
import LearningPaths from './components/LearningPaths';
import CertificationPrograms from './components/CertificationPrograms';
import InstructorShowcase from './components/InstructorShowcase';
import CommunitySection from './components/CommunitySection';
import SuccessStories from './components/SuccessStories';
import CTASection from './components/CTASection';

const TrinityAcademy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <HeroSection />
        <SkillAssessment />
        <CourseCatalog />
        <LearningPaths />
        <CertificationPrograms />
        <InstructorShowcase />
        <CommunitySection />
        <SuccessStories />
        <CTASection />
      </main>
    </div>
  );
};

export default TrinityAcademy;
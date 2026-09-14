import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { Toast } from './components/Toast';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { CompetenciesSection } from './sections/CompetenciesSection';
import { TechnologiesSection } from './sections/TechnologiesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ValueBringSection } from './sections/ValueBringSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection onOpenCvModal={() => setIsCvModalOpen(true)} />
        <AboutSection />
        <CompetenciesSection />
        <TechnologiesSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ValueBringSection />
        <EducationSection />
        <ContactSection onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlay Alerts */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CVModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;

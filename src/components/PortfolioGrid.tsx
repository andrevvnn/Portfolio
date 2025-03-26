import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Modal } from './Modal';
export function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const projects = [{
    id: 1,
    title: 'Modern Minimalism',
    category: 'Residential',
    description: 'Contemporary residential design embracing minimalist principles.',
    images: [{
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Exterior View'
    }, {
      url: 'https://images.unsplash.com/photo-1600573472591-ee6c8e695481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Interior Living Space'
    }, {
      url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Kitchen Area'
    }]
  }, {
    id: 2,
    title: 'Urban Heights',
    category: 'Commercial',
    description: 'Mixed-use skyscraper pushing the boundaries of vertical design.',
    images: [{
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Building Exterior'
    }, {
      url: 'https://images.unsplash.com/photo-1600607687126-8a3414349a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Lobby'
    }, {
      url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Office Space'
    }]
  }, {
    id: 3,
    title: 'Cultural Center',
    category: 'Public Space',
    description: 'A community hub celebrating local arts and culture.',
    images: [{
      url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Main Entrance'
    }, {
      url: 'https://images.unsplash.com/photo-1600566752447-e4869471dbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Exhibition Hall'
    }, {
      url: 'https://images.unsplash.com/photo-1600566752734-31bb71f358ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      caption: 'Amphitheater'
    }]
  }];
  const handleNext = () => {
    if (selectedProject === null) return;
    const maxImages = projects[selectedProject].images.length;
    setSelectedImageIndex(prev => (prev + 1) % maxImages);
  };
  const handlePrevious = () => {
    if (selectedProject === null) return;
    const maxImages = projects[selectedProject].images.length;
    setSelectedImageIndex(prev => (prev - 1 + maxImages) % maxImages);
  };
  const handleOpenModal = (projectIndex: number, imageIndex: number = 0) => {
    setSelectedProject(projectIndex);
    setSelectedImageIndex(imageIndex);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };
  return <section id="portfolio" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our portfolio of innovative architectural designs and urban
            solutions. Each project represents our commitment to excellence in
            form and function.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, projectIndex) => <ProjectCard key={project.id} title={project.title} category={project.category} description={project.description} images={project.images} onImageClick={imageIndex => handleOpenModal(projectIndex, imageIndex)} />)}
        </div>
        <Modal isOpen={selectedProject !== null} onClose={handleCloseModal} currentImage={selectedProject !== null ? {
        ...projects[selectedProject].images[selectedImageIndex],
        title: `${projects[selectedProject].title} - ${projects[selectedProject].images[selectedImageIndex].caption}`
      } : null} onPrevious={handlePrevious} onNext={handleNext} hasPrevious={selectedProject !== null && projects[selectedProject].images.length > 1} hasNext={selectedProject !== null && projects[selectedProject].images.length > 1} totalImages={selectedProject !== null ? projects[selectedProject].images.length : 0} currentImageIndex={selectedImageIndex} />
      </div>
    </section>;
}
// pages/Dashboard.js

import React from 'react';

const Sidebar = () => {
  return (
    <aside className='bg-gray-400 text-white  w-1/5 h-screen p-4'>
      {/* Sidebar content */}
      <ul className='space-y-4'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </aside>
  );
};

const ProjectCard = ({ title, description, icon }) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md mb-4 '>
      <div className='flex items-center'>
        <span className='text-2xl mr-2'>{icon}</span>
        <h3 className='text-lg font-semibold'>{title}</h3>
      </div>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className='bg-blue-950 p-4 shadow-lg'>
      <div className='container mx-auto'>
        <h1 className='text-white text-xl font-semibold'>My Dashboard</h1>
      </div>
    </nav>
  );
};

const Proj = () => {
  // Example project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Mobile Video',
      icon: '📱',
    },
    {
      title: 'Project 1',
      description: 'Mobile Video',
      icon: '📱',
    },
    {
      title: 'Project 1',
      description: 'Mobile Video',
      icon: '📱',
    },
    {
      title: 'Project 1',
      description: 'Mobile Video',
      icon: '📱',
    },
    // Add more project data here
  ];

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <main className='flex-1 p-4'>
          <h1 className='text-2xl font-semibold mb-4'>Recent Projects</h1>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Proj;

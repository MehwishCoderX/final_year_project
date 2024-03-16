// pages/index.js
'use client'
import React, { useState } from 'react';
// import ModalForm from '../components/ModalForm';
import ModalForm from './ModalForm';

export default function Create() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex">
      {/* Left side (empty) */}
      <div className="w-5/6 h-screen bg-blue-200"></div>

      {/* Right side (modal button) */}
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-semibold mb-4">House Details</h1>
        <button
          onClick={handleModalOpen}
          className="bg-blue-950 text-white px-4 py-2 rounded"
        >
          Enter Your Parameters
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// components/ModalForm.js
import React, { useState } from 'react';

const ModalForm = ({ onClose }) => {
  const [rooms, setRooms] = useState(0);
  const [washrooms, setWashrooms] = useState(0);
  const [totalArea, setTotalArea] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    // ...
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 flex item-center justify-end bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg  w-1/3">
        <h2 className="text-xl font-semibold mb-4">House Details</h2>
        <form onSubmit={handleSubmit}  className=" ">
        <label>
            DesignId:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setWashRooms(e.target.value)}
              className="w-full border p-2"
            />
          </label>
          <label>
            UserId:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setWashRooms(e.target.value)}
              className="w-full border p-2"
            />
          </label>
        <label>
            Total Space:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setWashRooms(e.target.value)}
              className="w-full border p-2"
            />
          </label>
          <label>
            Number of Rooms:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full border p-2"
            />
          </label>
          <label>
            Number of washrooms:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setWashRooms(e.target.value)}
              className="w-full border p-2"
            />
          </label>
          <label>
            Kitchen Room:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setWashRooms(e.target.value)}
              className="w-full border p-2"
            />
          </label>
          <label>
            Dining Room:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setWashRooms(e.target.value)}
              className="w-full border p-2"
            />
          </label>
          
          {/* Similar inputs for washrooms and total area */}
          {/* ... */}
          <button
            type="submit"
            className="bg-blue-950 text-white px-4 py-2 mt-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;

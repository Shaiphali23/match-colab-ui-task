import React from "react";
import { Modal, Button } from "flowbite-react";
import { HiX } from "react-icons/hi";

const ProfileModal = ({ isOpen, onClose, profile }) => {
  if (!isOpen || !profile) return null;

  return (
    <Modal show={isOpen} onClose={onClose} size="lg" popup>
      {/* Close Icon */}
      <div className="absolute top-3 right-3 z-50">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-red-500 text-2xl focus:outline-none cursor-pointer"
        >
          <HiX />
        </button>
      </div>

      <div className="flex flex-col items-center text-center space-y-4 p-4">
        {/* Large Avatar */}
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-44 h-44 rounded-full mx-auto border-4 border-[#BD8A71]"
        />
        <h3 className="text-lg font-semibold">{profile.name}</h3>
        <p className="text-sm text-gray-600">{profile.description}</p>
      </div>
    </Modal>
  );
};

export default ProfileModal;

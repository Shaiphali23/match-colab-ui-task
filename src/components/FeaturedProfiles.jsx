import React from "react";
import profiles from "../ProfileData";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

const FeaturedProfiles = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
    setOpenModal(true);
  };

  return (
    <section className="mb-8 bg-[#FFFCF1] p-4">
      <h2 className="text-3xl font-bold text-center my-8">Featured Profiles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <ProfileCard
            profile={profile}
            key={index}
            onClick={() => handleCardClick(profile)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProfile && (
        <ProfileModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          profile={selectedProfile}
        />
      )}
    </section>
  );
};

export default FeaturedProfiles;

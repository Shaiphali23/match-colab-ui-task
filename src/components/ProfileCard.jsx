import React from "react";
import { Card } from "flowbite-react";

const ProfileCard = ({ profile, onClick }) => {
  return (
    <>
      <Card
        onClick={onClick}
        className="cursor-pointer max-w-sm mx-auto border border-[#BD8A71] shadow-sm bg-[#F6E7D3] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {/* Avatar + Name + Age */}
        <div className="flex flex-col items-center bg-white shadow-md p-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="rounded-full w-24 h-24 mx-auto mt-4 border-2 border-[#BD8A71]"
          />
          <div className="text-center mt-4">
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              {profile.name}
            </h5>
            <h4>{profile.age}</h4>
          </div>
        </div>

        {/* Hobbies */}
        <div className="mt-4 bg-white p-4 shadow-md">
          <h4 className="text-md font-bold text-gray-700 mb-2">Hobbies</h4>
          {profile.hobbies.slice(0, 2).map((hobby, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-2 mb-2">
              <p className="text-sm font-medium text-gray-800">
                {hobby.title}:
              </p>
              <p className="text-sm text-gray-600">{hobby.description}</p>
            </div>
          ))}
        </div>

        {/* Location & Description */}
        <div className="mt-4 space-y-1 bg-white p-4 shadow-md">
          <p className="text-sm font-semibold text-gray-700">
            {profile.location}
          </p>
          <p className="text-sm text-gray-600">{profile.tagline}</p>
          <p className="text-sm text-gray-600">{profile.description}</p>
        </div>
      </Card>
    </>
  );
};

export default ProfileCard;

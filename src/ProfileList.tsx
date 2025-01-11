import React, { useEffect, useState } from "react";
import { getProfiles } from "./api/profileApi";
import { Profile } from "./types/Profile";

const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await getProfiles();
        setProfiles(data);
      } catch (err) {
        setError("Failed to fetch profiles");
      }
    };

    fetchProfiles();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} - {profile.email} ({profile.role})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;

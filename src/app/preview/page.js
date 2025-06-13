'use client';

import { useEffect, useState } from 'react';

export default function PreviewPage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('tinyBioProfile');
    if (data) {
      setProfile(JSON.parse(data));
    }
  }, []);

  if (!profile) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <p className="text-gray-600">No profile found. Go back and create one.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 bg-white">
      <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">{profile.bio}</p>

      <div className="space-y-4 w-full max-w-xs">
        {profile.links.filter(Boolean).map((link, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            {link}
          </a>
        ))}
      </div>
    </main>
  );
}

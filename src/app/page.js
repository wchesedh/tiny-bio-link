'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [links, setLinks] = useState(['', '', '']);

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleSubmit = () => {
    const profile = { name, bio, links };
    localStorage.setItem('tinyBioProfile', JSON.stringify(profile));
    alert('Profile saved! Scroll down to preview 👇');
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🧬 Tiny Bio Link</h1>

      <div className="w-full max-w-md space-y-4 bg-white p-6 rounded-2xl shadow-md">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-xl px-4 py-2"
        />

        <textarea
          placeholder="Short bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border rounded-xl px-4 py-2"
        />

        {links.map((link, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Link #${i + 1}`}
            value={link}
            onChange={(e) => handleLinkChange(i, e.target.value)}
            className="w-full border rounded-xl px-4 py-2"
          />
        ))}

<div className="space-y-2">
  <button
    onClick={handleSubmit}
    className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
  >
    Save Profile
  </button>

  <a
    href="/preview"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-center w-full py-2 border border-black text-black rounded-xl hover:bg-gray-100 transition"
  >
    View My Page
  </a>
</div>

      </div>

      {/* Preview Section */}
      <div className="mt-10 w-full max-w-md bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-bold">{name || 'Your Name'}</h2>
        <p className="text-gray-600 mb-4">{bio || 'Your short bio...'}</p>
        <div className="space-y-2">
          {links.filter((l) => l).map((link, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

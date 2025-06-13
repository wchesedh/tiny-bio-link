import { supabase } from '@/lib/supabase';

export default async function UserPage({ params }) {
  const { username } = params;

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !profile) {
    return <div className="p-8 text-center text-red-600">User not found.</div>;
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
      <p className="text-gray-600 mb-6">@{profile.username}</p>
      <p className="mb-6">{profile.bio}</p>

      {Array.isArray(profile.links) && profile.links.length > 0 && (
        <div className="space-y-2">
          {profile.links.map((link, i) => (
            <div
              key={i}
              className="block bg-gray-200 text-black p-3 rounded"
            >
              {link}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

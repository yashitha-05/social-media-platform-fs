import React, { useMemo, useState } from "react";

const groups = [
  { name: "React Developers", url: "https://www.instagram.com/explore/tags/reactjs/" },
  { name: "Spring Boot", url: "https://twitter.com/hashtag/springboot" },
  { name: "Open Source", url: "https://twitter.com/hashtag/opensource" },
  { name: "Web Dev", url: "https://www.instagram.com/explore/tags/webdevelopment/" },
];

const Communities = () => {
  const [topic, setTopic] = useState("");
  const q = useMemo(()=> topic.trim(), [topic]);
  const twitterUrl = q ? `https://twitter.com/search?q=${encodeURIComponent(q)}&src=typed_query&f=live` : "";
  const instagramUrl = q ? `https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent(q)}` : `https://www.instagram.com/explore/tags/${encodeURIComponent(q)}/`;
  return (
    <div className="py-6">
      <h1 className="text-xl font-bold mb-4">Communities</h1>
      <div className="mb-6 flex items-center gap-3">
        <input
          value={topic}
          onChange={(e)=>setTopic(e.target.value)}
          placeholder="Search topics (e.g., React, fitness)"
          className="border rounded px-3 py-2 w-full max-w-md"
        />
        <div className="flex gap-2">
          <a className={`px-3 py-2 rounded text-sm ${q? 'bg-sky-600 text-white':'bg-gray-200 text-gray-400 pointer-events-none'}`} href={(q && twitterUrl) || '#'} target="_blank" rel="noreferrer">Twitter</a>
          <a className={`px-3 py-2 rounded text-sm ${q? 'bg-pink-600 text-white':'bg-gray-200 text-gray-400 pointer-events-none'}`} href={(q && instagramUrl) || '#'} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <div className="space-y-4">
        {groups.map((g) => (
          <div key={g.url} className="p-4 border rounded border-gray-700/20">
            <div className="font-semibold">{g.name}</div>
            <a className="text-sky-500 hover:underline" href={g.url} target="_blank" rel="noreferrer">
              Visit group
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communities;



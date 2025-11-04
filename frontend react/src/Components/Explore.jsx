import React, { useMemo, useState } from "react";

const trending = [
  { tag: "#technology", links: [
    { label: "Twitter", url: "https://twitter.com/hashtag/technology" },
    { label: "Instagram", url: "https://www.instagram.com/explore/tags/technology/" },
  ]},
  { tag: "#sports", links: [
    { label: "Twitter", url: "https://twitter.com/hashtag/sports" },
    { label: "Instagram", url: "https://www.instagram.com/explore/tags/sports/" },
  ]},
  { tag: "#news", links: [
    { label: "Twitter", url: "https://twitter.com/hashtag/news" },
    { label: "Instagram", url: "https://www.instagram.com/explore/tags/news/" },
  ]},
  { tag: "#music", links: [
    { label: "Twitter", url: "https://twitter.com/hashtag/music" },
    { label: "Instagram", url: "https://www.instagram.com/explore/tags/music/" },
  ]},
  { tag: "#movies", links: [
    { label: "Twitter", url: "https://twitter.com/hashtag/movies" },
    { label: "Instagram", url: "https://www.instagram.com/explore/tags/movies/" },
  ]},
];

const Explore = () => {
  const [query, setQuery] = useState("");
  const hashtag = useMemo(() => {
    const q = query.trim().replace(/^#+/, "");
    return q;
  }, [query]);
  const twitterUrl = hashtag ? `https://twitter.com/search?q=%23${encodeURIComponent(hashtag)}&src=typed_query&f=live` : "";
  const instagramUrl = hashtag ? `https://www.instagram.com/explore/tags/${encodeURIComponent(hashtag)}/` : "";
  return (
    <div className="py-6">
      <h1 className="text-xl font-bold mb-4">Explore</h1>
      <div className="mb-6 flex items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="#Search hashtags (e.g., #webdev)"
          className="border rounded px-3 py-2 w-full max-w-md bg-white text-gray-900 placeholder-gray-500 border-gray-300 dark:bg-[#0F1720] dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600"
        />
        <div className="flex gap-2">
          <a
            className={`px-3 py-2 rounded text-sm ${hashtag ? 'bg-sky-600 text-white' : 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-400 pointer-events-none'}`}
            href={twitterUrl || '#'}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className={`px-3 py-2 rounded text-sm ${hashtag ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-400 pointer-events-none'}`}
            href={instagramUrl || '#'}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="space-y-4">
        {trending.map((item) => (
          <div key={item.tag} className="p-4 rounded border border-gray-700/20 bg-white dark:bg-[#0F1720] dark:border-gray-700">
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.tag}</div>
            <div className="mt-2 space-x-4">
              {item.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="text-sky-500 hover:underline dark:text-sky-300">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;



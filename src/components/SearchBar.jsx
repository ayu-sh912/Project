import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { locations } from '../data/locations';
import { CATEGORIES } from '../utils/categories';

export default function SearchBar({ onSelect, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = query.trim().length >= 1
    ? locations.filter(loc =>
        loc.name.toLowerCase().includes(query.toLowerCase()) ||
        loc.description.toLowerCase().includes(query.toLowerCase()) ||
        (loc.building || '').toLowerCase().includes(query.toLowerCase()) ||
        CATEGORIES[loc.category]?.label.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  return (
    <div className="absolute top-14 left-0 right-0 z-40 bg-white shadow-xl border-b border-gray-200">
      {/* Input row */}
      <div className="flex items-center gap-2 px-4 py-3">
        <Search size={18} className="text-gray-400 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search venues, buildings, food…"
          className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none"
        />
        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
          <X size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <ul className="border-t border-gray-100 max-h-72 overflow-y-auto">
          {results.map(loc => {
            const cat = CATEGORIES[loc.category];
            return (
              <li key={loc.id}>
                <button
                  onClick={() => { onSelect(loc); onClose(); }}
                  className="w-full flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left"
                >
                  <span className="text-xl mt-0.5">{cat?.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{loc.name}</p>
                    <p className="text-xs text-gray-500">{cat?.label}{loc.building ? ` · ${loc.building}` : ''}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {query.trim().length >= 1 && results.length === 0 && (
        <div className="px-4 py-5 text-sm text-gray-400 text-center">
          No results for "<span className="font-medium text-gray-600">{query}</span>"
        </div>
      )}
    </div>
  );
}

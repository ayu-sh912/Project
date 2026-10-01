import { MapPin, Navigation, Clock } from 'lucide-react';
import { locations } from '../data/locations';
import { CATEGORIES } from '../utils/categories';

export default function SidePanel({ activeCategory, selectedLocation, onSelect, searchQuery }) {
  const filtered = locations.filter(loc => {
    const matchesCategory = activeCategory ? loc.category === activeCategory : true;
    const matchesSearch = searchQuery
      ? loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const handleDirections = (loc, e) => {
    e.stopPropagation();
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <aside className="hidden lg:flex flex-col w-80 shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {filtered.length} location{filtered.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <ul className="divide-y divide-gray-50">
        {filtered.map(loc => {
          const cat = CATEGORIES[loc.category];
          const isSelected = selectedLocation?.id === loc.id;
          return (
            <li key={loc.id}>
              <button
                onClick={() => onSelect(loc)}
                className={`w-full flex items-start gap-3 px-4 py-3.5 text-left transition-colors hover:bg-blue-50 ${
                  isSelected ? 'bg-blue-50 border-l-4 border-brand-700' : ''
                }`}
              >
                <span className="text-xl shrink-0 mt-0.5">{cat?.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-800 truncate">{loc.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{cat?.label}</p>
                  {loc.time && (
                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      <Clock size={10} /> {loc.time}
                    </p>
                  )}
                </div>
                <button
                  onClick={e => handleDirections(loc, e)}
                  title="Get Directions"
                  className="shrink-0 p-1.5 rounded-full hover:bg-brand-100 text-brand-600 transition-colors mt-0.5"
                >
                  <Navigation size={14} />
                </button>
              </button>
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400 gap-2">
          <MapPin size={28} />
          <p className="text-sm">No locations found</p>
        </div>
      )}
    </aside>
  );
}

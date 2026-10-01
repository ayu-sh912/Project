import { X, MapPin, Clock, Navigation } from 'lucide-react';
import { CATEGORIES } from '../utils/categories';

export default function LocationCard({ location, onClose }) {
  if (!location) return null;

  const cat = CATEGORIES[location.category];

  const handleDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-t-2xl shadow-2xl border-t border-gray-100 animate-slide-up">
      {/* Drag handle */}
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-10 h-1 rounded-full bg-gray-200" />
      </div>

      <div className="px-5 pb-6 pt-2">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-start gap-3">
            <span className="text-3xl mt-0.5">{cat?.emoji}</span>
            <div>
              <h2 className="font-bold text-gray-900 text-base leading-tight">{location.name}</h2>
              {location.building && (
                <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                  <MapPin size={11} /> {location.building}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors shrink-0"
            aria-label="Close"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>

        {/* Category badge */}
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cat?.bgClass} ${cat?.textClass} ${cat?.borderClass}`}>
          {cat?.label}
        </span>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{location.description}</p>

        {/* Time */}
        {location.time && (
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
            <Clock size={13} className="text-brand-600" />
            <span>{location.time}</span>
          </div>
        )}

        {/* Directions button */}
        <button
          onClick={handleDirections}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
        >
          <Navigation size={16} />
          Get Directions
        </button>
      </div>
    </div>
  );
}

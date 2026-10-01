import {
  Mic, Building2, DoorOpen, ParkingCircle, Utensils,
  Droplets, HelpCircle, HeartPulse, MoreHorizontal, Grid3X3,
} from 'lucide-react';
import { CATEGORIES, FILTER_ORDER } from '../utils/categories';

const CAT_ICONS = {
  venue:     Mic,
  building:  Building2,
  gate:      DoorOpen,
  parking:   ParkingCircle,
  food:      Utensils,
  washroom:  Droplets,
  help:      HelpCircle,
  emergency: HeartPulse,
  other:     MoreHorizontal,
};

export default function CategoryFilter({ activeCategory, onSelect }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto px-3 py-2.5 bg-white border-b border-gray-100 scrollbar-hide shrink-0">
      {/* ALL pill */}
      <button
        onClick={() => onSelect(null)}
        className={`shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
          activeCategory === null
            ? 'bg-[#0f172a] text-white shadow-sm'
            : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
        }`}
      >
        All
      </button>

      {FILTER_ORDER.map(key => {
        const cat = CATEGORIES[key];
        const Icon = CAT_ICONS[key];
        const isActive = activeCategory === key;

        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`shrink-0 flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full text-xs font-semibold border transition-all whitespace-nowrap ${
              isActive
                ? 'bg-[#0f172a] text-white border-transparent shadow-sm'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
            }`}
          >
            {/* Colored icon circle */}
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
              style={{
                backgroundColor: isActive ? 'rgba(255,255,255,0.18)' : cat.markerColor,
              }}
            >
              {Icon && (
                <Icon
                  size={10}
                  className="text-white"
                  strokeWidth={2.5}
                />
              )}
            </span>
            {cat.filterLabel}
          </button>
        );
      })}
    </div>
  );
}

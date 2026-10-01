import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, X } from 'lucide-react';
import { CATEGORIES } from '../utils/categories';

export default function Navbar({ searchQuery, onSearchChange, searchResults, onSelectLocation }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFocus = () => setDropdownOpen(true);
  const handleBlur = () => setTimeout(() => setDropdownOpen(false), 180);
  const handleClear = () => { onSearchChange(''); setDropdownOpen(false); };

  const showDropdown = dropdownOpen && searchQuery.trim().length >= 1 && searchResults.length > 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-[900] bg-[#0f172a] shadow-xl">
      {/* ── Main row ──────────────────────────────────────────────── */}
      <div className="flex items-center h-14 px-4 gap-3 max-w-screen-xl mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="bg-blue-600 rounded-full p-1.5 flex items-center justify-center">
            <MapPin size={14} className="text-white" fill="white" />
          </div>
          <div>
            <p className="font-bold text-white text-sm leading-none tracking-tight">GLA University</p>
            <p className="text-blue-300 text-[10px] leading-none mt-0.5">Event Campus Map</p>
          </div>
        </div>

        {/* Desktop search bar — inline in navbar */}
        <div className="hidden md:flex flex-1 max-w-md mx-auto items-center gap-2.5 bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 focus-within:bg-white/15 focus-within:border-white/30 transition-all">
          <Search size={14} className="text-white/50 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search for a venue, building, or facility..."
            className="flex-1 bg-transparent text-white text-sm placeholder-white/40 outline-none"
          />
          {searchQuery && (
            <button onMouseDown={handleClear} className="text-white/40 hover:text-white/80 transition-colors">
              <X size={13} />
            </button>
          )}
        </div>

        {/* Mobile: spacer to push filter icon right */}
        <div className="flex-1 md:hidden" />

        {/* Filter / settings icon */}
        <button
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/10"
          aria-label="Filter options"
        >
          <SlidersHorizontal size={16} />
        </button>
      </div>

      {/* ── Mobile search row ─────────────────────────────────────── */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 focus-within:bg-white/15 focus-within:border-white/30 transition-all">
          <Search size={14} className="text-white/50 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search for a venue, building, or facility..."
            className="flex-1 bg-transparent text-white text-sm placeholder-white/40 outline-none"
          />
          {searchQuery && (
            <button onMouseDown={handleClear} className="text-white/40 hover:text-white/80 transition-colors">
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* ── Search results dropdown ───────────────────────────────── */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 max-h-72 overflow-y-auto">
          {searchResults.map(loc => {
            const cat = CATEGORIES[loc.category];
            return (
              <button
                key={loc.id}
                onMouseDown={() => { onSelectLocation(loc); handleClear(); }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 text-left border-b border-gray-50 last:border-0 transition-colors"
              >
                <div
                  className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-lg"
                  style={{ backgroundColor: cat?.markerColor + '18', border: `2px solid ${cat?.markerColor}30` }}
                >
                  {cat?.emoji}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{loc.name}</p>
                  <p className="text-xs text-gray-400">
                    {cat?.filterLabel}{loc.building ? ` · ${loc.building}` : ''}
                  </p>
                </div>
                <MapPin size={13} className="text-gray-300 ml-auto shrink-0" />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}

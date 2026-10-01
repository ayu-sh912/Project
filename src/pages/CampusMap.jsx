import { useState } from 'react';
import Map from '../components/Map';
import CategoryFilter from '../components/CategoryFilter';
import LocationCard from '../components/LocationCard';
import SearchBar from '../components/SearchBar';
import SidePanel from '../components/SidePanel';
import Navbar from '../components/Navbar';
import { locations } from '../data/locations';

export default function CampusMap() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [focusLocation, setFocusLocation] = useState(null);

  const filteredLocations = activeCategory
    ? locations.filter(loc => loc.category === activeCategory)
    : locations;

  const handleSelect = (loc) => {
    setSelectedLocation(loc);
    setFocusLocation(loc);
  };

  const handleSearchSelect = (loc) => {
    handleSelect(loc);
    setSearchOpen(false);
  };

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setSelectedLocation(null);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top navbar */}
      <Navbar
        onSearchToggle={() => setSearchOpen(prev => !prev)}
        searchOpen={searchOpen}
      />

      {/* Search dropdown overlay */}
      {searchOpen && (
        <SearchBar
          onSelect={handleSearchSelect}
          onClose={() => setSearchOpen(false)}
        />
      )}

      {/* Category filter — sits directly below the fixed navbar */}
      <div className="mt-14 shrink-0">
        <CategoryFilter
          activeCategory={activeCategory}
          onSelect={handleCategorySelect}
        />
      </div>

      {/* Body: sidebar + map */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <SidePanel
          activeCategory={activeCategory}
          selectedLocation={selectedLocation}
          onSelect={handleSelect}
          searchQuery=""
        />

        {/* Map area */}
        <div className="relative flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 relative">
            <Map
              filteredLocations={filteredLocations}
              onSelect={handleSelect}
              focusLocation={focusLocation}
            />
          </div>

          {/* Mobile bottom sheet */}
          {selectedLocation && (
            <div className="lg:hidden absolute bottom-0 left-0 right-0 z-30">
              <LocationCard
                location={selectedLocation}
                onClose={() => setSelectedLocation(null)}
              />
            </div>
          )}

          {/* Desktop floating card */}
          {selectedLocation && (
            <div className="hidden lg:block absolute bottom-6 right-6 z-30 w-80">
              <LocationCard
                location={selectedLocation}
                onClose={() => setSelectedLocation(null)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

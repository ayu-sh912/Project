import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { CATEGORIES } from '../utils/categories';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon paths broken by Vite bundling
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

/** Create a circular SVG icon for each category */
function createIcon(category) {
  const cat = CATEGORIES[category] || CATEGORIES.other;
  const color = cat.markerColor;
  const emoji = cat.emoji;

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44">
      <filter id="shadow" x="-30%" y="-20%" width="160%" height="160%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.3)"/>
      </filter>
      <path d="M18 0C8 0 0 8 0 18c0 14 18 26 18 26s18-12 18-26C36 8 28 0 18 0z"
            fill="${color}" filter="url(#shadow)"/>
      <circle cx="18" cy="17" r="12" fill="white" opacity="0.95"/>
      <text x="18" y="22" text-anchor="middle" font-size="13">${emoji}</text>
    </svg>`;

  return L.divIcon({
    html: svgString,
    className: '',
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -44],
  });
}

/** Fly map to a location when `focusLocation` changes */
function MapController({ focusLocation }) {
  const map = useMap();
  useEffect(() => {
    if (focusLocation) {
      map.flyTo([focusLocation.lat, focusLocation.lng], 18, { duration: 1 });
    }
  }, [focusLocation, map]);
  return null;
}

export default function Map({ filteredLocations, onSelect, focusLocation }) {
  const GLA_CENTER = [27.4924, 77.6737];

  return (
    <MapContainer
      center={GLA_CENTER}
      zoom={16}
      className="w-full h-full"
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredLocations.map(loc => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={createIcon(loc.category)}
          eventHandlers={{ click: () => onSelect(loc) }}
        >
          <Popup>
            <div className="text-sm font-semibold">{loc.name}</div>
            <div className="text-xs text-gray-500">{CATEGORIES[loc.category]?.label}</div>
          </Popup>
        </Marker>
      ))}

      <MapController focusLocation={focusLocation} />
    </MapContainer>
  );
}

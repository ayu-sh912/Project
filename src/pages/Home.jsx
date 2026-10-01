import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { CATEGORIES, QUICK_ACCESS } from '../utils/categories';

export default function Home() {
  const navigate = useNavigate();

  const goToMap = (category = null) => {
    navigate('/map', { state: { category } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-700 via-brand-800 to-blue-900 flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-8 text-center">
        {/* Logo */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 shadow-lg border border-white/20">
          <img src="/logo.svg" alt="GLA Logo" className="h-16 w-16 rounded-xl" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          GLA Campus Map
        </h1>
        <p className="mt-2 text-blue-200 text-base sm:text-lg font-medium">
          GLA University · Mathura
        </p>
        <p className="mt-3 text-blue-100/80 text-sm max-w-xs leading-relaxed">
          Find venues, parking, food stalls, and facilities — all in one place.
        </p>

        {/* CTA */}
        <button
          onClick={() => goToMap()}
          className="mt-8 flex items-center gap-2 bg-white text-brand-700 font-bold text-sm px-8 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
        >
          <MapPin size={18} />
          Explore Campus
        </button>
      </div>

      {/* Quick Access Grid */}
      <div className="bg-white rounded-t-3xl shadow-xl px-5 py-6 pb-10">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {QUICK_ACCESS.map(key => {
            const cat = CATEGORIES[key];
            return (
              <button
                key={key}
                onClick={() => goToMap(key)}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all hover:scale-105 hover:shadow-md ${cat.bgClass} ${cat.borderClass}`}
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className={`text-[11px] font-semibold text-center leading-tight ${cat.textClass}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Tap a category or explore the full campus map above.
        </p>
      </div>
    </div>
  );
}

/**
 * GLA University Mathura — Campus Locations
 * Center coordinates: 27.4924° N, 77.6737° E
 *
 * To add a new location:
 *   1. Copy any object below
 *   2. Give it a unique `id`
 *   3. Set the correct lat/lng (right-click on Google Maps → "What's here?")
 *   4. Save — it will appear on the map automatically
 */

export const locations = [
  // ─── ENTRY / GATES ──────────────────────────────────────────────
  {
    id: 'main-gate',
    name: 'Main Gate',
    category: 'gate',
    description: 'Primary entrance from NH-2 (Delhi–Agra Highway). Security check required.',
    building: null,
    lat: 27.4908,
    lng: 77.6727,
  },
  {
    id: 'gate-2',
    name: 'Gate 2 (North)',
    category: 'gate',
    description: 'Secondary entrance on the north side of campus. Open during event hours.',
    building: null,
    lat: 27.4948,
    lng: 77.6742,
  },

  // ─── EVENT VENUES ───────────────────────────────────────────────
  {
    id: 'auditorium',
    name: 'GLA Auditorium',
    category: 'venue',
    description: 'Main auditorium — 2,000-seat capacity. Hosts the opening ceremony and keynote sessions.',
    building: 'Central Block',
    time: '10:00 AM – 6:00 PM',
    lat: 27.4942,
    lng: 77.6730,
  },
  {
    id: 'seminar-hall-ab1',
    name: 'AB1 Seminar Hall',
    category: 'venue',
    description: 'Conference hall inside AB1 building. Hosts technical paper presentations.',
    building: 'AB1 Building',
    time: '9:00 AM – 5:00 PM',
    lat: 27.4930,
    lng: 77.6740,
  },
  {
    id: 'ibm-lab',
    name: 'IBM Innovation Lab',
    category: 'venue',
    description: 'Hands-on workshop venue. Hackathon and coding rounds held here.',
    building: 'AB2 Building',
    time: '10:00 AM – 8:00 PM',
    lat: 27.4933,
    lng: 77.6748,
  },
  {
    id: 'open-air-theatre',
    name: 'Open Air Theatre',
    category: 'venue',
    description: 'Outdoor amphitheatre for cultural performances and entertainment events.',
    building: null,
    time: '5:00 PM – 10:00 PM',
    lat: 27.4938,
    lng: 77.6722,
  },

  // ─── BUILDINGS ──────────────────────────────────────────────────
  {
    id: 'ab1',
    name: 'AB1 Building',
    category: 'building',
    description: 'School of Engineering & Technology. Ground to 5th floor.',
    building: null,
    lat: 27.4931,
    lng: 77.6738,
  },
  {
    id: 'ab2',
    name: 'AB2 Building',
    category: 'building',
    description: 'School of Computing. Contains IBM Lab, smart classrooms, and project labs.',
    building: null,
    lat: 27.4934,
    lng: 77.6750,
  },
  {
    id: 'ab3',
    name: 'AB3 Building',
    category: 'building',
    description: 'School of Business (MBA). Case study rooms and conference halls.',
    building: null,
    lat: 27.4928,
    lng: 77.6755,
  },
  {
    id: 'ab4',
    name: 'AB4 Building',
    category: 'building',
    description: 'School of Pharmacy & Law. Labs and moot court on upper floors.',
    building: null,
    lat: 27.4936,
    lng: 77.6760,
  },
  {
    id: 'library',
    name: 'Central Library',
    category: 'building',
    description: 'Multi-floor library with over 60,000 volumes. Digital resource center available.',
    building: null,
    lat: 27.4939,
    lng: 77.6738,
  },
  {
    id: 'admin-block',
    name: 'Admin Block',
    category: 'building',
    description: 'Administrative offices, registration desk for event participants.',
    building: null,
    lat: 27.4924,
    lng: 77.6737,
  },

  // ─── PARKING ────────────────────────────────────────────────────
  {
    id: 'parking-main',
    name: 'Main Parking',
    category: 'parking',
    description: 'Large visitor parking near the main gate. Bikes and cars allowed.',
    building: null,
    lat: 27.4912,
    lng: 77.6728,
  },
  {
    id: 'parking-north',
    name: 'North Parking',
    category: 'parking',
    description: 'Additional parking near Gate 2. Cars only.',
    building: null,
    lat: 27.4946,
    lng: 77.6746,
  },

  // ─── FOOD ───────────────────────────────────────────────────────
  {
    id: 'food-court',
    name: 'Main Food Court',
    category: 'food',
    description: 'Central food court with multiple stalls. North Indian, South Indian, Chinese, and snacks.',
    building: null,
    time: '8:00 AM – 10:00 PM',
    lat: 27.4925,
    lng: 77.6730,
  },
  {
    id: 'cafe-ab2',
    name: 'AB2 Café',
    category: 'food',
    description: 'Quick bites, tea, coffee, and sandwiches inside AB2 ground floor.',
    building: 'AB2 Building',
    time: '8:00 AM – 8:00 PM',
    lat: 27.4933,
    lng: 77.6752,
  },
  {
    id: 'stalls-ground',
    name: 'Event Food Stalls',
    category: 'food',
    description: 'Special stalls set up for the event near the open air theatre. Street food and beverages.',
    building: null,
    time: '12:00 PM – 10:00 PM',
    lat: 27.4937,
    lng: 77.6718,
  },

  // ─── WASHROOMS ──────────────────────────────────────────────────
  {
    id: 'wc-main-gate',
    name: 'Washroom — Main Gate',
    category: 'washroom',
    description: 'Male and female washrooms near the main gate area.',
    building: null,
    lat: 27.4914,
    lng: 77.6733,
  },
  {
    id: 'wc-auditorium',
    name: 'Washroom — Auditorium Block',
    category: 'washroom',
    description: 'Clean washrooms on the ground floor of the auditorium block.',
    building: 'Central Block',
    lat: 27.4940,
    lng: 77.6726,
  },
  {
    id: 'wc-ab2',
    name: 'Washroom — AB2',
    category: 'washroom',
    description: 'Washrooms on every floor of AB2. Ground floor is most accessible.',
    building: 'AB2 Building',
    lat: 27.4932,
    lng: 77.6745,
  },

  // ─── HELP DESK ──────────────────────────────────────────────────
  {
    id: 'help-main',
    name: 'Help Desk — Main Gate',
    category: 'help',
    description: 'Event information, ID verification, campus map distribution. Look for the blue tent.',
    building: null,
    time: '8:00 AM – 9:00 PM',
    lat: 27.4910,
    lng: 77.6730,
  },
  {
    id: 'help-auditorium',
    name: 'Help Desk — Auditorium',
    category: 'help',
    description: 'Session schedules, speaker info, and event passes. Outside the auditorium entrance.',
    building: 'Central Block',
    time: '9:00 AM – 6:00 PM',
    lat: 27.4943,
    lng: 77.6727,
  },
  {
    id: 'registration',
    name: 'Registration Desk',
    category: 'other',
    description: 'Collect your event kit, badge, and welcome package here. Bring your registration ID.',
    building: 'Admin Block',
    time: '8:00 AM – 12:00 PM',
    lat: 27.4922,
    lng: 77.6735,
  },

  // ─── EMERGENCY / MEDICAL ────────────────────────────────────────
  {
    id: 'medical',
    name: 'Medical Center',
    category: 'emergency',
    description: 'On-campus medical facility with doctors and first-aid. Open 24 hours during event.',
    building: null,
    time: '24 Hours',
    lat: 27.4918,
    lng: 77.6735,
  },

  // ─── OTHER ──────────────────────────────────────────────────────
  {
    id: 'sports-complex',
    name: 'Sports Complex',
    category: 'other',
    description: 'Indoor stadium and sports grounds. Esports and cricket events scheduled here.',
    building: null,
    time: '9:00 AM – 7:00 PM',
    lat: 27.4915,
    lng: 77.6758,
  },
  {
    id: 'photo-booth',
    name: 'Photo Booth',
    category: 'other',
    description: 'Official event photo booth. Get your memorable event photo printed on the spot!',
    building: null,
    time: '10:00 AM – 8:00 PM',
    lat: 27.4927,
    lng: 77.6725,
  },
];

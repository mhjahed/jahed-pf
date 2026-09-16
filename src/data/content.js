//  SINGLE SOURCE OF TRUTH — edit everything here.


export const PROFILE = {
  name: 'MOKSOOD HOSSEN JAHED',
  shortName: 'MH JAHED',
  handle: 'mhjahed',
  host: 'jahed.dev',
  role: 'Back-End Developer',
  location: 'Sylhet, Bangladesh',
  coords: '24.8949° N · 91.8687° E',
  tz: 'UTC+06:00',
  email: 'mhjahed@proton.me',
  github: 'https://github.com/mhjahed',
  linkedin: 'https://www.linkedin.com/in/mhjahed',
  blog: 'https://personal-blog.jah267478.workers.dev/',
  resume: '/resume.pdf',
  tagline:
    'Back-end & full-stack developer specializing in Python (Django, DRF) and React JS. I build scalable, secure applications with clean architecture — before developing a technology, I assume it ends.',
}

export const ROLES = [
  'Back-End Developer',
  'Django + DRF Specialist',
  'React JS Builder',
  'Software Engineer (KOTLIN)',
  'Cyber Security Enthusiast',
]

export const BOOT_LINES = [
  'JAHED-OS v6.2.1 — boot sequence initiated',
  '> checking memory ........................... [ok]',
  '> mounting /dev/portfolio ................... [ok]',
  '> loading modules  react@18 · three · motion  [ok]',
  '> uplink github.com/mhjahed ................. [200]',
  '> compiling shaders ......................... [ok]',
  '> phosphor calibration  #39d353 ............. [ok]',
  '> interface online — welcome, guest',
]

export const SECTIONS = [
  { num: '01', path: 'about', title: 'ABOUT' },
  { num: '02', path: 'skills', title: 'SKILLS' },
  { num: '03', path: 'projects', title: 'PROJECTS' },
  { num: '04', path: 'experience', title: 'EXPERIENCE' },
  { num: '05', path: 'education', title: 'EDUCATION' },
  { num: '06', path: 'contact', title: 'CONTACT' },
]

export const STATS = [
  { n: 11, suffix: '+', label: 'projects shipped' },
  { n: 9, suffix: '', label: 'certifications' },
  { n: 4, suffix: '+', label: 'years writing code' },
  { n: 18, suffix: '', label: 'technologies used' },
]

export const ABOUT_JSON = {
  name: 'Moksood Hossen Jahed',
  role: 'Back-End Developer',
  base: 'Sylhet, Bangladesh (UTC+6)',
  stack: ['python', 'django', 'drf', 'react', 'postgresql'],
  focus: ['scalable backends', 'real-time apps', 'security'],
  currently: 'back-end developer intern',
  principle: "before developing a technology, assume it's ending",
  open_to: ['freelance', 'internships', 'collaboration'],
}

export const SKILL_GROUPS = [
  {
    key: 'backend',
    label: 'backend',
    rows: [
      { name: 'Python', pct: 100 },
      { name: 'Django · DRF', pct: 94 },
      { name: 'REST API design', pct: 85 },
      { name: 'Node.js', pct: 68 },
      { name: 'FastAPI', pct: 94 },
    ],
  },
  {
    key: 'frontend',
    label: 'frontend',
    rows: [
      { name: 'HTML5 · CSS3 · Bootstrap 5', pct: 92 },
      { name: 'JavaScript (ES6+)', pct: 100 },
      { name: 'React JS', pct: 82 },
      { name: 'Responsive UI / Flex + Grid', pct: 88 },
      { name: 'TypeScript', pct: 64 },
    ],
  },
  {
    key: 'databases',
    label: 'databases',
    rows: [
      { name: 'SQLite', pct: 85 },
      { name: 'PostgreSQL', pct: 82 },
      { name: 'MySQL', pct: 100 },
      { name: 'MongoDB', pct: 78 },
      { name: 'Redis (caching basics)', pct: 76 },
    ],
  },
  {
    key: 'toolkit',
    label: 'toolkit',
    rows: [
      { name: 'Git · GitHub', pct: 88 },
      { name: 'Linux / CLI', pct: 86 },
      { name: 'Deployment (Vercel · Netlify · CF)', pct: 74 },
      { name: 'Docker', pct: 60 },
      { name: 'Nginx basics', pct: 78 },
    ],
  },
]

export const SKILL_CHIPS = [
  'C', 'C++ (basics)', 'C# (basics)', 'Swift · iOS basics',
  'Digital Marketing', 'Product Management', 'Figma', 'Photoshop',
]

// status: production | staging | demo      stack: django | react
export const PROJECTS = [
  {
    id: 'car-rental',
    title: 'Car Rental System',
    file: 'car-rental.git',
    stack: 'django',
    tags: ['django', 'drf', 'postgresql'],
    desc: 'Dual-role platform: dealers manage fleets, customers book and pay. Full booking lifecycle with payment records.',
    repo: 'https://github.com/mhjahed/cardealer',
    demo: null,
    status: 'production',
    featured: true,
  },
  {
    id: 'inventory',
    title: 'Inventory Tracker',
    file: 'inventory-tracker.git',
    stack: 'django',
    tags: ['django', 'javascript', 'sqlite'],
    desc: 'Products, customers, sales lines and live profit math — built for small shops that hate spreadsheets.',
    repo: 'https://github.com/mhjahed/inventory-app',
    demo: null,
    status: 'production',
    featured: true,
  },
  {
    id: 'finance',
    title: 'Financial Tracker',
    file: 'finance-tracker.git',
    stack: 'react',
    tags: ['react', 'exchange-api', 'localstorage'],
    desc: 'Income / expense ledgers with a currency selector wired to a live exchange-rate API.',
    repo: 'https://github.com/mhjahed/financial-tracker',
    demo: null,
    status: 'production',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    file: 'storefront.git',
    stack: 'django',
    tags: ['django', 'admin', 'websockets'],
    desc: 'Storefront with rich admin dashboards and a real-time order pipeline from cart to fulfillment.',
    repo: 'https://github.com/mhjahed',
    demo: null,
    status: 'staging',
    featured: false,
  },
  {
    id: 'carwash',
    title: 'Car Wash Management',
    file: 'carwash-suite.git',
    stack: 'django',
    tags: ['django', 'bootstrap'],
    desc: 'Manager + employee dashboards for bookings, shifts and daily tallies.',
    repo: 'https://github.com/mhjahed/carwashmanagement',
    demo: null,
    status: 'production',
    featured: false,
  },
  {
    id: 'salon',
    title: 'Salon Appointment App',
    file: 'salon-booker.git',
    stack: 'django',
    tags: ['django', 'html', 'css', 'js'],
    desc: 'Service booking flow with an admin panel for staff, slots and walk-ins.',
    repo: 'https://github.com/mhjahed/salone-app',
    demo: null,
    status: 'production',
    featured: false,
  },
  {
    id: 'edtech',
    title: 'Educational Platform',
    file: 'edu-platform.git',
    stack: 'django',
    tags: ['django', 'quizzes', 'reports'],
    desc: 'Quiz modules with scoring, attempts history and per-student report cards.',
    repo: 'https://github.com/mhjahed/edu-platform',
    demo: null,
    status: 'production',
    featured: false,
  },
  {
    id: 'scheduler',
    title: 'Appointment Scheduler',
    file: 'scheduler-api.git',
    stack: 'django',
    tags: ['django', 'drf', 'smtp'],
    desc: 'REST-scheduling API with e-mail notifications on book / reschedule / cancel.',
    repo: 'https://github.com/mhjahed/emedical',
    demo: null,
    status: 'demo',
    featured: false,
  },
  {
    id: 'weather',
    title: 'Weather App',
    file: 'weather-ui.git',
    stack: 'react',
    tags: ['react', 'openweathermap'],
    desc: 'City search against OpenWeatherMap with unit toggling and condition-coded UI.',
    repo: 'https://github.com/mhjahed/weather-app',
    demo: null,
    status: 'production',
    featured: false,
  },
  {
    id: 'blog',
    title: 'Personal Blog Platform',
    file: 'inkwell.git',
    stack: 'react',
    tags: ['react', 'vite', 'workers'],
    desc: 'Publishing platform for my security writing — search, admin panel, comments. Deployed at the edge.',
    repo: 'https://github.com/mhjahed/personal-blog',
    demo: 'https://personal-blog.jah267478.workers.dev/',
    status: 'production',
    featured: true,
  },
  {
    id: 'checklist',
    title: 'Checklist App',
    file: 'checklist.git',
    stack: 'react',
    tags: ['react', 'localstorage'],
    desc: 'Zero-backend task checklist with full local-storage persistence and filters.',
    repo: 'https://github.com/mhjahed/checklistapp',
    demo: null,
    status: 'demo',
    featured: false,
  },
  {
    id: 'tasklist',
    title: 'Tasklist / Chat Demo',
    file: 'realtime-demo.git',
    stack: 'react',
    tags: ['react', 'realtime-ui'],
    desc: 'Real-time-feeling task board + chat UI prototype. Front-end demo only.',
    repo: 'https://github.com/mhjahed/tasklist-app',
    demo: null,
    status: 'demo',
    featured: false,
  },
]

export const EXPERIENCE = [
  {
    id: 'exp-01',
    role: 'Back-End Developer Intern',
    org: 'IAA, USA',
    period: '2025 — present',
    log: [
      'building and hardening Django / DRF services in production',
      'shipped booking + payment modules used by real customers',
      'code review, migrations discipline, API documentation',
    ],
    current: true,
  },
  {
    id: 'exp-02',
    role: 'Area Manager Intern',
    org: 'Walmart (Forage), USA',
    period: 'March 2026 - May 2026',
    log: [
      'Optimized inbound/outbound fulfillment workflows to boost operational throughput and safety compliance',
      'Completed simulated supply chain modules focusing on inventory tracking, associate scheduling, and floor metrics',
      'Process mapping, data-driven bottleneck analysis, cross-functional team communication',
    ],
    current: false,
  },
  {
    id: 'exp-03',
    role: 'FrontEnd Engineer Intern',
    org: 'Skyscanner, Forage',
    period: 'April 2026 - May 2026',
    log: [
      'Building and hardening React / Next.js applications in production (or your specific stack like Vue/Svelte)',
      'Shipped checkout + UI components used by real customers',
      'Code review, state management discipline, API integration & component documentation',
    ],
    current: false,
  },
  {
    id: 'exp-04',
    role: 'Cybersecurity (Blue Team) Specialist Intern',
    org: 'Mastercard, Forage',
    period: 'January 2026 - February 2026',
    log: [
      'Monitoring and hardening SOC environments, threat surface controls, and defensive infrastructure',
      'Analyzed simulated security telemetry, incident alerts, and log artifacts to identify potential breaches',
      'Log analysis, SIEM rule tuning, incident response documentation & vulnerability reporting',
    ],
    current: false,
  },
  {
    id: 'exp-05',
    role: 'Ambassador',
    org: 'National STEAM Olympiad',
    period: 'September 2023 — May 2024',
    log: [
      'promoted STEAM education and mentor school students across the national program',
      'leadership & teamwork',
      'turned recurring issues into documented fixes of students',
    ],
    current: false,
  },
  {
    id: 'exp-06',
    role: 'IT Help Desk Technician',
    org: 'support operations',
    period: '2023 — 2024',
    log: [
      'triaged 40+ tickets weekly across hardware, OS and network',
      'imaging, account provisioning and escalation workflows',
      'turned recurring issues into documented fixes',
    ],
    current: false,
  },
  {
    id: 'exp-07',
    role: 'Computer Technician Assistant',
    org: 'repair & maintenance',
    period: '2022 — 2023',
    log: [
      'hardware diagnostics, component swaps, OS deployment',
      'preventive maintenance schedules for client machines',
    ],
    current: false,
  },
  {
    id: 'exp-07',
    role: 'Computer Lab Assistant',
    org: 'college computer lab',
    period: '2020 — 2022',
    log: [
      'kept a 30-seat lab alive: installs, updates, recoveries',
      'first line of help for students — where teaching the machine began',
    ],
    current: false,
  },
]

export const EDUCATION = [
  {
    id: 'sat',
    degree: 'Scholastic Assessment Test (SAT)',
    school: 'Marks: 740 in English & 800 in Maths',
    year: '2025',
    grade: 'TOTAL MARKS: 1540',
  },
  {
    id: 'ielts',
    degree: 'International English Language Testing System (IELTS)',
    school: 'British Council',
    year: '2025',
    grade: 'BAND 7.0',
  },
  {
    id: 'eca-1',
    degree: 'Netorking Basics',
    school: 'Cisco Networking Academy (NetCad)',
    year: '2026',
    grade: 'IN PROGRESS (BADGE)',
  },
  {
    id: 'eca-2',
    degree: 'Introduction to Cybersecurity',
    school: 'Cisco Networking Academy (NetCad)',
    year: '2026',
    grade: 'IN PROGRESS (BADGE)',
  },
  {
    id: 'eca-3',
    degree: 'Web Attacks Detection',
    school: 'Lets Defend',
    year: '2026',
    grade: 'IN PROGRESS (BADGE-INVESTIGATOR)',
  },
  {
    id: 'eca-4',
    degree: 'GATE SET GO - Computer Science Engineering/Data Analytics',
    school: 'GeekForGeeks',
    year: '2025',
    grade: 'CERTIFIED',
  },
  {
    id: 'eca-5',
    degree: 'Full Stack Web Development',
    school: 'SimpleLearn & The Code Camp',
    year: '2024',
    grade: 'CERTIFIED',
  },
  {
    id: 'eca-6',
    degree: 'Introduction to MySQL',
    school: 'SimpleLearn',
    year: '2024',
    grade: 'CERTIFIED',
  },
  {
    id: 'eca-7',
    degree: 'Pathway to Software Engineering',
    school: 'Bohubrihi',
    year: '2024',
    grade: 'CERTIFIED',
  },
  {
    id: 'eca-8',
    degree: 'Modern Java Script (ES-6)',
    school: 'Bohubrihi',
    year: '2023',
    grade: 'CERTIFIED',
  },
  {
    id: 'hsc',
    degree: 'HSC — Higher Secondary Certificate',
    school: 'Murari Chand College, Sylhet',
    year: '2025',
    grade: 'GPA 5.00 / 5.00',
  },
  {
    id: 'ssc',
    degree: 'SSC — Secondary School Certificate',
    school: 'Sylhet Cantonment Public School & College',
    year: '2023',
    grade: 'GPA 5.00 / 5.00',
  },
]

export const CERTS = [
  {
    group: 'web engineering',
    items: [
      'Full Stack Web Development',
      'HTML · CSS · Bootstrap',
      'Modern JavaScript (ES6+)',
    ],
  },
  {
    group: 'mobile & data',
    items: ['iOS Development Basics (Swift)', 'MySQL Database'],
  },
  {
    group: 'security & systems',
    items: [
      'Cyber Security Fundamentals',
      'Hardware & Software Troubleshooting',
      'Networking Workshop',
    ],
  },
]

export const TICKER_ITEMS = [
  'python', 'django', 'drf', 'react', 'javascript', 'postgresql', 'mongodb',
  'mysql', 'rest-api', 'websockets', 'bootstrap-5', 'linux', 'git', 'docker',
  'nginx', 'html5', 'css3', 'three.js',
]

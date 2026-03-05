export type TempInquiry = {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  website_type?: string;
  budget_range?: string;
  project_description?: string;
  timeline?: string;
  created_at: string;
};

export type TempProject = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  categories: string[];
  price?: string;
  demo_url?: string;
  features?: string[];
  created_at: string;
  updated_at: string;
};

let inquiryId = 1000;
let projectId = 1000;

const nowIso = () => new Date().toISOString();

export const tempStore = {
  inquiries: [] as TempInquiry[],
  projects: [] as TempProject[],

  ensureSeeded() {
    if (this.projects.length > 0) return;

    this.projects.push(
      {
        id: ++projectId,
        title: 'Online Examination System',
        description: 'Admin + student modules, question bank, timed exams, results and reports.',
        tech_stack: 'PHP + MySQL',
        categories: ['MCA', 'BSc CS', 'BTech CS', 'Web'],
        price: '₹3,999',
        demo_url: 'https://example.com/demo/exam',
        features: ['Admin dashboard', 'Question bank + categories', 'Timed exam flow', 'Auto-evaluation + results', 'Student login & history'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'AI Resume Screening',
        description: 'Upload resumes, parse skills, rank candidates, and export shortlist.',
        tech_stack: 'Python + FastAPI + ML',
        categories: ['AI/ML', 'MCA', 'BTech CS'],
        price: '₹6,999',
        demo_url: 'https://example.com/demo/resume',
        features: ['Resume parsing', 'Skill extraction', 'Ranking', 'Shortlist export'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'E-Commerce Web App',
        description: 'Product catalog, cart, checkout, admin panel and order tracking.',
        tech_stack: 'React + Node + MySQL',
        categories: ['Web', 'BTech CS'],
        price: '₹9,999',
        demo_url: 'https://example.com/demo/shop',
        features: ['Auth', 'Cart + checkout', 'Admin products', 'Orders'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Banking Management System',
        description: 'Account management, transactions, loan calculator, and admin dashboard.',
        tech_stack: 'Java + Swing + MySQL',
        categories: ['Java', 'BTech CS', 'MCA'],
        price: '₹4,499',
        demo_url: 'https://example.com/demo/banking',
        features: ['Account CRUD', 'Fund transfer', 'Loan EMI calculator', 'Transaction history', 'Admin panel'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Chat Application',
        description: 'Real-time messaging with rooms, online status, and file sharing.',
        tech_stack: 'Node.js + Socket.io + MongoDB',
        categories: ['Web', 'BTech CS', 'MCA'],
        price: '₹5,499',
        demo_url: 'https://example.com/demo/chat',
        features: ['Real-time chat', 'Rooms', 'Online status', 'File upload', 'Emoji support'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Weather Forecast App',
        description: 'Live weather data, 7-day forecast, location search, and alerts.',
        tech_stack: 'Python + Flask + OpenWeather API',
        categories: ['Python', 'Web', 'BTech CS'],
        price: '₹2,999',
        demo_url: 'https://example.com/demo/weather',
        features: ['Live weather', '7-day forecast', 'City search', 'Weather alerts', 'Responsive UI'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Android Task Manager',
        description: 'Task creation, categories, reminders, and cloud sync.',
        tech_stack: 'Android + Kotlin + Firebase',
        categories: ['Android', 'BTech CS', 'MCA'],
        price: '₹6,499',
        demo_url: 'https://example.com/demo/taskapp',
        features: ['Task CRUD', 'Categories', 'Reminders', 'Cloud sync', 'Dark mode'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Face Recognition Attendance',
        description: 'Automatic attendance using face detection with admin dashboard.',
        tech_stack: 'Python + OpenCV + Flask',
        categories: ['AI/ML', 'Python', 'BTech CS'],
        price: '₹7,999',
        demo_url: 'https://example.com/demo/attendance',
        features: ['Face detection', 'Auto attendance', 'Reports', 'Admin panel', 'Export to Excel'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Hospital Management System',
        description: 'Patient records, appointments, billing, and doctor schedules.',
        tech_stack: 'Java + JSP + MySQL',
        categories: ['Java', 'BTech CS', 'MCA', 'Web'],
        price: '₹8,999',
        demo_url: 'https://example.com/demo/hospital',
        features: ['Patient registration', 'Appointments', 'Billing', 'Doctor schedule', 'Reports'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Stock Price Predictor',
        description: 'ML-based stock price prediction with historical data visualization.',
        tech_stack: 'Python + TensorFlow + Flask',
        categories: ['AI/ML', 'Python', 'BTech CS'],
        price: '₹9,499',
        demo_url: 'https://example.com/demo/stocks',
        features: ['Price prediction', 'Historical charts', 'Technical indicators', 'Model accuracy'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Library Management System',
        description: 'Book catalog, issue/return, fine calculation, and member management.',
        tech_stack: 'C# + .NET + SQL Server',
        categories: ['BTech CS', 'MCA', 'Web'],
        price: '₹5,999',
        demo_url: 'https://example.com/demo/library',
        features: ['Book catalog', 'Issue/return', 'Fine calculation', 'Member management', 'Reports'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Instagram Clone',
        description: 'Photo sharing, likes, comments, stories, and user profiles.',
        tech_stack: 'React + Node + Express + MongoDB',
        categories: ['Web', 'BTech CS', 'MCA'],
        price: '₹10,999',
        demo_url: 'https://example.com/demo/instagram',
        features: ['Photo upload', 'Likes/comments', 'Stories', 'User profiles', 'Hashtags'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'CRM System',
        description: 'Customer management, lead tracking, sales pipeline, and analytics dashboard.',
        tech_stack: 'Angular + Spring Boot + MySQL',
        categories: ['Angular', 'Java', 'BTech CS', 'MCA'],
        price: '₹11,999',
        demo_url: 'https://example.com/demo/crm',
        features: ['Customer CRUD', 'Lead tracking', 'Sales pipeline', 'Analytics dashboard', 'Email integration'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'E-Learning Platform',
        description: 'Video courses, quizzes, progress tracking, and certificate generation.',
        tech_stack: 'Laravel + Vue.js + MySQL',
        categories: ['PHP', 'Laravel', 'Web', 'BTech CS'],
        price: '₹12,499',
        demo_url: 'https://example.com/demo/learning',
        features: ['Video lessons', 'Quizzes', 'Progress tracking', 'Certificates', 'Admin panel'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Blog Platform',
        description: 'Multi-author blog with categories, tags, comments, and SEO-friendly URLs.',
        tech_stack: 'Django + PostgreSQL + Celery',
        categories: ['Python', 'Django', 'Web', 'BTech CS'],
        price: '₹7,999',
        demo_url: 'https://example.com/demo/blog',
        features: ['Multi-author', 'Categories/tags', 'Comments', 'SEO URLs', 'Admin dashboard'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Job Portal',
        description: 'Job postings, applications, employer dashboard, and email notifications.',
        tech_stack: 'PHP + Laravel + MySQL',
        categories: ['PHP', 'Laravel', 'Web', 'BTech CS'],
        price: '₹8,999',
        demo_url: 'https://example.com/demo/jobs',
        features: ['Job CRUD', 'Applications', 'Employer dashboard', 'Email alerts', 'Resume upload'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Task Management System',
        description: 'Kanban board, drag-and-drop, team collaboration, and deadlines.',
        tech_stack: 'Angular + Spring Boot + PostgreSQL',
        categories: ['Angular', 'Java', 'Web', 'BTech CS'],
        price: '₹10,499',
        demo_url: 'https://example.com/demo/tasks',
        features: ['Kanban board', 'Drag & drop', 'Team collaboration', 'Deadlines', 'Notifications'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Social Network',
        description: 'User profiles, posts, likes, comments, friend requests, and chat.',
        tech_stack: 'Django + Django Channels + PostgreSQL',
        categories: ['Python', 'Django', 'Web', 'BTech CS'],
        price: '₹13,999',
        demo_url: 'https://example.com/demo/social',
        features: ['User profiles', 'Posts', 'Likes/comments', 'Friend requests', 'Real-time chat'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Inventory Management',
        description: 'Stock tracking, purchase orders, suppliers, and reporting.',
        tech_stack: 'Spring Boot + Angular + MySQL',
        categories: ['Java', 'Angular', 'BTech CS', 'MCA'],
        price: '₹9,999',
        demo_url: 'https://example.com/demo/inventory',
        features: ['Stock tracking', 'Purchase orders', 'Supplier management', 'Reports', 'Alerts'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'News Portal',
        description: 'News articles, categories, search, comments, and admin panel.',
        tech_stack: 'PHP + Laravel + MySQL',
        categories: ['PHP', 'Laravel', 'Web', 'BTech CS'],
        price: '₹6,499',
        demo_url: 'https://example.com/demo/news',
        features: ['News CRUD', 'Categories', 'Search', 'Comments', 'Admin panel'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Quiz Application',
        description: 'Timed quizzes, leaderboards, categories, and result analysis.',
        tech_stack: 'Django + SQLite + Bootstrap',
        categories: ['Python', 'Django', 'Web', 'BTech CS'],
        price: '₹5,999',
        demo_url: 'https://example.com/demo/quiz',
        features: ['Timed quizzes', 'Leaderboard', 'Categories', 'Result analysis', 'Admin panel'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Booking System',
        description: 'Appointment booking, calendar integration, reminders, and payments.',
        tech_stack: 'Angular + Spring Boot + MySQL',
        categories: ['Angular', 'Java', 'Web', 'BTech CS'],
        price: '₹11,499',
        demo_url: 'https://example.com/demo/booking',
        features: ['Appointment booking', 'Calendar', 'Reminders', 'Payment integration', 'Admin dashboard'],
        created_at: nowIso(),
        updated_at: nowIso(),
      },
      {
        id: ++projectId,
        title: 'Forum Discussion',
        description: 'Threaded discussions, user profiles, moderation, and search.',
        tech_stack: 'PHP + Laravel + MySQL',
        categories: ['PHP', 'Laravel', 'Web', 'BTech CS'],
        price: '₹7,499',
        demo_url: 'https://example.com/demo/forum',
        features: ['Threaded discussions', 'User profiles', 'Moderation', 'Search', 'Notifications'],
        created_at: nowIso(),
        updated_at: nowIso(),
      }
    );
  },

  listProjects(category?: string) {
    this.ensureSeeded();
    const list = category ? this.projects.filter((p) => p.categories.includes(category)) : this.projects;
    return list.slice().sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  },

  createProject(input: Omit<TempProject, 'id' | 'created_at' | 'updated_at'>) {
    const p: TempProject = {
      ...input,
      id: ++projectId,
      created_at: nowIso(),
      updated_at: nowIso(),
    };
    this.projects.unshift(p);
    return p;
  },

  listInquiries() {
    return this.inquiries.slice().sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  },

  createInquiry(input: Omit<TempInquiry, 'id' | 'created_at'>) {
    const i: TempInquiry = {
      ...input,
      id: ++inquiryId,
      created_at: nowIso(),
    };
    this.inquiries.unshift(i);
    return i;
  },
};

# UniQue WebCraft

A modern full-stack web application built with React, TypeScript, Node.js, and Express. Features a glassmorphism UI design with dark theme, perfect for showcasing web development services, college projects, and digital solutions.

## 🚀 Features

- **Frontend**: React 18 with TypeScript, Vite, React Router
- **Backend**: Node.js with Express, MySQL with in-memory fallback
- **UI/UX**: Glassmorphism design with dark theme
- **Pages**: Home, Services, Projects, Hire Us, Portfolio
- **Interactive**: Custom chatbot with lead capture
- **Animations**: Button bubble effects and smooth transitions
- **SEO**: Meta tags and structured data
- **Responsive**: Mobile-friendly design

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router DOM
- React Helmet Async
- CSS3 with CSS Variables

### Backend
- Node.js
- Express
- MySQL (with in-memory fallback)
- TypeScript
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn
- MySQL (optional, has in-memory fallback)

### Setup
1. Clone the repository
```bash
git clone <repository-url>
cd project
```

2. Install dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Environment setup
```bash
# In client directory
cd client
cp .env.example .env
# Edit .env with your values

# In server directory
cd ../server
cp .env.example .env
# Edit .env with your database credentials
```

4. Start development servers
```bash
# Start server (from server directory)
npm run dev

# Start client (from client directory)
npm run dev
```

## 🌐 Deployment

### Build for production
```bash
# Build client
cd client
npm run build

# The build will be in client/dist/
```

### Hostinger Deployment
1. Build the client as shown above
2. Upload the `client/dist` folder to Hostinger public_html
3. Deploy the server to Hostinger Node.js hosting
4. Configure environment variables
5. Update API base URL in client if needed

## 📁 Project Structure

```
project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   └── App.tsx        # Main App component
│   ├── public/            # Static assets
│   └── dist/              # Build output
├── server/                # Node.js backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── db.ts         # Database connection
│   │   └── index.ts      # Server entry
│   └── package.json
└── README.md
```

## 🎨 Features

- **Glassmorphism UI**: Modern glass-like design with blur effects
- **Dark Theme**: Easy on the eyes with high contrast
- **Interactive Elements**: Button animations and hover effects
- **Custom Chatbot**: Intelligent FAQ and lead capture
- **Project Showcase**: College projects with pricing and demos
- **Contact Forms**: Integrated contact and quote requests
- **SEO Optimized**: Meta tags and structured data
- **Responsive Design**: Works on all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: jd.jagannath.dash@gmail.com
- **WhatsApp**: +91 9777237126
- **Portfolio**: [Jagannath Dash (JD)](/portfolio)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with ❤️ by Jagannath Dash (JD)
- Inspired by modern web design trends
- Powered by React and Node.js ecosystem

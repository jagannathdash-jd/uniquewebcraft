import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import ChatbotWidget from './components/ChatbotWidget';
import Home from './pages/Home';
import Projects from './pages/Projects';
import HireUs from './pages/HireUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  useEffect(() => {
    // Add click event listeners to all buttons
    const addButtonEffects = () => {
      const buttons = document.querySelectorAll('.btn, .nav-cta, .btn-primary, .btn-secondary');
      
      buttons.forEach(button => {
        // Add crosshair cursor on hover
        (button as HTMLElement).style.cursor = 'crosshair';
        
        button.addEventListener('click', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          
          // Add bubble effect
          const bubble = document.createElement('span');
          bubble.classList.add('button-bubble');
          
          const rect = button.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = mouseEvent.clientX - rect.left - size / 2;
          const y = mouseEvent.clientY - rect.top - size / 2;
          
          bubble.style.width = bubble.style.height = size + 'px';
          bubble.style.left = x + 'px';
          bubble.style.top = y + 'px';
          
          button.appendChild(bubble);
          
          // Remove bubble after animation
          setTimeout(() => {
            bubble.remove();
          }, 800);
        });
      });
    };

    // Initial setup
    addButtonEffects();

    // Set up mutation observer to handle dynamically added buttons
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          addButtonEffects();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <ParticlesBackground />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hire-us" element={<HireUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}

export default App;

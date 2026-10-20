// App.jsx — Root component with Router, Theme context, and layout
// CHANGE: Added <BackgroundFX /> mount + .app-content wrapper.
// UNCHANGED: ThemeContext, toggleTheme, localStorage, Routes, all logic.
import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import BackgroundFX from './components/BackgroundFX';
import CursorGlow from './components/CursorGlow';


export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        
        <BackgroundFX />

        
        <CursorGlow />

        
        <div className="app-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

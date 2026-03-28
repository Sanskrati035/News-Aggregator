import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from "./features/newsSlice";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.news);

  // Jab app load ho, tab news fetch karein
  useEffect(() => {
    dispatch(fetchNews({ category: 'general' }));
  }, [dispatch]);

  // Dark Mode toggle karne ke liye body class update karein
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      {/* 1. Header & Navigation */}
      <Navbar />

      <main className="container">
        {/* 2. Headlines Section */}
        <section className="hero-section">
          <h1>Latest Headlines</h1>
          <p>Stay updated with the world's most recent news.</p>
        </section>

        {/* 3. News Feed Component */}
        <NewsList />
      </main>

      <footer className="footer">
        <p>© 2026 News Aggregator | Built with React & Redux</p>
      </footer>
    </div>
  );
}

export default App;
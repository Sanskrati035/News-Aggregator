import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, toggleTheme, setShowBookmarks } from '../features/newsSlice';

const categories = ['General', 'Business', 'Technology', 'Sports', 'Science'];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  
  const darkMode = useSelector((state) => state.news.darkMode);
  const bookmarks = useSelector((state) => state.news.bookmarks);
  const showBookmarks = useSelector((state) => state.news.showBookmarks);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(setShowBookmarks(false));
      dispatch(fetchNews({ searchTerm }));
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2 className="logo" onClick={() => dispatch(setShowBookmarks(false))}>NewsFlash</h2>
        
        {/* Home & Bookmarks Buttons */}
        <div className="nav-actions">
          <button 
            className={`nav-btn ${!showBookmarks ? 'active' : ''}`} 
            onClick={() => dispatch(setShowBookmarks(false))}
          >
            Home
          </button>
          <button 
            className={`nav-btn ${showBookmarks ? 'active' : ''}`} 
            onClick={() => dispatch(setShowBookmarks(true))}
          >
            Saved ({bookmarks.length})
          </button>
        </div>

        {/* Categories */}
        <div className="categories-scroll">
          {categories.map(cat => (
            <button key={cat} onClick={() => {
              dispatch(setShowBookmarks(false));
              dispatch(fetchNews({ category: cat.toLowerCase() }));
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Theme */}
        <div className="nav-right">
          <form onSubmit={handleSearch} className="search-form">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Go</button>
          </form>
          
          <button className="theme-btn" onClick={() => dispatch(toggleTheme())}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
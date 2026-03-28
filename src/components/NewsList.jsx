import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, toggleBookmark } from '../features/newsSlice';

const NewsList = () => {
  const { articles, status, bookmarks, currentPage, currentCategory, currentSearch, showBookmarks } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  // Agar Bookmarks page par hain, toh wahi dikhayein
  const displayArticles = showBookmarks ? bookmarks : articles;

  const handlePageChange = (newPage) => {
    dispatch(fetchNews({ 
      category: currentCategory, 
      searchTerm: currentSearch, 
      page: newPage 
    }));
    window.scrollTo(0, 0);
  };

  if (status === 'loading') return <div className="loader">Loading...</div>;

  return (
    <div className="container">
      <h2 style={{margin: '20px 0'}}>{showBookmarks ? 'Saved Articles' : 'Top Stories'}</h2>
      
      {displayArticles.length === 0 && <p>Nothing to show here.</p>}

      <div className="news-grid">
        {displayArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage || 'https://via.placeholder.com/400x200'} alt="" />
            <div className="card-content">
              <h3>{article.title}</h3>
              <div className="card-actions">
                <a href={article.url} target="_blank">Read</a>
                <button onClick={() => dispatch(toggleBookmark(article))}>
                  {bookmarks.some(b => b.url === article.url) ? '🔖 Saved' : '📑 Save'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls - Don't show on bookmarks page */}
      {!showBookmarks && (
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
          <span>Page {currentPage}</span>
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default NewsList;
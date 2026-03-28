import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '981e96abf86e4eeea5c63399629dd3e0'; 

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ category = 'general', searchTerm = '', page = 1 }) => {
    const endpoint = searchTerm ? 'everything' : 'top-headlines';
    const query = searchTerm ? `q=${searchTerm}` : `country=us&category=${category}`;
    const url = `https://newsapi.org/v2/${endpoint}?${query}&page=${page}&pageSize=12&apiKey=${API_KEY}`;
    
    const response = await axios.get(url);
    return { data: response.data, page, category, searchTerm };
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    currentPage: 1,
    currentCategory: 'general',
    currentSearch: '',
    bookmarks: [],
    showBookmarks: false, 
    darkMode: false,
  },
  reducers: {
    toggleTheme: (state) => { state.darkMode = !state.darkMode; },
    toggleBookmark: (state, action) => {
      const exists = state.bookmarks.find(a => a.url === action.payload.url);
      if (exists) {
        state.bookmarks = state.bookmarks.filter(a => a.url !== action.payload.url);
      } else {
        state.bookmarks.push(action.payload);
      }
    },
    setShowBookmarks: (state, action) => {
      state.showBookmarks = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.data.articles;
        state.currentPage = action.payload.page;
        state.currentCategory = action.payload.category;
        state.currentSearch = action.payload.searchTerm;
      })
      .addCase(fetchNews.rejected, (state, action) => { state.status = 'failed'; });
  },
});

export const { toggleTheme, toggleBookmark, setShowBookmarks } = newsSlice.actions;
export default newsSlice.reducer;

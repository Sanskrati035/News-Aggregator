# 📰 News Aggregator App

A modern, fast, and responsive News Aggregator application built with **React**, **Redux Toolkit**, and **NewsAPI**. This app allows users to stay updated with the latest news across various categories with a seamless user experience.

---

## ✨ Features

* **Real-time News Fetching:** Fetches top headlines using NewsAPI.
* **Redux-Powered State:** Global state management for syncing news data across components.
* **Category Filtering:** Filter news by Tech, Sports, Business, Entertainment, and more.
* **Search Functionality:** Quickly find articles by keywords.
* **Bookmarks/Save for Later:** Save your favorite articles using Redux (persisted in local storage).
* **Theme Toggle:** Switch between **Light Mode** and **Dark Mode**.
* **Pagination:** Smooth navigation through multiple pages of articles.
* **Loading & Error States:** User-friendly UI during data fetching or API failures.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **State Management:** Redux Toolkit
* **Styling:** CSS Modules / Tailwind CSS (depending on your choice)
* **API:** [NewsAPI.org](https://newsapi.org/)
* **Icons:** React Icons

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. Clone the repository
```bash
git clone [https://github.com/Sanskrati035/News-Aggregator.git](https://github.com/Sanskrati035/News-Aggregator.git)
cd News-Aggregator
2. Install Dependencies
Bash
npm install
3. Setup Environment Variables
Create a .env file in the root directory and add your API Key:

Code snippet
REACT_APP_NEWS_API_KEY=your_api_key_here
4. Start the Development Server
Bash
npm start
The app will be live at http://localhost:3000.

🧩 Key Functionalities

Redux Implementation
The app uses Redux Toolkit to manage:

newsSlice: To handle fetching, loading, and error states of articles.

bookmarkSlice: To add or remove articles from the saved list.

themeSlice: To manage global light/dark mode preference.

Pagination & Filters
The app intelligently manages API calls based on the selected category and page number, ensuring the UI stays in sync without unnecessary re-renders.

📄 License
This project is open-source and available under the MIT License.
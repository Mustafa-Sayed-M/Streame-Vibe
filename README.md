# 🎬 StreamVibe

StreamVibe is a modern movie and TV show discovery platform built using **React.js**. It provides users with a seamless experience to explore and search for their favorite movies and series.

## 🚀 Features

- 📺 Browse movies and TV shows
- 🔍 Search functionality
- 🎨 Responsive UI with **Tailwind CSS**
- 📡 Lazy loading images with `react-lazy-load-image-component`
- 🔗 Smooth navigation with `react-router-dom`
- 🔥 Optimized API fetching using `@tanstack/react-query`
- 🎭 Icons from `@fortawesome/fontawesome-free`
- 🏄 SwiperJS for smooth carousels

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router, SwiperJS
- **State Management**: React Query
- **Media Data**: TMDB API

## 📂 Project Structure

```
StreamVibe
│── src
│   ├── Components
│   │   ├── Footer
│   │   ├── Header
│   │   ├── Media
│   │   ├── Navbar
│   │   ├── Sections
│   │   ├── Skeletons
│   │   ├── Subscribe
│   ├── Data
│   │   ├── devices.json
│   │   ├── faqs.json
│   │   ├── plans.json
│   ├── Pages
│   │   ├── Movies
│   │   ├── Shows
│   │   │   ├── Home.js
│   │   │   ├── ScrollFromTop.js
│   │   │   ├── Search.js
│   │   │   ├── Subscriptions.js
│   │   │   ├── Support.js
│   ├── Utils
│   │   ├── api.js
│   │   ├── handlers.js
│   ├── App.js
│   ├── index.js
│── public
│── .env.local
│── package.json
│── tailwind.config.js
```

## ⚡ Installation & Usage

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/streamvibe.git
   cd streamvibe
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create an `.env.local` file**:

   ```
   REACT_APP_TMDB_API_KEY=your_api_key
   ```

4. **Run the development server**:
   ```bash
   npm start
   ```

## 📜 License

This project is licensed under the **MIT License**.

---

Made with ❤️ by [Mustafa Sayed](https://github.com/Mustafa-Sayed-M)

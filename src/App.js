import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import GamesPage from "./pages/GamesPage";
import AboutPage from "./pages/AboutPage";
import AuthorsPage from "./pages/AuthorsPage";
function App() {
  const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
  return (
    <div className="App">
      <HashRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;

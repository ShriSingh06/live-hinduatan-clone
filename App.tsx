import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';

// Helper component for scrolling to top on route change
const ScrollToTop = () => {
    const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            {/* Fallback for category pages to Home for demo purposes */}
            <Route path="/category/:slug" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
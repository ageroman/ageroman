import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import MatchesPage from './pages/MatchesPage';
import NewsPage from './pages/NewsPage';
import './styles/globals.css';

function App() {
  const [currentPath, setCurrentPath] = useState('/');
  
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };
  
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/teams':
        return <TeamsPage />;
      case '/matches':
        return <MatchesPage />;
      case '/news':
        return <NewsPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPath={currentPath} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
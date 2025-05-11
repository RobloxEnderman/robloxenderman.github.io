import React, { useState, useEffect } from 'react';
import Socials from './Socials';
import './App.css'

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.animated-cursor');
       cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

      const handleMouseOver = (e) => {
          if (e.target.style.cursor === 'pointer') {
              document.body.classList.add('cursor-pointer-hovered');
          } else {
              document.body.classList.remove('cursor-pointer-hovered');
          }
      };

      const handleMouseOut = (e) => {
          document.body.classList.remove('cursor-pointer-hovered');
      };

    document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const [showGames, setShowGames] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const message = "Hello, Welcome to my website! 👋";

  return (
    <div className="container">
      <div className="animated-cursor"></div>
      <nav className="navbar">
        <ul>
          <li><a href="#" onClick={() => {setShowHome(true); setShowSocials(false); setShowGames(false); setShowBlog(false);}}>Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" onClick={() => {setShowHome(false); setShowSocials(true); setShowGames(false); setShowBlog(false);}}>Socials</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#" onClick={() => {setShowHome(false); setShowSocials(false); setShowGames(true); setShowBlog(false);}}>Games</a></li>
        </ul>
      </nav>
      {showHome && (
        <div className="page-container">
          <h1 className="welcome-message">{message}</h1>
          <div className="about-me">
            <p>Hello! I'm mixtapejaxson, a software developer and game enthusiast. I enjoy creating interesting projects and exploring new technologies.</p>
          </div>
          <div className="social-links">
            <ul>
              <li><a href="https://twitter.com/@mixtapejaxson" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://github.com/mixtapejaxson/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      )}
      {showSocials && <div className="page-container"><Socials /></div>}
      {showGames && <div className="page-container"><h1>Games</h1></div>}
      {showBlog && <div className="page-container"><h1>Blog</h1></div>}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">YD</a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-item"
            >
              <span className="nav-text">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className="menu-text">MENU</div>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition-smooth);
        }
        
        .navbar.scrolled {
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-primary);
          letter-spacing: -0.05em;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-item {
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          position: relative;
          overflow: hidden;
          padding: 5px 0;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--text-primary);
          transform: translateX(-101%);
          transition: transform 0.3s ease;
        }

        .nav-item:hover {
          color: var(--text-primary);
        }

        .nav-item:hover::before {
          transform: translateX(0);
        }

        .menu-toggle {
          display: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Simplification for mobile for now, can be expanded to full overlay */
          }
          
          .menu-toggle {
            display: block;
            color: var(--text-primary);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

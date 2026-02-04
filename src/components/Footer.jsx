import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>Built with React & Vanilla CSS</p>
                <p>&copy; {new Date().getFullYear()} Yesu Doss X. All rights reserved.</p>
            </div>

            <style>{`
        .footer {
          padding: 20px 0;
          text-align: center;
          color: var(--text-secondary);
          font-family: monospace;
          font-size: 0.8rem;
          background-color: var(--bg-primary);
        }

        .footer p {
          margin-bottom: 5px;
        }
      `}</style>
        </footer>
    );
};

export default Footer;

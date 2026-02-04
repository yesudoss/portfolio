import { portfolioData } from '../data/content';

const About = () => {
    const { about } = portfolioData;

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">01. {about.title}</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="summary">{about.summary}</p>
                        <ul className="highlights-list">
                            {about.highlights.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-image-wrapper">
                        {/* Placeholder for profile image or graphical element */}
                        <div className="img-placeholder">
                            <span className="code-icon">{'< />'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .about-content {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 50px;
          align-items: center;
        }

        .summary {
          margin-bottom: 2rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .highlights-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .highlights-list li {
          position: relative;
          padding-left: 20px;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .highlights-list li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .about-image-wrapper {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .img-placeholder {
          width: 300px;
          height: 300px;
          background-color: var(--bg-secondary);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--accent);
          position: relative;
          transition: var(--transition);
        }
        
        .img-placeholder:hover {
          transform: translate(-10px, -10px);
          box-shadow: 10px 10px 0 0 var(--text-secondary);
        }

        .code-icon {
          font-size: 4rem;
          color: var(--accent);
          font-family: monospace;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-image-wrapper {
            margin-top: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default About;

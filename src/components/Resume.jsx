import { portfolioData } from '../data/content';
import '../App.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <h2 className="section-title">06. Resume</h2>

                <div className="resume-container">
                    <div className="resume-text">
                        <h3>Check out my résumé!</h3>
                        <p>
                            Grab a copy of my full résumé to read about my experience, education, and skills in detail.
                        </p>
                        <a href="/resume.pdf" target="_blank" className="btn btn-primary big-btn" rel="noopener noreferrer">
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        .resume-section {
          background-color: var(--bg-secondary);
          text-align: center;
        }

        .resume-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          background-color: var(--bg-primary);
          border-radius: 8px;
          border: 1px solid var(--text-secondary);
          max-width: 800px;
          margin: 0 auto;
        }

        .resume-text h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .resume-text p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
      `}</style>
        </section>
    );
};

export default Resume;

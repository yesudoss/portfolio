import { portfolioData } from '../data/content';
import '../App.css';

const Contact = () => {
    const { contact } = portfolioData;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for your message! This is a demo form.");
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">05. What's Next?</h2>
                <h3 className="contact-heading">Get In Touch</h3>
                <p className="contact-text">
                    I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>

                <a href={`mailto:${contact.email}`} className="btn btn-primary big-btn">Say Hello</a>

                <div className="social-links">
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>

            <style>{`
        .contact-section {
          text-align: center;
          padding: 100px 0;
        }

        .contact-container {
          max-width: 600px;
        }

        .contact-heading {
          font-size: clamp(40px, 5vw, 60px);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .contact-text {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }

        .big-btn {
          padding: 1.25rem 3rem;
          font-size: 1.1rem;
        }
        
        .social-links {
          margin-top: 50px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        
        .social-links a {
           color: var(--text-secondary);
           font-family: monospace;
           font-size: 0.9rem;
           transition: var(--transition);
        }
        
        .social-links a:hover {
           color: var(--accent);
        }
      `}</style>
        </section>
    );
};

export default Contact;

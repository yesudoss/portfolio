import { portfolioData } from '../data/content';
import '../App.css';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="greeting reveal" style={{ transitionDelay: '100ms' }}>{`// ${hero.name}`}</span>
          <h1 className="name reveal" style={{ transitionDelay: '300ms' }}>
            Designing <span className="gradient-text">Experiences</span>,<br />
            Engineering <span className="gradient-text">Future</span>.
          </h1>
          {/* Fallback to data title if needed, but using a more 'marketing' oriented headline for the aesthetic */}
          <p className="subtitle reveal" style={{ transitionDelay: '500ms' }}>{hero.subtitle}</p>

          <div className="cta-group reveal" style={{ transitionDelay: '700ms' }}>
            <a href="#projects" className="btn btn-primary">{hero.cta.projects}</a>
            <a href="/resume.html" target="_blank" className="btn btn-outline">Resume</a>
          </div>
        </div>

        <div className="hero-visual reveal" style={{ transitionDelay: '900ms' }}>
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          align-items: center;
          gap: 50px;
        }

        .greeting {
          color: var(--accent);
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 2rem;
          display: block;
        }

        .name {
          font-size: clamp(3.5rem, 6vw, 6rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 2rem;
          margin-left: -5px; /* Visual alignment */
        }

        .gradient-text {
          background: linear-gradient(to right, #6d28d9, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          max-width: 500px;
          margin-bottom: 3rem;
          color: var(--text-secondary);
          font-size: 1.25rem;
          font-weight: 300;
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
        }

        .hero-visual {
            position: relative;
            height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .abstract-shape {
            position: absolute;
            background: radial-gradient(circle, rgba(109, 40, 217, 0.4) 0%, rgba(6, 182, 212, 0.1) 70%, transparent 100%);
            border-radius: 50%;
            filter: blur(60px);
            animation: float 10s infinite ease-in-out;
        }

        .shape-1 {
            width: 400px;
            height: 400px;
            top: 10%;
            left: 10%;
        }

        .shape-2 {
            width: 300px;
            height: 300px;
            bottom: 10%;
            right: 10%;
            background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
            animation-delay: -5s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-content {
             display: flex;
             flex-direction: column;
             align-items: center; 
             z-index: 2;
          }
          
          .hero-visual {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 0;
              opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

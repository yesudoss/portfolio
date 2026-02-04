import { portfolioData } from '../data/content';
import '../App.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title reveal">Selected Works</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="project-content">
                <div className="project-header">
                  <span className="project-number">0{index + 1}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.github && <a href={project.links.github} target="_blank" className="link-arrow">GitHub ↗</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 3rem;
        }

        .project-card {
          padding: 3rem;
          transition: transform 0.4s ease, border-color 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        .project-header {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-direction: column;
        }

        .project-number {
            font-family: var(--font-body);
            color: var(--accent);
            font-size: 0.9rem;
            font-weight: 700;
        }

        .project-title {
          font-size: 2rem;
          margin: 0;
          line-height: 1.2;
        }
        
        .project-desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 2.5rem;
        }

        .tech-tag {
          font-family: var(--font-body);
          font-size: 0.8rem;
          padding: 6px 12px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          color: var(--text-tertiary);
          transition: color 0.3s ease, border-color 0.3s ease;
        }

        .project-card:hover .tech-tag {
            color: var(--text-primary);
            border-color: rgba(255,255,255,0.3);
        }

        .link-arrow {
            font-family: var(--font-body);
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 0.1em;
            color: var(--text-primary);
            border-bottom: 1px solid transparent;
            transition: var(--transition-fast);
        }

        .link-arrow:hover {
            color: var(--accent);
            border-bottom-color: var(--accent);
        }

        @media (max-width: 768px) {
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
    </section>
  );
};

export default Projects;

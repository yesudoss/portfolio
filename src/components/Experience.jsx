import { portfolioData } from '../data/content';
import '../App.css';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title reveal">Experience</h2>

        <div className="timeline">
          {experience.jobs.map((job, index) => (
            <div key={index} className="timeline-item reveal" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="timeline-left">
                <span className="period">{job.period}</span>
              </div>
              <div className="timeline-content">
                <h3 className="role">{job.role}</h3>
                <h4 className="company">{job.company}</h4>
                <p className="description">{job.description}</p>
                <ul className="achievements">
                  {job.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          margin-left: 10px;
        }

        .timeline-item {
          padding-left: 50px;
          margin-bottom: 5rem;
          position: relative;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 0;
          width: 9px;
          height: 9px;
          background: var(--bg-primary);
          border: 2px solid var(--accent);
          border-radius: 50%;
        }

        .timeline-item:hover::before {
            background: var(--accent);
            box-shadow: 0 0 15px var(--accent);
        }

        .period {
            font-family: var(--font-body);
            color: var(--accent);
            font-size: 0.9rem;
            margin-bottom: 1rem;
            display: inline-block;
        }

        .role {
            font-size: 2.5rem;
            line-height: 1.1;
            margin-bottom: 0.5rem;
        }

        .company {
            font-size: 1.5rem;
            color: var(--text-tertiary);
            margin-bottom: 2rem;
            font-weight: 400;
        }

        .description {
            color: var(--text-secondary);
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            max-width: 800px;
        }

        .achievements {
            list-style: none;
        }

        .achievements li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
            color: var(--text-secondary);
        }

        .achievements li::before {
            content: '–';
            position: absolute;
            left: 0;
            color: var(--text-tertiary);
        }
      `}</style>
    </section>
  );
};

export default Experience;

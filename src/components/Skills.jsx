import { portfolioData } from '../data/content';
import '../App.css';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title reveal">Technical Arsenal</h2>

        <div className="skills-wrapper">
          {skills.categories.map((category, index) => (
            <div key={index} className="skill-row reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <h3 className="category-name">{category.name}</h3>
              <div className="category-items">
                {category.items.map((item, idx) => (
                  <span key={idx} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-wrapper {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .skill-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 2rem;
          align-items: center;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .skill-row:last-child {
            border-bottom: none;
        }

        .category-name {
            font-size: 1.2rem;
            color: var(--text-tertiary);
            font-weight: 500;
        }

        .category-items {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .skill-pill {
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 50px;
            font-family: var(--font-body);
            color: var(--text-primary);
            font-size: 0.95rem;
            transition: var(--transition-fast);
        }

        .skill-pill:hover {
            background: var(--text-primary);
            color: var(--bg-primary);
            border-color: var(--text-primary);
        }

        @media (max-width: 768px) {
            .skill-row {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
        }
      `}</style>
    </section>
  );
};

export default Skills;

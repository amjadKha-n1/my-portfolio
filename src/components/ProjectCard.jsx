
function ProjectCard({ project }) {
    return (
      <article className={`project-card project-card--${project.accent}`}>
        <div className="project-card__top">
          <span className="project-card__number">
            {project.number || 'PROJECT'}
          </span>
  
          <span className="project-card__status">
            <span className="project-card__status-dot" />
            {project.status}
          </span>
        </div>
  
        <div className="project-card__content">
          <p className="project-card__category">
            {project.category}
          </p>
  
          <h3 className="project-card__title">
            {project.name}
          </h3>
  
          <p className="project-card__subtitle">
            {project.subtitle}
          </p>
  
          <p className="project-card__description">
            {project.description}
          </p>
        </div>
  
        {project.features?.length > 0 && (
          <ul className="project-card__features">
            {project.features.map((feature) => (
              <li key={feature}>
                <span className="project-card__check">↗</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
  
        <div className="project-card__tech">
          {project.tech?.map((technology) => (
            <span className="project-card__tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
  
        <div className="project-card__footer">
          {project.liveUrl ? (
            <a
              className="project-card__link project-card__link--primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live demo <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-card__link project-card__link--disabled">
              In development
            </span>
          )}
  
          {project.githubUrl ? (
            <a
              className="project-card__link project-card__link--secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <a
              className="project-card__link project-card__link--secondary"
              href="https://github.com/amjadKha-n1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </article>
    )
  }
  
  export default ProjectCard
  
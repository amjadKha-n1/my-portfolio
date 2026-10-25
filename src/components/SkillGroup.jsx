
function SkillGroup({ group }) {
    return (
      <article
        className={`skill-group ${group.featured ? 'skill-group-featured' : ''}`}
      >
        <div className="skill-group-header">
          <span className="skill-group-number">{group.number}</span>
  
          <span className="skill-group-indicator" aria-hidden="true">
            ↗
          </span>
        </div>
  
        <h3>{group.title}</h3>
        <p className="skill-group-description">
          {group.description}
        </p>
  
        <div className="skill-tags">
          {group.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </article>
    )
  }
  
  export default SkillGroup
  
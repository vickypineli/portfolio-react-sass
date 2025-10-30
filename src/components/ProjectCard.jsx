import React from 'react'

export default function ProjectCard({ project }){
  return (
    <article className="project-card" aria-labelledby={`title-${project.id}`}>
      <div className="thumb">
        <img src={project.image} alt={project.title} />
      </div>
      <h3 id={`title-${project.id}`}>{project.title}</h3>
      <p>{project.description}</p>
      <div style={{marginTop: 'auto'}}>
        <small>{project.tech.join(' • ')}</small>
        <div style={{marginTop: '.5rem', display:'flex', gap:'.5rem'}}>
          { project.github && <a href={project.github} target="_blank" rel="noreferrer">Code</a> }
          { project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo</a> }
        </div>
      </div>
    </article>
  )
}
import React from 'react'
import { ProjectCard } from '../project-card/ProjectCard'
import { Project } from '../../models/Project'

interface ProjectsFeedProps {
  projects: Project[]
}

export const ProjectsFeed: React.FC<ProjectsFeedProps> = props => {
  return (
    <ul className="d-grid ls-none">
      { props.projects.map(project => (
        <li key={project.id}>
          <ProjectCard
            username={project.author.username}
            imageUrl={project.imageUrl}
            likeCount={project.likeCount}
            title={project.title} />
        </li>
      )) }
    </ul>
  )
}

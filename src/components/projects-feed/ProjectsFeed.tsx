import React from 'react'
import { ProjectCard } from '../project-card/ProjectCard'
import { Project } from '../../domain/entities/Project'

interface ProjectsFeedProps {
  projects: Project[]
  toggleProjectIsLiked: (projectId: number) => void
}

export const ProjectsFeed: React.FC<ProjectsFeedProps> = props => {
  const projectIsLikedDidChange = (project: Project) => {
    props.toggleProjectIsLiked(project.id)
  }

  return (
    <ul className="d-grid ls-none">
      { props.projects.map(project => (
        <li key={project.id}>
          <ProjectCard
            username={project.user.username}
            imageUrl={project.imageUrl}
            likeCount={project.likesCount}
            isLiked={project.isLiked}
            onIsLikedChange={() => { projectIsLikedDidChange(project) }}
            title={project.title} />
        </li>
      )) }
    </ul>
  )
}

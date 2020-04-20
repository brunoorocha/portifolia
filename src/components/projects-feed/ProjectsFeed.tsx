import React from 'react'
import { ProjectCard } from '../project-card/ProjectCard'
import { Project } from '../../domain/entities/Project'
import { User } from '../../domain/entities/User'
import { useHistory } from 'react-router-dom'
import { routes } from '../../pages/routes'

interface ProjectsFeedProps {
  projects: Project[]
  user?: User
  toggleProjectIsLiked: (project: Project) => void
}

export const ProjectsFeed: React.FC<ProjectsFeedProps> = props => {
  const history = useHistory()

  const projectIsLikedDidChange = (project: Project) => {
    if (!props.user) {
      history.push(routes.signIn)
      return
    }

    props.toggleProjectIsLiked(project)
  }

  return (
    <ul className="d-grid ls-none">
      { props.projects.map(project => (
        <li key={project.id}>
          <ProjectCard
            projectId={project.id}
            username={project.user ? project.user.username : undefined}
            userImage={project.user ? project.user.profileImage : undefined}
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

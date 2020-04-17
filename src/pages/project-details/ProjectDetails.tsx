import React, { useEffect } from 'react'
import { Row } from 'antd'
import { Project } from '../../domain/entities/Project'
import { Link, useParams } from 'react-router-dom'

interface ProjectDetailsProps {
  project?: Project
  fetchProjectWithId: (projectId: number) => void
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = props => {
  const { fetchProjectWithId, project } = props
  const { projectId } = useParams()
  const parsedProjectId = parseInt(projectId!)

  useEffect(() => {
    if (project) { return }
    fetchProjectWithId(parsedProjectId)
  }, [fetchProjectWithId, project, parsedProjectId])

  return (
    <div className="container">
      { project && <div>  
        <Row>
          <h3>{ project.title }</h3>
          <p>by <Link to="">{ project.user.username }</Link></p>
        </Row>
      </div>}
    </div>
  )
}

import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Avatar } from 'antd'
import { Project } from '../../domain/entities/Project'
import { Button } from '../../components'
import { Heart } from 'react-feather'
import { ProjectImageContainer } from '../../components/project-image-container/ProjectImageContainer'

interface ProjectDetailsProps {
  project?: Project
  fetchProjectWithId: (projectId: number) => void
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = props => {
  const { fetchProjectWithId, project } = props
  const { projectId } = useParams()
  const parsedProjectId = parseInt(projectId!)

  useEffect(() => {
    if (project && project.id === parsedProjectId) { return }
    fetchProjectWithId(parsedProjectId)
  }, [fetchProjectWithId, project, parsedProjectId])

  return (
    <div className="small-container">
      { project && <div>  
        <Row className="pdt-lmedium pdb-smedium">
          <Col flex="auto" className="d-flex">
            <div className="mr-smedium">
              <Avatar src={project.user.profileImage} size="large" />
            </div>
            <div>
              <h4 className="mb-xsmall">{ project.title }</h4>
              <p>by <Link to={`/${project.user.username}`}>{ project.user.username }</Link></p>
            </div>
          </Col>
          <Col className="d-flex">
            <Button className="mr-smedium">Save</Button>
            <Button>Like</Button>
          </Col>
        </Row>

        <ProjectImageContainer imageUrl={project.imageUrl} className="br-medium" />

        <Row gutter={[40, 40]} className="pdt-lmedium pdb-lmedium">
          <Col xs={24} sm={16} md={16}>
            <p>{ project.description }</p>

            <div className="">
              <h5>Responses</h5>
            </div>
          </Col>
          <Col xs={24} sm={8} md={8}>
            <span className="d-flex ai-center color-gray-500">
              <Heart className="f-icon f-icon-smedium mr-smedium" />
              { project.likesCount } likes
            </span>
          </Col>
        </Row>
      </div>}
    </div>
  )
}

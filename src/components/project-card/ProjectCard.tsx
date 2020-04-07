import React from 'react'
import { Row, Col } from 'antd'
import { Heart } from 'react-feather'

interface ProjectCardProps {
  username: string
  imageUrl: string
  likeCount: number
}

export const ProjectCard: React.FC<ProjectCardProps> = props => {
  return (
    <div className="w-100per d-flex fd-column">
      <div className="w-100per o-hidden br-small mb-small">
        <img src={props.imageUrl} alt="" className="w-100per" />
      </div>
      <Row>
        <Col flex="auto" className="d-flex ai-center">
          <img src="" alt="" className="d-flex w-medium h-medium bg-color-gray-100 br-smedium" />
          <span className="fw-500 ml-small">{props.username}</span>
        </Col>
        <Col>
          <div className="d-flex ai-center color-gray-500">
            <Heart className="f-icon f-icon-smedium" />
            <span className="ml-xsmall">{props.likeCount}</span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

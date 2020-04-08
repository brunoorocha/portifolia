import React from 'react'
import { Row, Col } from 'antd'
import { Heart, FolderPlus } from 'react-feather'
import { Button } from '../base/Button'

interface ProjectCardProps {
  username: string
  imageUrl: string
  likeCount: number
  title: string
}

export const ProjectCard: React.FC<ProjectCardProps> = props => {
  return (
    <div className="w-100per d-flex fd-column">
      <div className="p-relative w-100per o-hidden br-small mb-small">
        <img src={props.imageUrl} alt="" className="w-100per" />
        <div className="p-absolute w-100per h-100per bg-black-gradient bs-border-box pd-medium d-flex ai-end show-when-hover" style={{ bottom: '0' }}>
          <Row className="w-100per up-when-show" align="middle">
            <Col flex="auto">
              <span className="fw-500 color-white">{props.title}</span>
            </Col>
            <Col className="d-flex">
              <Button className="w-lmedium h-lmedium d-flex ai-center jc-center pd-none mr-small">
                <FolderPlus className="f-icon f-icon-smedium" />
              </Button>
              <Button className="w-lmedium h-lmedium d-flex ai-center jc-center pd-none">
                <Heart className="f-icon f-icon-smedium" />
              </Button>
            </Col>
          </Row>
        </div>
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

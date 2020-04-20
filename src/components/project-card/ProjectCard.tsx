import React from 'react'
import { Row, Col, Avatar } from 'antd'
import { Heart, Bookmark } from 'react-feather'
import { Button } from '../base/Button'
import { LikeButton } from '../like-button/LikeButton'
import { Link } from 'react-router-dom'
import { routes } from '../../pages/routes'

interface ProjectCardProps {
  projectId: number
  username?: string
  userImage?: string
  imageUrl: string
  likeCount: number
  title: string
  isLiked?: boolean
  onIsLikedChange?: () => void
}

export const ProjectCard: React.FC<ProjectCardProps> = props => {

  return (
    <div className="w-100per d-flex fd-column">
      <div className="p-relative w-100per o-hidden br-small mb-small">
        <img src={props.imageUrl} alt="" className="w-100per" />
        <div className="p-absolute w-100per h-100per bg-black-gradient bs-border-box pd-medium d-flex ai-end show-when-hover" style={{ bottom: '0' }}>
          <Row className="w-100per up-when-show" align="middle">
            <Col flex="auto">
              <Link to={`${routes.projects}/${props.projectId}`}>
                <span className="fw-500 color-white">{props.title}</span>
              </Link>
            </Col>
            <Col className="d-flex">
              <Button className="w-lmedium h-lmedium d-flex ai-center jc-center pd-none mr-small">
                <Bookmark className="f-icon f-icon-smedium" />
              </Button>

              <LikeButton isLiked={props.isLiked} onClick={props.onIsLikedChange} />
            </Col>
          </Row>
        </div>
      </div>

      { props.username &&
        <Row>
          <Col flex="auto" className="d-flex">
            <Link to={`/${props.username}`} className="d-flex ai-center color-text">
              <Avatar size="small" src={props.userImage} />
              <span className="fw-500 ml-small">{props.username}</span>
            </Link>
          </Col>
          <Col>
            <div className="d-flex ai-center color-gray-500">
              <Heart className={`f-icon f-icon-smedium ${props.isLiked ? 'color-pink-500' : ''}`} />
              <span className="ml-xsmall">{props.likeCount}</span>
            </div>
          </Col>
        </Row>
      }
    </div>
  )
}

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../domain/entities/User'
import { Row, Col, Avatar } from 'antd'
import { GhostButton } from '../../components'

interface ProfileProps {
  user?: User
  isLoadingUserProfile: boolean
  fetchUserWithUsername: (username: string) => void
}

export const Profile: React.FC<ProfileProps> = props => {
  const { username } = useParams()
  const { user, fetchUserWithUsername, isLoadingUserProfile } = props

  useEffect(() => {
    if (user && user.username === username) { return }
    fetchUserWithUsername(username!)
  }, [user, username, fetchUserWithUsername])

  return (
    <div className="container pdt-large pdb-large">
      { (user && !isLoadingUserProfile) &&
        <Row justify="center">
          <Col className="d-flex">
            <Avatar size="large" className="w-ularge h-ularge" />
            <div className="d-flex fd-column ml-lmedium">
              <h3 className="mb-xsmall">{ user.name }</h3>
              <span className="mb-medium color-gray-500">@{ user.username }</span>
              <div>
                <GhostButton>Edit profile</GhostButton>
              </div>
            </div>
          </Col>
        </Row>
      }
    </div>
  )
}

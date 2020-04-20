import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../domain/entities/User'
import { Row, Col, Avatar, Tabs } from 'antd'
import { LinkButton, ProjectsFeed } from '../../components'
import { routes } from '../routes'

interface ProfileProps {
  user?: User
  isAuthenticatedUser: boolean
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
        <>
          <Row justify="center">
            <Col className="d-flex">
              <Avatar src={user.profileImage} size="large" className="w-ularge h-ularge" />
              <div className="d-flex fd-column ml-lmedium">
                <h3 className="mb-xsmall">{ user.name }</h3>
                <span className="mb-medium color-gray-500">@{ user.username }</span>
                { props.isAuthenticatedUser &&
                  <div>
                    <LinkButton to={routes.editProfile} type="ghost">Edit profile</LinkButton>
                  </div>
                }
              </div>
            </Col>
          </Row>
          <Row className="mt-large">
            <Col span={24}>
              <div>
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane
                    tab={<span>Projects <span className="color-gray-500 ml-small">{user.projects ? user.projects.length : 0}</span></span>}
                    key="1"
                  >
                    <ProjectsFeed projects={user.projects ?? []} />
                  </Tabs.TabPane>

                  <Tabs.TabPane
                    tab={<span>Liked <span className="color-gray-500 ml-small">{user.likedCount ?? 0}</span></span>}
                    key="2"
                  >
                  </Tabs.TabPane>

                  <Tabs.TabPane
                    tab={<span>Collections <span className="color-gray-500 ml-small">0</span></span>}
                    key="3"
                  >
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </Col>
          </Row>
        </>
      }
    </div>
  )
}

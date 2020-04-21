import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../domain/entities/User'
import { Row, Col, Avatar, Tabs } from 'antd'
import { LinkButton, Button, ProjectsFeed } from '../../components'
import { routes } from '../routes'
import { Plus } from 'react-feather'

interface ProfileProps {
  user?: User
  isAuthenticatedUser: boolean
  isLoadingUserProfile: boolean
  fetchUserWithUsername: (username: string) => void
  fetchProjectsForUser: (userIdOrUsername: number | string) => void
  fetchLikedProjectsForUser: (userIdOrUsername: number | string) => void
}

export const Profile: React.FC<ProfileProps> = props => {
  const { username } = useParams()
  const { user, fetchUserWithUsername, fetchProjectsForUser, fetchLikedProjectsForUser, isLoadingUserProfile } = props

  useEffect(() => {
    if (user && user.username === username) { return }
    fetchUserWithUsername(username!)
  }, [user, username, fetchUserWithUsername, fetchProjectsForUser])

  useEffect(() => {
    if (!username) { return }
    fetchProjectsForUser(username)
    fetchLikedProjectsForUser(username)
  }, [fetchLikedProjectsForUser, fetchProjectsForUser, username])

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
                  <div>
                  { props.isAuthenticatedUser ? 
                    <LinkButton to={routes.editProfile} type="ghost">Edit profile</LinkButton> :
                    <Button>
                      <Plus className="f-icon f-icon-smedium mr-xsmall" />
                      Follow
                    </Button>
                  }
                  </div>
                  <div>
                  </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-large">
            <Col span={24}>
              <div>
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane
                    tab={<span>Projects <span className="color-gray-500 ml-small">{user.projectsCount}</span></span>}
                    key="1"
                  >
                    <ProjectsFeed projects={user.projects ?? []} />
                  </Tabs.TabPane>

                  <Tabs.TabPane
                    tab={<span>Liked <span className="color-gray-500 ml-small">{user.likedCount}</span></span>}
                    key="2"
                  >
                    <ProjectsFeed projects={user.likedProjects ?? []} />
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

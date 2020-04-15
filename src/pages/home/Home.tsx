import React, { useEffect } from 'react'
import { Banner, ProjectFilter, ProjectsFeed } from '../../components'
import { Row } from 'antd'
import { Project } from '../../domain/entities/Project'
import { User } from '../../domain/entities/User'

interface HomeProps {
  feed: Project[]
  isLoadingFeed: boolean
  fetchAllProjects: () => void
  user?: User
}

export const HomePage: React.FC<HomeProps> = props => {
  const { fetchAllProjects } = props

  useEffect(() => {
    fetchAllProjects()
  }, [fetchAllProjects])

  return (
    <>
      {!props.user && <Banner />}
      <Row className="container">
        <ProjectFilter />
        <ProjectsFeed projects={props.feed} />
      </Row>
    </>
  )
}
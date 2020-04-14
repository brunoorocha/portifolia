import React, { useEffect } from 'react'
import { Banner, ProjectFilter, ProjectsFeed } from '../../components'
import { Row } from 'antd'
import { Project } from '../../domain/entities/Project'

interface HomeProps {
  feed: Project[]
  isLoadingFeed: boolean
  fetchAllProjects: () => void
}

export const HomePage: React.FC<HomeProps> = props => {
  useEffect(() => {
    props.fetchAllProjects()
  })

  return (
    <>
      <Banner />
      <Row className="container">
        <ProjectFilter />
        <ProjectsFeed projects={props.feed} />
      </Row>
    </>
  )
}
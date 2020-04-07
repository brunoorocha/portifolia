import React from 'react'
import { Banner, ProjectFilter, ProjectsFeed } from '../../components'
import { Row } from 'antd'
import { Project } from '../../models/Project'

export const HomePage = () => {
  const projects: Project[] = [
    {
      author: { username: 'brunoorocha' },
      imageUrl: 'https://cdn.dribbble.com/users/757683/screenshots/10965108/media/5be94cd5224afd17f00984551dce7dee.jpg',
      likeCount: 10,
      title: 'Workly - Dashboard',
      id: 0
    },
    {
      author: { username: 'airlonfilho' },
      imageUrl: 'https://cdn.dribbble.com/users/517584/screenshots/10959373/media/213616aef6bea576b60e90e1cb0e0526.png',
      likeCount: 10,
      title: 'Klamma for business',
      id: 1
    },
    {
      author: { username: 'mateuslima' },
      imageUrl: 'https://cdn.dribbble.com/users/2566888/screenshots/10966073/media/93a196182d15d2c023f5748ceb595512.png',
      likeCount: 10,
      title: 'Freelancer Scheduler',
      id: 2
    },
    {
      author: { username: 'brunoorocha' },
      imageUrl: 'https://cdn.dribbble.com/users/863815/screenshots/10952953/media/68f0b6ca0d38cb543f109ce33e19744f.png',
      likeCount: 10,
      title: 'Dark mode for web',
      id: 3
    },
    
  ]

  return (
    <>
      <Banner />
      <Row className="container">
        <ProjectFilter />
        <ProjectsFeed projects={projects} />
      </Row>
    </>
  )
}
import React from 'react'
import { Banner, ProjectFilter } from '../../components'
import { Row } from 'antd'

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Row className="container">
        <ProjectFilter />
      </Row>
    </>
  )
}
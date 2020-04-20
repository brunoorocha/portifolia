import React from 'react'
import { Row, Col } from 'antd'
import { LinkButton } from '../base/Button'
import bannerImage from '../../assets/images/banner-illustration.png'
import { routes } from '../../pages/routes'

export const Banner: React.FC = () => {
  return (
    <div className="bg-color-pink-100 pdt-slarge pdb-slarge">
      <div className="container">
        <Row align="middle" gutter={[40, 0]}>
          <Col xs={24} sm={12} md={12}>
            <h1>Mozart’s telling us from up the sky… “Go on a journey,” he’s saying.</h1>
            <p>Portifolia it's a personal project that I'm developing for the purpose of learning but it would be great if someday it become useful for someone else. Visitors, abuse with moderation.</p>
            <LinkButton to={routes.signUp} type="primary">Start your jorney</LinkButton>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <img src={bannerImage} alt="" className="w-100per pd-smedium" />
          </Col>
        </Row>
      </div>
    </div>
  )
}


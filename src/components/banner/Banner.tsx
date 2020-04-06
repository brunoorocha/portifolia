import React from 'react'
import { Row, Col } from 'antd'
import { PrimaryButton } from '../base/Button'
import bannerImage from '../../assets/images/romainbriaux-9270a203743088cf36b939b04708d9a18fa794e04373964283a2d87c8f6fba0f.png'

export const Banner: React.FC = () => {
  return (
    <div className="bg-color-pink-100 pdt-slarge pdb-slarge">
      <Row className="container" align="middle">
        <Col xs={24} sm={12} md={12}>
          <h1>Discover the world’s top designers & creatives</h1>
          <p>Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>
          <PrimaryButton>Sign up</PrimaryButton>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <img src={bannerImage} alt="" className="w-100per pd-smedium" />
        </Col>
      </Row>
    </div>
  )
}


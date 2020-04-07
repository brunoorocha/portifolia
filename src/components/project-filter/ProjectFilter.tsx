import React from 'react'
import { Row, Col, Select } from 'antd'
import { ChevronDown } from 'react-feather'

export const ProjectFilter: React.FC = props => {
  const { Option } = Select
  const suffixIcon = <ChevronDown className="f-icon f-icon-smedium" />

  return (
    <Row className="pdt-lmedium pdb-lmedium">
      <Col>
        <Select
          defaultValue="popular"
          className="d-select"
          suffixIcon={suffixIcon}>
          <Option value="popular">Popular</Option>
          <Option value="recent">Recent</Option>
        </Select>
      </Col>
    </Row>
  )
}


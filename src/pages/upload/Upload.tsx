import React from 'react'
import { Row, Upload as AntdUpload, Col, Form, Input } from 'antd'
import { UploadCloud } from 'react-feather'
import { PrimaryButton } from '../../components'

interface UploadProps {

}

export const Upload: React.FC<UploadProps> = props => {
  const { Dragger } = AntdUpload

  return (
    <div className="container">
      <Row className="mt-large">
        <h2>Publish your project</h2>
      </Row>
      <Form layout="vertical">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={14}>
            <Form.Item name="image" valuePropName="image" rules={[{ required: true, message: 'Please choose an image' }]}>
              <Dragger
                name=""
                accept=".png,.jpg,.jpeg,.gif"
                multiple={false}
                listType="picture"
                className="pdt-slarge pdb-slarge"
              >
                <p>
                  <UploadCloud className="f-icon f-icon-llarge" />
                </p>

                <h3 className="antd-upload-text mt-medium mb-small">Drag and drop an image</h3>
                <p className="antd-upload-hint">Or click to choose a file</p>
              </Dragger>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={10}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please input the project name' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please input the description project' }]}
            >
              <Input.TextArea style={{ resize: 'none' }} />
            </Form.Item>

            <Form.Item>
              <PrimaryButton isSubmit={true}>Publish project</PrimaryButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

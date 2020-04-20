import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Upload as AntdUpload, Col, Form, Input } from 'antd'
import { UploadCloud } from 'react-feather'
import { PrimaryButton } from '../../components'
import { CreateProjectDTO } from '../../domain/dto/create-project-dto'
import { Project } from '../../domain/entities/Project'
import { routes } from '../routes'

interface UploadProps {
  isCreatingProject: boolean
  createdProject?: Project
  createProject: (createProjectDTO: CreateProjectDTO) => void
  setCreatedProject: (project?: Project) => void
  setSelectedProject: (project?: Project) => void
}

export const Upload: React.FC<UploadProps> = props => {
  const { Dragger } = AntdUpload
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState({})

  const { setCreatedProject, setSelectedProject, createdProject } = props
  const history = useHistory()

  useEffect(() => {
    if (!createdProject) { return }
    const createdProjectId = createdProject.id
    setSelectedProject({ ...createdProject })
    setCreatedProject(undefined)

    history.push(`${routes.projects}/${createdProjectId}`)
  }, [history, createdProject, setSelectedProject, setCreatedProject])

  const onFormFinish = () => {
    const imageFile = (image as File)
    const payload = { title, description, image: imageFile }
    props.createProject(payload)
  }

  return (
    <div className="small-container">
      <Row className="mt-large">
        <h3>Publish your project</h3>
      </Row>
      <Form layout="vertical" onFinish={onFormFinish}>
        <Row gutter={[40, 40]}>
          <Col span={24}>

            <Form.Item name="image" valuePropName="image" rules={[{ required: true, message: 'Please choose an image' }]}>
              <Dragger
                name=""
                accept=".png,.jpg,.jpeg,.gif"
                multiple={false}
                listType="picture"
                className="pdt-slarge pdb-slarge"
                onChange={(info) => setImage(info.file.originFileObj!)}
              >
                <p>
                  <UploadCloud className="f-icon f-icon-llarge" />
                </p>

                <h4 className="antd-upload-text mt-medium mb-small">Drag and drop an image</h4>
                <p className="antd-upload-hint">Or click to choose a file</p>
              </Dragger>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[40, 40]}>
          <Col span={24}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please input the project name' }]}
            >
              <Input onChange={(event) => setTitle(event.target.value)} />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please input the description project' }]}
            >
              <Input.TextArea onChange={(event) => setDescription(event.target.value)} style={{ resize: 'none' }} />
            </Form.Item>

            <Form.Item>
              <PrimaryButton isLoading={props.isCreatingProject} isSubmit={true}>Publish project</PrimaryButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

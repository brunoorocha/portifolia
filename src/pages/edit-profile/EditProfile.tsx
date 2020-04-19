import React, { useState } from 'react'
import { User } from '../../domain/entities/User'
import { Row, Avatar, Upload, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../../components'
import { DribbbreApiResources } from '../../domain/api-resources'
import { getAuthorizationHeader } from '../../domain/api-service'

interface EditProfileProps {
  user?: User
}

export const EditProfile: React.FC<EditProfileProps> = props => {
  const [uploadedImagePath, setUploadedImagePath] = useState('')
  const [isLoadingProfileImage, setIsLoadingProfileImage] = useState(false)

  const getBase64FromImage = (image: File, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback((reader.result as string)));
    reader.readAsDataURL(image);
  }

  const onUploadChange = (info: any) => {
    setIsLoadingProfileImage(info.file.status === 'uploading')

    if (info.file.status === 'done') {
      getBase64FromImage(info.file.originFileObj, (previewUrl: string) => {
        setUploadedImagePath(previewUrl)
      })
    }
  }

  const uploadConfigProps = {
    action: props.user ? DribbbreApiResources.baseURL + DribbbreApiResources.changeProfileImage(props.user.id) : undefined,
    headers: { ...getAuthorizationHeader() }
  }

  return (
    <div className="small-container pdt-large pdb-lmedium">
      { props.user &&
        <>
          <Row>
            <div className="d-flex ai-center">
              <Link
                to={`${props.user.username}`}
                className="color-text fw-500 sm-fs-medium"
              >
                { props.user?.name }
              </Link>
              <span className="color-gray-300 ml-small mr-small">/</span>
              <span className="fw-500 sm-fs-medium">Edit profile</span>
            </div>
          </Row>

          <Row className="mt-medium mb-medium">
            <div className="d-flex ai-center">
              <Avatar
                size="large"
                className="w-ularge h-ularge mr-medium"
                src={uploadedImagePath !== '' ? uploadedImagePath : props.user.profileImage} />
              <Upload
                name="profileImage"
                multiple={false}
                showUploadList={false}
                onChange={onUploadChange}
                method="put"
                {...uploadConfigProps}
              >
                <PrimaryButton isLoading={isLoadingProfileImage}>Upload new picture</PrimaryButton>
              </Upload>
            </div>
          </Row>

          <Form layout="vertical" initialValues={{
            'name': props.user.name,
            'email': props.user.email,
            'username': props.user.username
          }}>
            <Form.Item
              label="Name"
              name="name"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <PrimaryButton>Save Profile</PrimaryButton>
            </Form.Item>
          </Form>
        </>
      }
    </div>
  )
}

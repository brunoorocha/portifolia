import React, { useEffect } from 'react'
import { message, notification, Avatar } from 'antd'
import { Message } from '../../models/Message'
import { Notification } from '../../models/Notification'
import { X } from 'react-feather'

interface MessageCenterProps {
  messages: Message[]
  notifications: Notification[]
}

export const MessageCenter: React.FC<MessageCenterProps> = props => {
  useEffect(() => {
    const lastMessage = props.messages.pop()
    if (!lastMessage) { return }

    switch (lastMessage.type) {
      case 'error':
        message.error(lastMessage.content)
        break
      case 'success':
        message.success(lastMessage.content)
        break
      case 'info':
        message.info(lastMessage.content)
        break
      case 'warning':
        message.warning(lastMessage.content)
        break
      default:
        break
    }
  }, [props.messages])

  useEffect(() => {
    const lastNotification = props.notifications.pop()
    if (!lastNotification) { return }

    notification.open({
      message: lastNotification.title,
      description: lastNotification.message,
      closeIcon: <X />,
      icon: <Avatar />
    })

  }, [props.notifications])

  return null
}

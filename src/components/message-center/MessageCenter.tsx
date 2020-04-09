import React, { useEffect } from 'react'
import { message } from 'antd'
import { Message } from '../../models/Message'

interface MessageCenterProps {
  messages: Message[]
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

  return null
}

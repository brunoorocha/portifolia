import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../domain/entities/User'

interface ProfileProps {
  user?: User
  isLoadingUserProfile: boolean
  fetchUserWithUsername: (username: string) => void
}

export const Profile: React.FC<ProfileProps> = props => {
  const { username } = useParams()
  const { user, fetchUserWithUsername, isLoadingUserProfile } = props

  useEffect(() => {
    if (user) { return }
    fetchUserWithUsername(username!)
  }, [user, username, fetchUserWithUsername])

  return (
    <div className="container">
      { user &&
        <h3>{ user.name }</h3>
      }
    </div>
  )
}

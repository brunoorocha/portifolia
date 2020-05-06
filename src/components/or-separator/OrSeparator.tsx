import React from 'react'

export const OrSeparator: React.FC = props => {
  return (
    <div className="d-flex fd-column ai-center w-100per">
      <div className="bt-solid-1 bc-gray w-100per mt-medium"></div>
      <p className="bg-color-white pdr-smedium pdl-smedium" style={{ marginTop: '-14px' }}>or</p>
    </div>
  )
}


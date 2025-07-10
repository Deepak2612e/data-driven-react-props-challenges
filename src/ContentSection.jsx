import React from 'react'

const ContentSection = ({ title ,children}) => {
  return (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default ContentSection
import React from 'react'

interface LivePreviewProps {
  children: React.ReactNode
}

const LivePreview: React.FC<LivePreviewProps> = ({ children }) => {
  return <div className="p-4 bg-white rounded shadow">{children}</div>
}

export default LivePreview

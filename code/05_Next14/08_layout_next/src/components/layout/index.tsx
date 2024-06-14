import React, { memo } from 'react'

export interface LayoutProps {
  children?: React.ReactNode
}

// eslint-disable-next-line react/display-name
const Layout: React.FC<LayoutProps> = memo(props => {
  // ? 简单实现页面布局，next是通过props.children来实现的  在_app.tsx中使用layout.tsx即可
  const { children } = props
  return (
    <div>
      <h2>app header</h2>
      <div>{children}</div>
      <h2>app footer</h2>
    </div>
  )
})

export default Layout
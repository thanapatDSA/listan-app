// import React, { useState } from 'react'
// import { Menu, Icon, Button, Layout } from 'antd'
// import { withRouter } from 'react-router-dom'
// import 'antd/dist/antd.css'

// function Sidebar() {
//   const [collapsed, IsSetCollapsed] = useState(true)

//   const toggleCollapsed = () => {
//     IsSetCollapsed(!collapsed)
//   }

//   return (
//     <Layout.Sider
//       style={{ overflow: 'hidden' }}
//       width={150}
//       collapsed={collapsed}
//       onCollapse={() => {
//         toggleCollapsed()
//       }}
//     >
//       <Button
//         type="link"
//         onClick={() => {
//           toggleCollapsed()
//         }}
//         style={{ marginBottom: 16, width: '-webkit-fill-available' }}
//       >
//         <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
//       </Button>
//       <Menu
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         theme="dark"
//         style={{ marginRight: 'auto' }}
//       >
//         <Menu.Item key="1">
//           <Icon type="pie-chart" />
//           <span>Season</span>
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Icon type="desktop" />
//           <span>Calendar</span>
//         </Menu.Item>
//         <Menu.Item key="3">
//           <Icon type="star" />
//           <span>Fav</span>
//         </Menu.Item>
//       </Menu>
//     </Layout.Sider>
//   )
// }

// export default withRouter(Sidebar)

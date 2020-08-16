import React from 'react'
import UsersTable from '../tables/users-table'
import SidebarMenu from '../sidebar-menu/sidebar-menu'

function DataPage(props) {
  return (
    <>
      <SidebarMenu/>
      <UsersTable/>
    </>
  )
}

export default DataPage
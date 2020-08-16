import React from 'react'
import Table from 'components/ui-components/table/table'

function UsersTable(props) {
  const headers = [
    "ID",
    "First Name",
    "Last Name",
    "Email"
  ]

  const data = [
    {
      id: 1,
      firstName: "Juozas",
      lastName: "Beniusis",
      email: "beniusij@gmail.com"
    },
    {
      id: 2,
      firstName: "Test",
      lastName: "User",
      email: "test@example.com"
    }
  ]

  return (
    <Table
      data={data}
      headers={headers}
    />
  )
}

export default UsersTable
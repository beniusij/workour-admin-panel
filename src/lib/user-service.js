import React from 'react'

export default function UserService(props) {
  return (<p>Placeholder</p>)
}

const defaultUser = { isAuth: false }

function resolve(response) {
  return response.json()
}

function reject(response) {
  console.error(response)
  return defaultUser
}

/**
 * Fetches current user from backend server using the cookie set
 * @returns {Promise<*>}
 */
export async function getCurrentUser() {
  return fetch(
    `${process.env.REACT_APP_API_URL}/getCurrentUser`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(resolve, reject)
    .then((data) => {
      if (typeof data !== 'object') {
        return JSON.parse(data)
      } else {
        return data
      }
    })
    .catch((error) => {
      console.error(error)
      return defaultUser
    })
}
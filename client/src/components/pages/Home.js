import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/authContext/authContext'

const Home = () => {
  const { loadUser } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <div>
      Home page
    </div>
  )
}
export default Home
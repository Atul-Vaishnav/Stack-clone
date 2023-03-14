import React from 'react'
import { useLocation } from 'react-router-dom'

import './Users.css'
import UsersList from './UsersList'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'

const Users = () => {

  const location = useLocation();
  
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop : "35px"}}>
          <h1 style={{ fontWeight: "500"}}>Users</h1>
          <UsersList /> 
      </div>
    </div>
  )
}

export default Users
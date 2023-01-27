import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getItem, KEY_ACESS_TOKEN } from '../../utils/localStorageManager'

const OnlyIfNotLoggedIn = () => {
    const user = getItem(KEY_ACESS_TOKEN);
  return (
        user ? <Navigate to="/"/> : <Outlet/>    
  )
}

export default OnlyIfNotLoggedIn

import React from 'react'
import { useUserContext } from './userContext'
import { Outlet, Navigate } from 'react-router-dom'


function ProtectedRoutes() {
     const user = localStorage.getItem('current-user')
     
     return (user?.data.role === 'admin') ? <Outlet/> : <Navigate to='/404'/>
}

export default ProtectedRoutes

import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
function RoutGuard() {
    const isAuth = useSelector(state=>{
       return state.authStore.isAuth;
    });

  return isAuth ? <Outlet/> : <Navigate to  ="/Login"/>
}

export default RoutGuard;
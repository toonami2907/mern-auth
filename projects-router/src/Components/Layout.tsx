import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Footer/Footer'
import AnotherHeader from './Header/Header2'
function Layout() {
  return (
   <>
   <AnotherHeader/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
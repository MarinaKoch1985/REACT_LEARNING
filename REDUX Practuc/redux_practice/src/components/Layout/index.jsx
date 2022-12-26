import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Nav />
        <main>
           <Outlet />
        </main>
        <Footer />
    </div>
  )
}

import * as React from "react"

import NavBar from "../components/interface/NavBar"
import Footer from "../components/interface/Footer"

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout

import * as React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = () => {
  return (
    <nav className="z-50 flex items-center justify-between fixed top-0 w-screen pl-8 pr-10 py-4 bg-violet shadow-md">
      <Link
        to="/"
        className="font-display text-center font-extrabold text-white text-2xl flex justify-center items-center"
      >
        <StaticImage
          src="../../images/logo.svg"
          alt="logo"
          width={30}
          className="mr-2"
        />
        TRYNITY
      </Link>
      <div className="text-blue text-2xl">
        <FontAwesomeIcon icon={faBarsStaggered} />
      </div>
    </nav>
  )
}

export default NavBar

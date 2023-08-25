import * as React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8 mt-4">
      <Link
        to="/"
        className="font-display text-center font-extrabold text-white text-2xl flex justify-center items-center"
      >
        <StaticImage
          src="../../images/logo.svg"
          alt="logo"
          width={50}
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

import { Link } from "gatsby"
import * as React from "react"

const Button = ({ dest, children }) => {
  return (
    <Link
      to={dest}
      className="font-display text-blue text-2xl font-medium px-4 py-1.5 border-8 rounded-2xl border-solid border-blue
      hover:rounded-sm hover:bg-blue hover:text-black transition-all duration-250
      "
    >
      {children}
    </Link>
  )
}

export default Button

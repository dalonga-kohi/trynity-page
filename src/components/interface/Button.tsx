import { Link } from "gatsby"
import * as React from "react"

const clickPlaceholder = (): any => false

const Button = ({ dest, click = clickPlaceholder, children }) => {
  return (
    <Link
      to={dest}
      className="font-display text-blue text-2xl font-bold px-5 py-2.5 border-8 rounded-2xl border-solid border-blue
      hover:rounded-sm hover:bg-blue hover:text-black transition-all duration-250 text-center w-fit
      "
      onClick={click}
    >
      {children}
    </Link>
  )
}

export default Button

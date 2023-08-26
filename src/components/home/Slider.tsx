import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Slider = () => {
  return (
    <div>
      <StaticImage
        src="../../images/lion.png"
        alt="lew w garniturze"
        className="rounded-xl shadow-md mt-8 max-w-xs sm:max-w-md"
        loading="lazy"
      />
    </div>
  )
}

export default Slider

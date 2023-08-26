import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Info = () => {
  return (
    <article className="wrapper items-center justify-start">
      <h2>Rośnij Z Nami</h2>
      <p className="text-center text-xl">
        Wkrocz Na Zupełnie Nowy Poziom Marketingu
      </p>
      <StaticImage src="../../images/logo.svg" alt="tygrys" />
    </article>
  )
}

export default Info

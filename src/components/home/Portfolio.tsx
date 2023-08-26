import * as React from "react"
import Slider from "./Slider"
import Button from "../interface/Button"
import Controls from "../interface/Controls"

const Portfolio = () => {
  return (
    <article className="wrapper items-center justify-start lg:justify-center mt-16">
      <h2>Nasze Portfolio</h2>
      <Slider />
      <Controls />
      <Button dest="/portfolio">Wszystkie Prace</Button>
    </article>
  )
}

export default Portfolio

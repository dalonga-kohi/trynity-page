import * as React from "react"
import Button from "../interface/Button"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { gsap } from "gsap"
import useIsBrowser from "../../hooks/useIsBrowser"

gsap.registerPlugin(ScrollToPlugin)

const Hero = () => {
  let scrollHandler = (): any => false

  if (useIsBrowser()) {
    scrollHandler = () => {
      gsap.to(window, {
        duration: 0.7,
        scrollTo: "#content",
      })
    }
  }

  return (
    <article className="wrapper items-baseline">
      <h1 className="mb-8">
        Osiągnij Sukces Twojej Marki Dzięki Promocji W sieci
      </h1>
      <p className="text-base mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
        pharetra augue. Sed et imperdiet mi, sit amet euismod nisi. Nullam
        euismod ante eu congue sagittis.
      </p>
      <Button dest="" click={scrollHandler.bind(this)}>
        Zobacz Więcej
      </Button>
      <div id="content" />
    </article>
  )
}

export default Hero

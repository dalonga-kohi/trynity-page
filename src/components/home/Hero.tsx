import * as React from "react"
import Button from "../interface/Button"

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-baseline flex-col px-8">
      <h1 className="text-blue font-display font-extrabold text-4xl mb-8">
        Osiągnij Sukces Twojej Marki Dzięki Promocji W sieci
      </h1>
      <p className="text-white font-body text-base mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
        pharetra augue. Sed et imperdiet mi, sit amet euismod nisi. Nullam
        euismod ante eu congue sagittis.
      </p>
      <Button dest="">Zobacz Więcej</Button>
    </div>
  )
}

export default Hero

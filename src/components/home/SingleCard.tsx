import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"

const SingleCard = ({ icon, title, children }) => {
  return (
    <article className="bg-light rounded-lg shadow-md flex flex-col items-center justify-center px-4 py-8 max-w-xs mt-8 lg:mr-8 lg:max-w-md lg:py-16 lg:px-8">
      <FontAwesomeIcon icon={icon} className="text-6xl mb-6 text-blue" />
      <header className="font-display text-center font-bold text-xl text-blue mb-3">
        {title}
      </header>
      <p className="w-11/12 text-center">{children}</p>
    </article>
  )
}

export default SingleCard

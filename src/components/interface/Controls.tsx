import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"

const Controls = () => {
  return (
    <div className="flex w-full justify-center mt-4 mb-8 text-5xl text-blue">
      <FontAwesomeIcon icon={faCaretLeft} className="mr-10" />
      <FontAwesomeIcon icon={faCaretRight} />
    </div>
  )
}

export default Controls

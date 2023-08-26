import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  return (
    <footer className="text-white bg-violet pt-6 pb-4 px-4">
      <h2 className="mb-8">TRYNITY FLOW</h2>
      <div className="">
        <div className="">
          <h3 className="text-blue font-bold text-2xl">
            Informacje Kontaktowe
          </h3>
          <div className="my-2">
            <FontAwesomeIcon icon={faLocationDot} /> Katowice, Śląskie 40-002,
            Polska
          </div>
          <a href="mailto:contakt@trynity.com" className="underline">
            <FontAwesomeIcon icon={faEnvelope} /> contakt@trynity.com
          </a>
          <div className="my-2">
            <FontAwesomeIcon icon={faSquarePhone} /> +48 999 999 999
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          {/* <StaticImage src="../../images/logo.svg" width={60} layout="fixed" alt="logo" className=""/> */}
          <div className="">2023 © Trynity Flow</div>
          <a
            href="https://vizprom.pl/polityka.docx"
            target="blank"
            className=""
          >
            Polityka Prywatności
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

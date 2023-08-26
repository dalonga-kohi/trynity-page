import * as React from "react"
import SingleCard from "./SingleCard"
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons"

const Cards = () => {
  return (
    <section className="wrapper items-center justify-start">
      <h2 className="mb-6">Nasza Oferta</h2>
      <div className="flex flex-col lg:flex-row">
        <SingleCard icon={faPhotoFilm} title="Kampania Reklamowa">
          Tworzymy spersonalizowane strategie, posty, hasła reklamowe
        </SingleCard>
        <SingleCard icon={faPhotoFilm} title="Kampania Reklamowa">
          Tworzymy spersonalizowane strategie, posty, hasła reklamowe
        </SingleCard>
        <SingleCard icon={faPhotoFilm} title="Kampania Reklamowa">
          Tworzymy spersonalizowane strategie, posty, hasła reklamowe
        </SingleCard>
      </div>
    </section>
  )
}

export default Cards

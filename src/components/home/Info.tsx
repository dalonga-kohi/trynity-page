import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Info = () => {
  return (
    <article className="wrapper items-center justify-start">
      <h2>Rośnij Z Nami</h2>
      <p className="text-center text-xl mt-4">
        Wkrocz Na Zupełnie Nowy Poziom Marketingu
      </p>
      <StaticImage
        src="../../images/lion.png"
        alt="lew w garniturze"
        className="rounded-xl shadow-md mt-8"
        loading="lazy"
        width={350}
      />
      <div className="flex w-full justify-center mt-8">
        <div className="text-3xl font-bold flex flex-col items-center text-blue mr-10">
          3+<p className="text-base">Certyfikatów</p>
        </div>
        <div className="text-3xl font-bold flex flex-col items-center text-blue">
          10+<p className="text-base">Kampanii</p>
        </div>
      </div>
    </article>
  )
}

export default Info

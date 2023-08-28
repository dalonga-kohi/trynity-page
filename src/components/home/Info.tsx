import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import useIsBrowser from "../../hooks/useIsBrowser"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Info = () => {
  const comp = React.useRef()
  React.useLayoutEffect(() => {
    if (!useIsBrowser()) return () => {}
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: comp.current,
        start: "-5% center",
      },
      marker: true,
    })

    tl.fromTo(
      document.querySelectorAll(".info-anim"),
      { opacity: 0, y: "+=100" },
      { opacity: 1, y: 0, duration: 0.8, ease: "easeIn", stagger: 0.1 },
    )

    const ctx = gsap.context(() => {}, comp)

    return () => ctx.revert()
  })
  return (
    <article
      className="wrapper items-center justify-start lg:justify-center"
      ref={comp}
    >
      <h2 className="info-anim">Rośnij Z Nami</h2>
      <p className="text-center text-xl mt-4 info-anim">
        Wkrocz Na Zupełnie Nowy Poziom Marketingu
      </p>
      <StaticImage
        src="../../images/lion.png"
        alt="lew w garniturze"
        className="rounded-xl shadow-md mt-8 max-w-xs sm:max-w-md info-anim"
        loading="lazy"
      />
      <div className="flex w-full justify-center mt-8 mb-24">
        <div className="text-3xl font-black flex flex-col items-center text-blue mr-10 info-anim">
          3+<p className="text-base">Certyfikatów</p>
        </div>
        <div className="text-3xl font-black flex flex-col items-center text-blue info-anim">
          10+<p className="text-base">Kampanii</p>
        </div>
      </div>
    </article>
  )
}

export default Info

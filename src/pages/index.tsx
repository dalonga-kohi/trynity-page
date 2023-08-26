import * as React from "react"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO/seo"
import Hero from "../components/home/Hero"
import Info from "../components/home/Info"
import Cards from "../components/home/Cards"

const IndexPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Info />
      <Cards />
    </MainLayout>
  )
}

export const Head = () => <SEO title="Strona Główna" />

export default IndexPage

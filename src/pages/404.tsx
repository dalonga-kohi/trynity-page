import * as React from "react"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <MainLayout>
    <div className="flex h-screen flex-col justify-center items-center text-center">
      <h1>404: Nie znaleziono</h1>
      <Link to="/" className="font-body text-white text-xl underline">
        Wróć na stronę główną
      </Link>
    </div>
  </MainLayout>
)

export const Head = () => {
  return <SEO title="Nie Znaleziono" />
}

export default NotFoundPage

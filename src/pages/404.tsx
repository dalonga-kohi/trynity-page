import * as React from "react"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO/seo"

const NotFoundPage = () => (
  <MainLayout>
    <h1>404: Nie znaleziono</h1>
    <p>Wróć na stronę główną</p>
  </MainLayout>
)

export const Head = () => {
  ;<SEO title="Nie Znaleziono" />
}

export default NotFoundPage

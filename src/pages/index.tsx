import * as React from "react"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO/seo"

const IndexPage = () => <MainLayout>Hello</MainLayout>

export const Head = () => {
    <SEO title="Strona Główna"/>
}

export default IndexPage

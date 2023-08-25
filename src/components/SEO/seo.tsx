import * as React from "react"

const SEO = ({ title }) => {
  return (
    <>
      <html lang="pl" />
      <title>Trynity | {title}</title>
      <meta
        name="description"
        content="Agencja Marketingowa Trynity Flow. Zajmujemy się zarządzaniem kontami w mediach społecznościowych i wykorzystujemy nowoczesne kanały przekazu aby promować twoją markę."
      />
      <meta
        name="keywords"
        content="Marketing Online, Agencja, Trynity Flow, Promocja firmy, Tworzenie Stron"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

export default SEO

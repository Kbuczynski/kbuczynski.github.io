import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { connect } from "react-redux"
import smoothscroll from "smoothscroll-polyfill"

import Header from "../Header"
import { themeLight, themeDark } from "../../utils/themes"
import Footer from "../Footer"
import "aos/dist/aos.css"
import Cursor from "../Cursor"
import { GlobalStyle, StyledMain } from "./style"
import Cube from "../Cube"
import BackToTop from "../BackToTop"

let AOS

const Layout = ({ children, isDarkMode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  useEffect(() => {
    const AOS = require("aos")

    AOS.init({
      offset: 200,
      duration: 200,
      easing: "ease-out-cubic",
      delay: 100,
      once: true,
    })

    smoothscroll.polyfill()
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <GlobalStyle />

      <Cursor />
      <Cube />
      <BackToTop />

      <Header
        siteTitle={data.site.siteMetadata?.title || `Kamil Buczyński Portfolio`}
      />
      <StyledMain>{children}</StyledMain>
      <Footer author={data.site.siteMetadata?.author || `@kbuczynski`} />
    </ThemeProvider>
  )
}

Layout.defaultProps = {
  isDarkMode: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool,
}

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(Layout)

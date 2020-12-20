/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid outtermost px-0">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <hr id="header-line"></hr>

      <div className="row no-gutters">
        <div className="col-2 left-box">
          
        </div>
        <div className="col-8">
          <main className="main-box">{children}</main>
        </div>
        <div className="col-2 right-box">
          
        </div>
      </div>
      
      <hr id="header-line"></hr>

      <Footer />
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

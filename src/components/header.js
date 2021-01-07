import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: `fixed`,
      top: 0,
      left: 0,
      zIndex: 1,
      width: `100vw`,
    }}
  >
    <div style={{ margin: `0 auto`, padding: `1.45rem 1.0875rem`}} >
      <h1 style={{ margin: 0 }} >
        <Link to="/" className="top-link">
          SH
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

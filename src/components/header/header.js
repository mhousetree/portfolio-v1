import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.wrapper}>
    <h1 className={styles.title}>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
    <ul className={styles.globalnav}>
      <li>
        <Link
          to="/works/"
        >
          works
          </Link>
      </li>
      <li>
        <Link
          to="/about/"
        >
          about
          </Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from 'react'

import PropTypes from 'prop-types'

const Navbarmolecule = (props) => {
  return (
    <>
      <div className={`navbarmolecule-menu ${props.rootClassName} `}>
        <div className="navbarmolecule-container">
          <span className="nav-item">MENU</span>
          <span className="nav-item">CONTACTO</span>
          <span className="nav-item">NOSOTROS</span>
        </div>
        <img
          alt="logo de patrono"
          src="/playground_assets/recurso5150x11100-ras3-200h.png"
          className="navbarmolecule-navbar-logo"
        />
        <div className="navbarmolecule-wrapper">
          <span className="nav-item">EXPLORAR</span>
          <span className="nav-item">INGRESAR</span>
        </div>
      </div>
      <style jsx>
        {`
          .navbarmolecule-menu {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
            background-color: var(--dl-color-default-bge7e4d8);
          }
          .navbarmolecule-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .navbarmolecule-navbar-logo {
            width: 68px;
            height: 68px;
            border-color: transparent;
          }
          .navbarmolecule-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  )
}

Navbarmolecule.defaultProps = {
  rootClassName: '',
  navabar: '',
}

Navbarmolecule.propTypes = {
  rootClassName: PropTypes.string,
  navabar: PropTypes.string,
}

export default Navbarmolecule

import React from 'react'

import PropTypes from 'prop-types'

const Titlesecondaryatom = (props) => {
  return (
    <>
      <div className={`titlesecondaryatom-container ${props.rootClassName} `}>
        <div className="titlesecondaryatom-container1">
          <span className="titlesecondaryatom-text">
            &#123;&#123;value&#125;&#125;
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .titlesecondaryatom-container {
            display: flex;
            position: relative;
          }
          .titlesecondaryatom-container1 {
            display: flex;
            flex-direction: column;
          }
          .titlesecondaryatom-text {
            color: var(--dl-color-gray-black);
            height: auto;
            font-size: 48px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Archivo;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-transform: uppercase;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Titlesecondaryatom.defaultProps = {
  rootClassName: '',
}

Titlesecondaryatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default Titlesecondaryatom

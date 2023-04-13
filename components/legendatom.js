import React from 'react'

import PropTypes from 'prop-types'

const Legendatom = (props) => {
  return (
    <>
      <div className={`legendatom-container ${props.rootClassName} `}>
        <span className="legendatom-text">&#123;&#123;text&#125;&#125;</span>
      </div>
      <style jsx>
        {`
          .legendatom-container {
            display: flex;
            position: relative;
          }
          .legendatom-text {
            color: var(--dl-color-default-bge7e4d8);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Archivo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Legendatom.defaultProps = {
  rootClassName: '',
}

Legendatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default Legendatom

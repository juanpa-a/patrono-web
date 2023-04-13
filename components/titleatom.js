import React from 'react'

import PropTypes from 'prop-types'

const Titleatom = (props) => {
  return (
    <>
      <div className={`titleatom-container ${props.rootClassName} `}>
        <div className="titleatom-container1">
          <span className="titleatom-text">&#123;&#123;value&#125;&#125;</span>
        </div>
      </div>
      <style jsx>
        {`
          .titleatom-container {
            display: flex;
            position: relative;
          }
          .titleatom-container1 {
            display: flex;
            flex-direction: column;
          }
          .titleatom-text {
            color: var(--dl-color-default-bge7e4d8);
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

Titleatom.defaultProps = {
  rootClassName: '',
}

Titleatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default Titleatom

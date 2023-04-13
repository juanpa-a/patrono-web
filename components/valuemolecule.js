import React from 'react'

import PropTypes from 'prop-types'

const Valuemolecule = (props) => {
  return (
    <>
      <div className={`valuemolecule-container ${props.rootClassName} `}>
        <span className="valuemolecule-text">{props.header}</span>
        <span className="valuemolecule-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .valuemolecule-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .valuemolecule-text {
            font-size: 24px;
            font-family: Archivo;
          }
          .valuemolecule-text1 {
            font-family: Quattrocento;
          }
          .valuemolecule-root-class-name {
            top: 291px;
            left: 650px;
            position: static;
          }
        `}
      </style>
    </>
  )
}

Valuemolecule.defaultProps = {
  description: '{{description}}',
  rootClassName: '',
  header: '{{header}}',
}

Valuemolecule.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  header: PropTypes.string,
}

export default Valuemolecule

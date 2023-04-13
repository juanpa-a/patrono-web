import React from 'react'

import PropTypes from 'prop-types'

import Buttonatom from './buttonatom'

const Infomolecule = (props) => {
  return (
    <>
      <div className={`infomolecule-container ${props.rootClassName} `}>
        <span className="infomolecule-header">{props.header}</span>
        <span className="infomolecule-description">{props.description}</span>
        <Buttonatom rootClassName="buttonatom-root-class-name"></Buttonatom>
      </div>
      <style jsx>
        {`
          .infomolecule-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .infomolecule-header {
            font-size: 32px;
            font-style: normal;
            font-family: Archivo;
            font-weight: 600;
          }
          .infomolecule-description {
            font-size: 20px;
            font-family: Archivo;
          }
          .infomolecule-root-class-name {
            top: 312px;
            left: 752px;
            position: static;
          }
        `}
      </style>
    </>
  )
}

Infomolecule.defaultProps = {
  rootClassName: '',
  header: '{{header}}',
  description: '{{description}}',
}

Infomolecule.propTypes = {
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
}

export default Infomolecule

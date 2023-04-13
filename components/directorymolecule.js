import React from 'react'

import PropTypes from 'prop-types'

const Directorymolecule = (props) => {
  return (
    <>
      <div className={`directorymolecule-container ${props.rootClassName} `}>
        <div className="directorymolecule-container1">
          <span className="directorymolecule-text">{props.header}</span>
          <span className="directorymolecule-text1">{props.names}</span>
        </div>
      </div>
      <style jsx>
        {`
          .directorymolecule-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .directorymolecule-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .directorymolecule-text {
            font-size: 25px;
            font-family: Archivo;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-twounits);
            text-decoration: underline;
          }
          .directorymolecule-text1 {
            font-style: normal;
            font-family: Archivo;
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

Directorymolecule.defaultProps = {
  rootClassName: '',
  header: 'DIRECTORIO',
  names: '- Alberto Rojas',
}

Directorymolecule.propTypes = {
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  names: PropTypes.string,
}

export default Directorymolecule

import React from 'react'

import PropTypes from 'prop-types'

const ContractCardorganism = (props) => {
  return (
    <>
      <div
        className={`contract-cardorganism-container ${props.rootClassName} `}
      >
        <div className="contract-cardorganism-card">
          <img
            alt={props.Vector5_alt}
            src={props.Vector5_src}
            className="contract-cardorganism-bookmark"
          />
          <img
            alt={props.Recurso3150x1_alt}
            src={props.Recurso3150x1_src}
            className="contract-cardorganism-logo"
          />
          <div className="contract-cardorganism-metadata">
            <span className="contract-cardorganism-date">
              <span>A 26 DE NOVIEMBRE 2021</span>
            </span>
            <span className="contract-cardorganism-type">
              <span>CONTRATO DE ARRENDAMIENTO VEHICULAR</span>
            </span>
            <span className="contract-cardorganism-end-date">
              <span>FINALIZACIÓN DEL CONTRATO: DICIEMBRE 2022</span>
            </span>
          </div>
        </div>
        <div className="contract-cardorganism-container1">
          <img
            alt={props.Ellipse3_alt}
            src={props.Ellipse3_src}
            className="contract-cardorganism-status"
          />
          <span className="contract-cardorganism-name">
            <span>Arrendamiento 26 nov...</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .contract-cardorganism-container {
            width: 165px;
            height: 236px;
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .contract-cardorganism-card {
            top: 1px;
            left: 1px;
            width: 165px;
            height: 203px;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-default-bge7e4d8);
            border-width: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .contract-cardorganism-bookmark {
            width: 19px;
            height: 27px;
            align-self: flex-end;
          }
          .contract-cardorganism-logo {
            width: 85px;
            height: 50px;
            border-color: transparent;
          }
          .contract-cardorganism-metadata {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contract-cardorganism-date {
            color: var(--dl-color-default-b1e1e1e);
            width: 57px;
            height: auto;
            font-size: 3px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Archivo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .contract-cardorganism-type {
            color: var(--dl-color-default-b1e1e1e);
            width: 68px;
            height: auto;
            font-size: 3px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Archivo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .contract-cardorganism-end-date {
            color: var(--dl-color-default-b1e1e1e);
            width: 74px;
            height: auto;
            font-size: 3px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Archivo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .contract-cardorganism-container1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contract-cardorganism-status {
            width: auto;
            height: auto;
            border-color: transparent;
          }
          .contract-cardorganism-name {
            color: var(--dl-color-default-b1e1e1e);
            height: auto;
            font-size: 10px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
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

ContractCardorganism.defaultProps = {
  rootClassName: '',
  Ellipse3_src: '/playground_assets/ellipse31782-ejbe-200h.png',
  Vector5_src: '/playground_assets/vector51769-m5k.svg',
  Recurso3150x1_src: '/playground_assets/recurso3150x11781-c4kc-200h.png',
  Vector5_alt: 'Vector51769',
  Ellipse3_alt: 'Ellipse31782',
  Recurso3150x1_alt: 'Recurso3150x11781',
}

ContractCardorganism.propTypes = {
  rootClassName: PropTypes.string,
  Ellipse3_src: PropTypes.string,
  Vector5_src: PropTypes.string,
  Recurso3150x1_src: PropTypes.string,
  Vector5_alt: PropTypes.string,
  Ellipse3_alt: PropTypes.string,
  Recurso3150x1_alt: PropTypes.string,
}

export default ContractCardorganism

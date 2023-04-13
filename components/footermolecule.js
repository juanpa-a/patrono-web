import React from 'react'

import PropTypes from 'prop-types'

const Footermolecule = (props) => {
  return (
    <>
      <div className={`footermolecule-footer ${props.rootClassName} `}>
        <div className="footermolecule-container">
          <div className="footermolecule-container1"></div>
        </div>
        <span className="footermolecule-body">
          <span>
            aude, hospes, contemnere opes et te quoque dignum | finge deo,
            rebusque veni non asper egenis. (Aen. 8. 364-5)
          </span>
        </span>
        <div className="footermolecule-container2">
          <div className="footermolecule-container3"></div>
        </div>
        <div className="footermolecule-container4">
          <img
            alt={props.Recurso12150x1_alt1}
            src={props.Recurso12150x1_src1}
            className="footermolecule-recurso12150x1"
          />
          <span className="footermolecule-text1">
            <span>Condiciones de uso</span>
          </span>
          <span className="footermolecule-text3">
            <span>Política de privacidad</span>
          </span>
          <span className="footermolecule-text5">
            <span>© 2022 PATRONO. Todos los derechos reservados.</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .footermolecule-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-color: #1e1e1e;
          }
          .footermolecule-container {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .footermolecule-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-white);
            border-style: solid;
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
          }
          .footermolecule-body {
            color: rgba(255, 255, 255, 1);
            height: auto;
            padding: var(--dl-space-space-threeunits);
            font-size: 14px;
            align-self: auto;
            font-style: italic;
            text-align: left;
            font-family: Archivo;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .footermolecule-container2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footermolecule-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-white);
            border-style: solid;
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
          }
          .footermolecule-container4 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footermolecule-recurso12150x1 {
            width: 84px;
            height: 18px;
            border-color: transparent;
          }
          .footermolecule-text1 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 10px;
            align-self: auto;
            font-style: italic;
            text-align: left;
            font-family: Archivo;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .footermolecule-text3 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 10px;
            align-self: auto;
            font-style: italic;
            text-align: left;
            font-family: Archivo;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .footermolecule-text5 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 10px;
            align-self: auto;
            font-style: italic;
            text-align: left;
            font-family: Archivo;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .footermolecule-body {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footermolecule.defaultProps = {
  rootClassName: '',
  Recurso12150x1_alt1: 'Recurso12150x1I191',
  Recurso12150x1_src1: '/playground_assets/recurso12150x1i191-tsjv-200h.png',
}

Footermolecule.propTypes = {
  rootClassName: PropTypes.string,
  Recurso12150x1_alt1: PropTypes.string,
  Recurso12150x1_src1: PropTypes.string,
}

export default Footermolecule

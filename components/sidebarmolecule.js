import React from 'react'

import PropTypes from 'prop-types'

const Sidebarmolecule = (props) => {
  return (
    <>
      <div className={`sidebarmolecule-container ${props.rootClassName} `}>
        <div className="sidebarmolecule-container1">
          <div className="sidebarmolecule-container2">
            <img
              alt={props.IMAGE1150x_alt1}
              src={props.IMAGE1150x_src1}
              className="sidebarmolecule-image1150x"
            />
            <span className="sidebarmolecule-text">ESCRITORIO</span>
          </div>
          <div className="sidebarmolecule-container3">
            <img
              alt={props.IMAGE2150x_alt}
              src={props.IMAGE2150x_src}
              className="sidebarmolecule-image2150x"
            />
            <span className="sidebarmolecule-text1">ARCHIVO</span>
          </div>
          <div className="sidebarmolecule-container4">
            <img
              alt={props.IMAGE3150x_alt1}
              src={props.IMAGE3150x_src1}
              className="sidebarmolecule-image3150x"
            />
            <span className="sidebarmolecule-text2">OBSERVATORIO</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sidebarmolecule-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .sidebarmolecule-container1 {
            gap: var(--dl-space-space-threeunits);
            margin: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sidebarmolecule-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sidebarmolecule-image1150x {
            width: 80px;
            height: 80px;
            border-color: transparent;
          }
          .sidebarmolecule-text {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Archivo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sidebarmolecule-container3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sidebarmolecule-image2150x {
            width: 80px;
            height: 80px;
            border-color: transparent;
          }
          .sidebarmolecule-text1 {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Archivo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sidebarmolecule-container4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sidebarmolecule-image3150x {
            width: 80px;
            height: 80px;
            border-color: transparent;
          }
          .sidebarmolecule-text2 {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Archivo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sidebarmolecule-root-class-name {
            position: static;
          }

          @media (max-width: 991px) {
            .sidebarmolecule-container1 {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Sidebarmolecule.defaultProps = {
  IMAGE2150x_src: '/playground_assets/image2150x1757-5ig4-200h.png',
  IMAGE1150x_alt1: 'IMAGE1150x1742',
  IMAGE3150x_alt1: 'IMAGE3150x1802',
  IMAGE1150x_src1: '/playground_assets/image1150x1742-u1br-200h.png',
  IMAGE2150x_alt: 'IMAGE2150x1757',
  rootClassName: '',
  IMAGE3150x_src1: '/playground_assets/image3150x1802-quhw-200h.png',
}

Sidebarmolecule.propTypes = {
  IMAGE2150x_src: PropTypes.string,
  IMAGE1150x_alt1: PropTypes.string,
  IMAGE3150x_alt1: PropTypes.string,
  IMAGE1150x_src1: PropTypes.string,
  IMAGE2150x_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  IMAGE3150x_src1: PropTypes.string,
}

export default Sidebarmolecule

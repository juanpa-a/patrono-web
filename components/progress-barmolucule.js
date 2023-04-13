import React from 'react'

import PropTypes from 'prop-types'

const ProgressBarmolucule = (props) => {
  return (
    <>
      <div className={`progress-barmolucule-container ${props.rootClassName} `}>
        <div className="progress-barmolucule-container1">
          <div className="progress-barmolucule-container2">
            <span className="progress-barmolucule-step">1</span>
            <img
              alt={props.Rectangle53_alt}
              src={props.Rectangle53_src}
              className="progress-barmolucule-progress-bar"
            />
            <img
              alt={props.Rectangle52_alt}
              src={props.Rectangle52_src}
              className="progress-barmolucule-progress"
            />
          </div>
          <span className="progress-barmolucule-percentage">
            <span>20 % COMPLETADO</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .progress-barmolucule-container {
            width: 100%;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-items: center;
            justify-content: flex-end;
          }
          .progress-barmolucule-container1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-end;
          }
          .progress-barmolucule-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .progress-barmolucule-step {
            color: var(--dl-color-default-b1e1e1e);
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: ExtraBold;
            text-align: left;
            font-family: Archivo;
            font-weight: 800;
            line-height: normal;
            padding-top: 0px;
            font-stretch: normal;
            padding-left: 0px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
            text-decoration: none;
          }
          .progress-barmolucule-progress-bar {
            width: 20%;
            height: 13px;
            border-color: transparent;
          }
          .progress-barmolucule-progress {
            width: 80%;
            height: 13px;
            border-color: rgba(250, 114, 0, 1);
            border-style: solid;
            border-width: 1px;
          }
          .progress-barmolucule-percentage {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 11.868353843688965px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Archivo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .progress-barmolucule-root-class-name {
            position: static;
          }
          .progress-barmolucule-root-class-name1 {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

ProgressBarmolucule.defaultProps = {
  Rectangle52_src: '/playground_assets/rectangle521185-lf41-1200w.png',
  rootClassName: '',
  Rectangle53_src: '/playground_assets/rectangle531186-7ac8-200h.png',
  Rectangle52_alt: 'Rectangle521185',
  Rectangle53_alt: 'Rectangle531186',
}

ProgressBarmolucule.propTypes = {
  Rectangle52_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Rectangle53_src: PropTypes.string,
  Rectangle52_alt: PropTypes.string,
  Rectangle53_alt: PropTypes.string,
}

export default ProgressBarmolucule

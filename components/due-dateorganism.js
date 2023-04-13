import React from 'react'

import PropTypes from 'prop-types'

import Buttonatom from './buttonatom'

const DueDateorganism = (props) => {
  return (
    <>
      <div className={`due-dateorganism-container ${props.rootClassName} `}>
        <div className="due-dateorganism-container1">
          <div className="due-dateorganism-container2">
            <span className="due-dateorganism-text">{props.day}</span>
            <span className="due-dateorganism-text1">{props.month}</span>
          </div>
          <div className="due-dateorganism-container3">
            <span className="due-dateorganism-text2">
              Su siguiente obligación de pago / cobro está programada para el
              día:
            </span>
            <Buttonatom rootClassName="buttonatom-root-class-name1"></Buttonatom>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .due-dateorganism-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .due-dateorganism-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .due-dateorganism-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-color: #e7e4d8;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .due-dateorganism-text {
            font-size: 75px;
            font-family: Archivo;
          }
          .due-dateorganism-text1 {
            font-style: normal;
            font-weight: 600;
          }
          .due-dateorganism-container3 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 200px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }
          .due-dateorganism-text2 {
            text-align: left;
          }
        `}
      </style>
    </>
  )
}

DueDateorganism.defaultProps = {
  rootClassName: '',
  month: 'FEB',
  day: '20',
}

DueDateorganism.propTypes = {
  rootClassName: PropTypes.string,
  month: PropTypes.string,
  day: PropTypes.string,
}

export default DueDateorganism

import React from 'react'

import PropTypes from 'prop-types'

const PaymentsGraphmolecule = (props) => {
  return (
    <>
      <div
        className={`payments-graphmolecule-container ${props.rootClassName} `}
      >
        <div className="payments-graphmolecule-container01">
          <span>{props.text}</span>
          <div className="payments-graphmolecule-container02">
            <div className="payments-graphmolecule-container03"></div>
            <div className="payments-graphmolecule-container04"></div>
            <div className="payments-graphmolecule-container05"></div>
            <div className="payments-graphmolecule-container06"></div>
            <div className="payments-graphmolecule-container07"></div>
            <div className="payments-graphmolecule-container08"></div>
            <div className="payments-graphmolecule-container09"></div>
            <div className="payments-graphmolecule-container10"></div>
            <div className="payments-graphmolecule-container11"></div>
            <div className="payments-graphmolecule-container12"></div>
            <div className="payments-graphmolecule-container13"></div>
            <div className="payments-graphmolecule-container14"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .payments-graphmolecule-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .payments-graphmolecule-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .payments-graphmolecule-container02 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-end;
          }
          .payments-graphmolecule-container03 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-medium);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container04 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-large);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container05 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container06 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-medium);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container07 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container08 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-medium);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container09 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-xlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container10 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-medium);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container11 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-xlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container12 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-large);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container13 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
          .payments-graphmolecule-container14 {
            flex: 1;
            width: auto;
            height: var(--dl-size-size-medium);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbd8cc;
          }
        `}
      </style>
    </>
  )
}

PaymentsGraphmolecule.defaultProps = {
  rootClassName: '',
  text: 'Proyección estimada de cobros',
}

PaymentsGraphmolecule.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default PaymentsGraphmolecule

import React from 'react'

import PropTypes from 'prop-types'

const Questionmolecule = (props) => {
  return (
    <>
      <div className="questionmolecule-container">
        <div className="questionmolecule-container1">
          <div className="questionmolecule-container2">
            <span className="questionmolecule-text">{props.number}</span>
            <span className="questionmolecule-text1">{props.question}</span>
          </div>
          <span className="questionmolecule-text2">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .questionmolecule-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .questionmolecule-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .questionmolecule-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
          }
          .questionmolecule-text {
            font-size: 18px;
            font-family: Quattrocento;
            line-height: 0.6;
          }
          .questionmolecule-text1 {
            font-size: 16px;
            font-style: normal;
            font-family: Archivo;
            font-weight: 500;
          }
          .questionmolecule-text2 {
            font-size: 10px;
            font-family: Archivo;
            padding-left: var(--dl-space-space-unit);
            padding-right: 0px;
          }
        `}
      </style>
    </>
  )
}

Questionmolecule.defaultProps = {
  number: 'I.',
  description: '{{description}}',
  question: '{{question}}',
}

Questionmolecule.propTypes = {
  number: PropTypes.string,
  description: PropTypes.string,
  question: PropTypes.string,
}

export default Questionmolecule

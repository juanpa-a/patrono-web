import React from 'react'

import PropTypes from 'prop-types'

const Buttonsecondaryatom = (props) => {
  return (
    <>
      <div
        className={`buttonsecondaryatom-container button ${props.rootClassName} `}
      >
        <span className="buttonsecondaryatom-text">
          <span>{props.text}</span>
        </span>
      </div>
      <style jsx>
        {`
          .buttonsecondaryatom-container {
            display: flex;
            padding: 0px;
            position: relative;
            align-items: center;
            border-width: 0px;
            border-radius: 20px;
            justify-content: center;
            background-color: var(--dl-color-default-nfa7200);
          }
          .buttonsecondaryatom-text {
            color: var(--dl-color-default-bge7e4d8);
            width: 130px;
            height: auto;
            padding: var(--dl-space-space-halfunit);
            font-size: 11.868353843688965px;
            align-self: center;
            font-style: Medium;
            text-align: center;
            font-family: Archivo Expanded;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            border-radius: 20px;
            text-transform: uppercase;
            text-decoration: none;
            background-color: var(--dl-color-default-nfa7200);
          }

          @media (max-width: 991px) {
            .buttonsecondaryatom-container {
              width: 130px;
              border: unset;
              height: 40px;
              border-radius: 20px;
              background-color: var(--dl-color-default-nfa7200);
            }
          }
        `}
      </style>
    </>
  )
}

Buttonsecondaryatom.defaultProps = {
  text: '{{text}}',
  rootClassName: '',
}

Buttonsecondaryatom.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buttonsecondaryatom

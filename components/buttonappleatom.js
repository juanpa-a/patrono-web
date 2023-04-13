import React from 'react'

import PropTypes from 'prop-types'

const Buttonappleatom = (props) => {
  return (
    <>
      <div
        className={`buttonappleatom-container button ${props.rootClassName} `}
      >
        <span className="buttonappleatom-text">
          <span>{props.text}</span>
        </span>
      </div>
      <style jsx>
        {`
          .buttonappleatom-container {
            width: 130px;
            display: flex;
            padding: 0px;
            position: relative;
            align-items: center;
            border-width: 0px;
            border-radius: 20px;
            padding-right: 0px;
            justify-content: center;
            background-color: #1e1e1e;
          }
          .buttonappleatom-text {
            color: var(--dl-color-default-bge7e4d8);
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
            text-transform: uppercase;
            text-decoration: none;
          }

          @media (max-width: 991px) {
            .buttonappleatom-container {
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

Buttonappleatom.defaultProps = {
  text: '{{text}}',
  rootClassName: '',
}

Buttonappleatom.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buttonappleatom

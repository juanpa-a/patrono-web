import React from 'react'

import PropTypes from 'prop-types'

const Buttonternaryatom = (props) => {
  return (
    <>
      <div
        className={`buttonternaryatom-container button ${props.rootClassName} `}
      >
        <span className="buttonternaryatom-text">
          <span>{props.text}</span>
        </span>
      </div>
      <style jsx>
        {`
          .buttonternaryatom-container {
            width: 130px;
            display: flex;
            padding: 0px;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-default-nfa7200);
            border-style: solid;
            border-width: 1px;
            border-radius: 20px;
            justify-content: center;
            background-color: transparent;
          }
          .buttonternaryatom-text {
            color: var(--dl-color-gray-black);
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
            .buttonternaryatom-container {
              width: 130px;
              height: 40px;
              border-color: var(--dl-color-default-nfa7200);
              border-style: solid;
              border-width: 2px;
              border-radius: 20px;
            }
          }
          @media (max-width: 479px) {
            .buttonternaryatom-container {
              border-color: transparent;
              border-width: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Buttonternaryatom.defaultProps = {
  text: '{{text}}',
  rootClassName: '',
}

Buttonternaryatom.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buttonternaryatom

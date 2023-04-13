import React from 'react'

import PropTypes from 'prop-types'

const Buttonatom = (props) => {
  return (
    <>
      <div className={`buttonatom-container button ${props.rootClassName} `}>
        <span className="buttonatom-text">
          <span>{props.text}</span>
        </span>
      </div>
      <style jsx>
        {`
          .buttonatom-container {
            display: flex;
            padding: 0px;
            position: relative;
            align-items: center;
            border-width: 0px;
            border-radius: 20px;
            justify-content: center;
            background-color: #e7e4d8;
          }
          .buttonatom-text {
            color: var(--dl-color-gray-black);
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
            background-color: #e7e4d8;
          }

          @media (max-width: 991px) {
            .buttonatom-container {
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

Buttonatom.defaultProps = {
  rootClassName: '',
  text: '{{text}}',
}

Buttonatom.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Buttonatom

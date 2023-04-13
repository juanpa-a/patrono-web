import React from 'react'

import PropTypes from 'prop-types'

const Inputatom = (props) => {
  return (
    <>
      <div className={`inputatom-container ${props.rootClassName} `}>
        <div className="inputatom-container1">
          <span className="inputatom-text">{props.label}</span>
          <input
            type="text"
            placeholder={props.value}
            className="inputatom-textinput input"
          />
        </div>
      </div>
      <style jsx>
        {`
          .inputatom-container {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .inputatom-container1 {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .inputatom-text {
            color: var(--dl-color-gray-black);
            padding: var(--dl-space-space-halfunit);
            font-style: normal;
            text-align: left;
            font-family: Archivo;
            font-weight: 500;
          }
          .inputatom-textinput {
            width: 100%;
            border-color: #e7e4d8;
            border-radius: 20px;
            background-color: transparent;
          }
          .inputatom-root-class-name {
            width: 100%;
          }
          .inputatom-root-class-name1 {
            top: 335px;
            left: 454px;
            position: absolute;
          }
          .inputatom-root-class-name2 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .inputatom-root-class-name3 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .inputatom-root-class-name4 {
            top: 0px;
            left: 0px;
            position: static;
          }
          .inputatom-root-class-name5 {
            top: 0px;
            left: 0px;
            position: static;
          }
          .inputatom-root-class-name6 {
            top: 0px;
            left: 0px;
            position: static;
          }
          .inputatom-root-class-name7 {
            top: 0px;
            left: 0px;
            position: static;
          }
          .inputatom-root-class-name8 {
            top: 0px;
            left: 0px;
            position: static;
          }
          .inputatom-root-class-name9 {
            top: 0px;
            left: 0px;
            position: static;
          }
        `}
      </style>
    </>
  )
}

Inputatom.defaultProps = {
  value: '{{value}}',
  label: '{{label}}',
  rootClassName: '',
}

Inputatom.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Inputatom

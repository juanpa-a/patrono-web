import React from 'react'

import PropTypes from 'prop-types'

const Stepatom = (props) => {
  return (
    <>
      <div className="stepatom-container">
        <span className="stepatom-text">{props.step}</span>
      </div>
      <style jsx>
        {`
          .stepatom-container {
            display: flex;
            position: relative;
          }
          .stepatom-text {
            color: var(--dl-color-default-nfa7200);
            font-size: 20px;
            font-style: normal;
            font-family: Archivo;
            font-weight: 800;
          }
        `}
      </style>
    </>
  )
}

Stepatom.defaultProps = {
  step: '01',
}

Stepatom.propTypes = {
  step: PropTypes.string,
}

export default Stepatom

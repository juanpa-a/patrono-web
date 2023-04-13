import React from 'react'

import PropTypes from 'prop-types'

const Timestampatom = (props) => {
  return (
    <>
      <div className={`timestampatom-container ${props.rootClassName} `}>
        <span className="timestampatom-text">
          PATRONO // &#123;&#123;date&#125;&#125;
        </span>
      </div>
      <style jsx>
        {`
          .timestampatom-container {
            display: flex;
            position: relative;
          }
          .timestampatom-text {
            color: rgb(0, 0, 0);
            height: auto;
            position: relative;
            font-size: 11.8684px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Archivo Expanded;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Timestampatom.defaultProps = {
  rootClassName: '',
}

Timestampatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default Timestampatom

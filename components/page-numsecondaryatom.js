import React from 'react'

import PropTypes from 'prop-types'

const PageNumsecondaryatom = (props) => {
  return (
    <>
      <div
        className={`page-numsecondaryatom-container ${props.rootClassName} `}
      >
        <span className="page-numsecondaryatom-text">
          <span>I.</span>
        </span>
      </div>
      <style jsx>
        {`
          .page-numsecondaryatom-container {
            display: flex;
            position: relative;
          }
          .page-numsecondaryatom-text {
            color: #e7e4d8;
            height: auto;
            position: relative;
            font-size: 128px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Quattrocento;
            font-weight: 400;
            line-height: 0.6;
            font-stretch: normal;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .page-numsecondaryatom-text {
              line-height: 0.6;
            }
          }
        `}
      </style>
    </>
  )
}

PageNumsecondaryatom.defaultProps = {
  rootClassName: '',
}

PageNumsecondaryatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default PageNumsecondaryatom

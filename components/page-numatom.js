import React from 'react'

import PropTypes from 'prop-types'

const PageNumatom = (props) => {
  return (
    <>
      <div className={`page-numatom-container ${props.rootClassName} `}>
        <span className="page-numatom-text">
          <span>I.</span>
        </span>
      </div>
      <style jsx>
        {`
          .page-numatom-container {
            display: flex;
            position: relative;
          }
          .page-numatom-text {
            color: rgba(0, 0, 0, 1);
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
            .page-numatom-text {
              line-height: 0.6;
            }
            .page-numatom-root-class-name {
              flex: 1;
            }
          }
        `}
      </style>
    </>
  )
}

PageNumatom.defaultProps = {
  rootClassName: '',
}

PageNumatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default PageNumatom

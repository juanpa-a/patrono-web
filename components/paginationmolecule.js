import React from 'react'

import PropTypes from 'prop-types'

import PageNumatom from './page-numatom'

const Paginationmolecule = (props) => {
  return (
    <>
      <div className={`paginationmolecule-container ${props.rootClassName} `}>
        <div className="paginationmolecule-container1">
          <div className="paginationmolecule-wrapper">
            <div className="paginationmolecule-stamp">
              <span className="paginationmolecule-text">{props.date}</span>
              <span className="paginationmolecule-text1">
                PATRONO // LEGAL TECH
              </span>
            </div>
            <div className="paginationmolecule-divider"></div>
          </div>
          <div className="paginationmolecule-page-num-wrapper">
            <PageNumatom rootClassName="page-numatom-root-class-name1"></PageNumatom>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .paginationmolecule-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .paginationmolecule-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
          }
          .paginationmolecule-wrapper {
            flex: 1;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .paginationmolecule-stamp {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .paginationmolecule-text {
            color: var(--dl-color-gray-black);
            text-transform: uppercase;
          }
          .paginationmolecule-text1 {
            color: var(--dl-color-gray-black);
          }
          .paginationmolecule-divider {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-default-nfa7200);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .paginationmolecule-page-num-wrapper {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 767px) {
            .paginationmolecule-container {
              width: 100%;
              height: 100%;
            }
            .paginationmolecule-wrapper {
              align-self: flex-end;
            }
            .paginationmolecule-text {
              color: #e7e4d8;
              font-family: Archivo;
              text-transform: uppercase;
            }
            .paginationmolecule-text1 {
              color: rgb(231, 228, 216);
            }
          }
          @media (max-width: 479px) {
            .paginationmolecule-container1 {
              align-items: flex-end;
              justify-content: space-between;
            }
            .paginationmolecule-wrapper {
              align-items: flex-start;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Paginationmolecule.defaultProps = {
  date: '{{date}}',
  rootClassName: '',
}

Paginationmolecule.propTypes = {
  date: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Paginationmolecule

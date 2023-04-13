import React from 'react'

import PropTypes from 'prop-types'

import PageNumsecondaryatom from './page-numsecondaryatom'

const Paginationsecondarymolecule = (props) => {
  return (
    <>
      <div
        className={`paginationsecondarymolecule-container ${props.rootClassName} `}
      >
        <div className="paginationsecondarymolecule-container1">
          <div className="paginationsecondarymolecule-wrapper">
            <div className="paginationsecondarymolecule-stamp">
              <span className="paginationsecondarymolecule-text">
                {props.date}
              </span>
              <span className="paginationsecondarymolecule-text1">
                PATRONO // LEGAL TECH
              </span>
            </div>
            <div className="paginationsecondarymolecule-divider"></div>
          </div>
          <div className="paginationsecondarymolecule-page-num-wrapper">
            <PageNumsecondaryatom rootClassName="page-numsecondaryatom-root-class-name"></PageNumsecondaryatom>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .paginationsecondarymolecule-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .paginationsecondarymolecule-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
          }
          .paginationsecondarymolecule-wrapper {
            flex: 1;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .paginationsecondarymolecule-stamp {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .paginationsecondarymolecule-text {
            color: #e7e4d8;
            text-transform: uppercase;
          }
          .paginationsecondarymolecule-text1 {
            color: #e7e4d8;
          }
          .paginationsecondarymolecule-divider {
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
          .paginationsecondarymolecule-page-num-wrapper {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 767px) {
            .paginationsecondarymolecule-container {
              width: 100%;
              height: 100%;
            }
            .paginationsecondarymolecule-wrapper {
              align-self: flex-end;
            }
            .paginationsecondarymolecule-text {
              color: #e7e4d8;
              font-family: Archivo;
              text-transform: uppercase;
            }
            .paginationsecondarymolecule-text1 {
              color: rgb(231, 228, 216);
            }
          }
          @media (max-width: 479px) {
            .paginationsecondarymolecule-container1 {
              align-items: flex-end;
              justify-content: space-between;
            }
            .paginationsecondarymolecule-wrapper {
              align-items: flex-start;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Paginationsecondarymolecule.defaultProps = {
  date: '{{date}}',
  rootClassName: '',
}

Paginationsecondarymolecule.propTypes = {
  date: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Paginationsecondarymolecule

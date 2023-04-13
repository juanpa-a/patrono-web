import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import Titleatom from '../components/titleatom'
import Valuemolecule from '../components/valuemolecule'
import Paginationmolecule from '../components/paginationmolecule'

const Values = (props) => {
  return (
    <>
      <div className="values-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="values-container1">
          <Navbarmolecule rootClassName="navbarmolecule-root-class-name8"></Navbarmolecule>
          <div className="values-wrapper">
            <div className="values-main-wrapper">
              <div className="values-illustration">
                <Titleatom rootClassName="titleatom-root-class-name1"></Titleatom>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="values-image"
                />
              </div>
              <div className="values-description">
                <Valuemolecule rootClassName="valuemolecule-root-class-name"></Valuemolecule>
              </div>
            </div>
            <Paginationmolecule rootClassName="paginationmolecule-root-class-name1"></Paginationmolecule>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .values-container {
            min-height: 100vh;
          }
          .values-container1 {
            width: 100%;
            height: 899px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-default-bgf2f0ee);
          }
          .values-wrapper {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .values-main-wrapper {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .values-illustration {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .values-image {
            width: 100px;
            object-fit: cover;
          }
          .values-description {
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Values

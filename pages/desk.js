import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import Sidebarmolecule from '../components/sidebarmolecule'
import Infomolecule from '../components/infomolecule'
import Footermolecule from '../components/footermolecule'

const Desk = (props) => {
  return (
    <>
      <div className="desk-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="desk-container1">
          <Navbarmolecule rootClassName="navbarmolecule-root-class-name6"></Navbarmolecule>
          <div className="desk-container2">
            <Sidebarmolecule rootClassName="sidebarmolecule-root-class-name1"></Sidebarmolecule>
            <div className="desk-wrapper">
              <div className="desk-container3">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="desk-image"
                />
              </div>
              <div className="desk-container4">
                <Infomolecule rootClassName="infomolecule-root-class-name"></Infomolecule>
              </div>
            </div>
          </div>
          <Footermolecule rootClassName="footermolecule-root-class-name3"></Footermolecule>
        </div>
      </div>
      <style jsx>
        {`
          .desk-container {
            min-height: 100vh;
          }
          .desk-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-bgf2f0ee);
          }
          .desk-container2 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .desk-wrapper {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            justify-content: flex-start;
          }
          .desk-container3 {
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .desk-image {
            width: 100px;
            object-fit: cover;
          }
          .desk-container4 {
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Desk

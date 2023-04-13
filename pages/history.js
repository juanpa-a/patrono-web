import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import ProgressBarmolucule from '../components/progress-barmolucule'
import Titlesecondaryatom from '../components/titlesecondaryatom'
import Buttonsecondaryatom from '../components/buttonsecondaryatom'
import Buttonternaryatom from '../components/buttonternaryatom'
import Footermolecule from '../components/footermolecule'

const History = (props) => {
  return (
    <>
      <div className="history-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="history-container1">
          <Navbarmolecule rootClassName="navbarmolecule-root-class-name7"></Navbarmolecule>
          <div className="history-container2">
            <ProgressBarmolucule rootClassName="progress-barmolucule-root-class-name1"></ProgressBarmolucule>
            <div className="history-wrapper">
              <div className="history-illustration-wrapper">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="history-image"
                />
              </div>
              <div className="history-history-wrapper">
                <Titlesecondaryatom rootClassName="titlesecondaryatom-root-class-name1"></Titlesecondaryatom>
                <span className="history-text">Text</span>
                <div className="history-actions">
                  <Buttonsecondaryatom rootClassName="buttonsecondaryatom-root-class-name3"></Buttonsecondaryatom>
                  <Buttonternaryatom rootClassName="buttonternaryatom-root-class-name2"></Buttonternaryatom>
                </div>
              </div>
            </div>
          </div>
          <Footermolecule rootClassName="footermolecule-root-class-name4"></Footermolecule>
        </div>
      </div>
      <style jsx>
        {`
          .history-container {
            min-height: 100vh;
          }
          .history-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-bgf2f0ee);
          }
          .history-container2 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .history-wrapper {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .history-illustration-wrapper {
            flex: 1;
            width: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .history-image {
            width: 100px;
            object-fit: cover;
          }
          .history-history-wrapper {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .history-text {
            font-family: Quattrocento;
          }
          .history-actions {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default History

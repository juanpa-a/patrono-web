import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import Sidebarmolecule from '../components/sidebarmolecule'
import ContractCardorganism from '../components/contract-cardorganism'
import Footermolecule from '../components/footermolecule'

const Archive = (props) => {
  return (
    <>
      <div className="archive-container">
        <Head>
          <title>exported project</title>
        </Head>
        <Navbarmolecule rootClassName="navbarmolecule-root-class-name3"></Navbarmolecule>
        <div className="archive-container1">
          <div className="archive-sidebar-wrapper">
            <Sidebarmolecule rootClassName="sidebarmolecule-root-class-name"></Sidebarmolecule>
          </div>
          <div className="archive-container2">
            <div className="archive-pinned-contracts">
              <div className="archive-pinned">
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              </div>
              <div className="archive-note">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="archive-image"
                />
                <span className="archive-text">
                  <span>
                    La
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="archive-text2">Eneida</span>
                  <span> se convirtió en un texto</span>
                  <br></br>
                  <span> estándar en los planes de estudio</span>
                  <br></br>
                  <span> de los romanos letrados.</span>
                </span>
              </div>
            </div>
            <div className="archive-recent-contracts">
              <div className="archive-recent">
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              </div>
            </div>
          </div>
        </div>
        <Footermolecule rootClassName="footermolecule-root-class-name2"></Footermolecule>
      </div>
      <style jsx>
        {`
          .archive-container {
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .archive-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: flex-start;
            background-color: var(--dl-color-default-bgf2f0ee);
          }
          .archive-sidebar-wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .archive-container2 {
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .archive-pinned-contracts {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .archive-pinned {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
          }
          .archive-note {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
          }
          .archive-image {
            width: 100px;
            object-fit: cover;
          }
          .archive-text {
            padding: var(--dl-space-space-oneandhalfunits);
            font-size: 20px;
            text-align: center;
            font-family: Archivo;
          }
          .archive-text2 {
            font-style: normal;
            font-weight: 600;
          }
          .archive-recent-contracts {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .archive-recent {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Archive

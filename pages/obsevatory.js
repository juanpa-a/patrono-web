import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import Sidebarmolecule from '../components/sidebarmolecule'
import DueDateorganism from '../components/due-dateorganism'
import Directorymolecule from '../components/directorymolecule'
import PaymentsGraphmolecule from '../components/payments-graphmolecule'
import ContractCardorganism from '../components/contract-cardorganism'
import Footermolecule from '../components/footermolecule'

const Obsevatory = (props) => {
  return (
    <>
      <div className="obsevatory-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="obsevatory-container1">
          <Navbarmolecule rootClassName="navbarmolecule-root-class-name9"></Navbarmolecule>
          <div className="obsevatory-observatory-wrapper">
            <Sidebarmolecule rootClassName="sidebarmolecule-root-class-name2"></Sidebarmolecule>
            <div className="obsevatory-main-wrapper">
              <div className="obsevatory-info-wrapper">
                <DueDateorganism rootClassName="due-dateorganism-root-class-name"></DueDateorganism>
                <Directorymolecule rootClassName="directorymolecule-root-class-name"></Directorymolecule>
              </div>
              <div className="obsevatory-analytics-wrapper">
                <PaymentsGraphmolecule rootClassName="payments-graphmolecule-root-class-name"></PaymentsGraphmolecule>
                <div className="obsevatory-recent-contracts">
                  <ContractCardorganism rootClassName="contract-cardorganism-root-class-name13"></ContractCardorganism>
                  <ContractCardorganism rootClassName="contract-cardorganism-root-class-name13"></ContractCardorganism>
                  <ContractCardorganism rootClassName="contract-cardorganism-root-class-name13"></ContractCardorganism>
                </div>
              </div>
            </div>
          </div>
          <Footermolecule rootClassName="footermolecule-root-class-name5"></Footermolecule>
        </div>
      </div>
      <style jsx>
        {`
          .obsevatory-container {
            min-height: 100vh;
          }
          .obsevatory-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 1210px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .obsevatory-observatory-wrapper {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
          }
          .obsevatory-main-wrapper {
            flex: 1;
            width: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .obsevatory-info-wrapper {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .obsevatory-analytics-wrapper {
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .obsevatory-recent-contracts {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Obsevatory

import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import Stepatom from '../components/stepatom'
import Titleatom from '../components/titleatom'
import Buttonsecondaryatom from '../components/buttonsecondaryatom'
import Buttonternaryatom from '../components/buttonternaryatom'
import Paginationsecondarymolecule from '../components/paginationsecondarymolecule'
import Footermolecule from '../components/footermolecule'

const Prelude = (props) => {
  return (
    <>
      <div className="prelude-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="prelude-container1">
          <Navbarmolecule rootClassName="navbarmolecule-root-class-name4"></Navbarmolecule>
          <div className="prelude-background">
            <Stepatom></Stepatom>
            <div className="prelude-container2">
              <Titleatom rootClassName="titleatom-root-class-name"></Titleatom>
              <div className="prelude-container3">
                <Buttonsecondaryatom rootClassName="buttonsecondaryatom-root-class-name2"></Buttonsecondaryatom>
                <Buttonternaryatom rootClassName="buttonternaryatom-root-class-name1"></Buttonternaryatom>
              </div>
            </div>
            <Paginationsecondarymolecule rootClassName="paginationsecondarymolecule-root-class-name"></Paginationsecondarymolecule>
          </div>
          <Footermolecule rootClassName="footermolecule-root-class-name8"></Footermolecule>
        </div>
      </div>
      <style jsx>
        {`
          .prelude-container {
            min-height: 100vh;
          }
          .prelude-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-default-bf0eeeb);
          }
          .prelude-background {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/playground_assets/patrono0311694-jo-200h.png');
            background-position: center;
          }
          .prelude-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prelude-container3 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Prelude

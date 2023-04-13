import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import Titleatom from '../components/titleatom'
import Paragraphatom from '../components/paragraphatom'
import Buttonsecondaryatom from '../components/buttonsecondaryatom'
import Legendatom from '../components/legendatom'
import Priceatom from '../components/priceatom'
import Footermolecule from '../components/footermolecule'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="about-container1">
          <Navbarmolecule rootClassName="navbarmolecule-root-class-name2"></Navbarmolecule>
          <div className="about-background">
            <div className="about-main-container">
              <div className="about-main-wrapper">
                <Titleatom></Titleatom>
                <div className="about-divider"></div>
                <Paragraphatom></Paragraphatom>
                <Buttonsecondaryatom
                  text="CONFIGURAR"
                  rootClassName="buttonsecondaryatom-root-class-name1"
                ></Buttonsecondaryatom>
                <Legendatom></Legendatom>
              </div>
              <div className="about-price-wrapper">
                <Priceatom></Priceatom>
                <Legendatom rootClassName="legendatom-root-class-name"></Legendatom>
              </div>
            </div>
          </div>
          <Footermolecule rootClassName="footermolecule-root-class-name1"></Footermolecule>
        </div>
      </div>
      <style jsx>
        {`
          .about-container {
            min-height: 100vh;
          }
          .about-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-default-bgf2f0ee);
          }
          .about-background {
            width: 100%;
            height: 100vh;
            padding: var(--dl-space-space-threeunits);
            border-color: transparent;
            background-size: cover;
            background-image: url('/playground_assets/patrono011115-o97k-1500h.png');
            background-position: center;
          }
          .about-main-container {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-main-wrapper {
            gap: var(--dl-space-space-twounits);
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-divider {
            width: 37px;
            height: 0px;
            display: flex;
            align-items: center;
            border-color: #e7e4d8;
            border-style: solid;
            border-width: 1px;
            justify-content: flex-end;
          }
          .about-price-wrapper {
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default About

import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import Buttonsecondaryatom from '../components/buttonsecondaryatom'
import Buttonternaryatom from '../components/buttonternaryatom'
import Footermolecule from '../components/footermolecule'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="home-container1">
          <Navbarmolecule rootClassName="navbarmolecule-root-class-name1"></Navbarmolecule>
          <div className="home-main">
            <div className="home-wrapper">
              <span className="home-title">
                <span className="home-text">
                  <span>El contrato</span>
                  <br></br>
                  <span></span>
                </span>
                <span>que no conoce fronteras.</span>
              </span>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image"
              />
              <span className="home-subtitle">
                <span>
                  Introduciendo a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Eneas</span>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  el contrato de arrendamiento que puedes configurar en línea en
                  minutos.
                </span>
              </span>
              <div className="home-actions">
                <Buttonsecondaryatom
                  text="DESCUBRIR"
                  rootClassName="buttonsecondaryatom-root-class-name"
                ></Buttonsecondaryatom>
                <Buttonternaryatom
                  text="CONFIGURAR"
                  rootClassName="buttonternaryatom-root-class-name"
                ></Buttonternaryatom>
              </div>
            </div>
          </div>
          <video
            src
            loop
            muted
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            autoPlay
            className="home-video"
          ></video>
          <Footermolecule rootClassName="footermolecule-root-class-name"></Footermolecule>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            min-height: 100vh;
          }
          .home-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-default-bgf2f0ee);
          }
          .home-main {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/patrono021136-mcav-1500h.png');
            background-position: center;
          }
          .home-wrapper {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-title {
            color: var(--dl-color-default-bge7e4d8);
            height: auto;
            font-size: 32px;
            align-self: auto;
            font-style: SemiBold;
            text-align: center;
            font-family: Archivo;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-text {
            font-weight: 600;
          }
          .home-image {
            width: 100px;
            object-fit: cover;
          }
          .home-subtitle {
            color: var(--dl-color-default-bge7e4d8);
            width: 395px;
            height: auto;
            font-size: 16px;
            align-self: auto;
            text-align: center;
            font-family: Archivo;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-video {
            width: auto;
            height: 100vh;
            align-self: center;
          }
          @media (max-width: 991px) {
            .home-main {
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

import React from 'react'
import Head from 'next/head'

const SplashScreen = (props) => {
  return (
    <>
      <div className="splash-screen-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="splash-screen-container1">
          <img
            alt="Recurso2150x1127"
            src="/playground_assets/recurso2150x1127-2qr8-500w.png"
            className="splash-screen-illustration-splash-left"
          />
          <div className="splash-screen-frame3">
            <span className="splash-screen-text"> </span>
            <img
              alt="Recurso3150x1129"
              src="/playground_assets/recurso3150x1129-osto-200h.png"
              className="splash-screen-splash-logo"
            />
            <span className="splash-screen-text1">
              <span>© 2022 PATRONO. Todos los derechos reservados.</span>
            </span>
          </div>
          <img
            alt="Recurso1150x1128"
            src="/playground_assets/recurso1150x1128-3n8e-500w.png"
            className="splash-screen-illustration-splash-right"
          />
        </div>
      </div>
      <style jsx>
        {`
          .splash-screen-container {
            min-height: 100vh;
          }
          .splash-screen-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: space-between;
            background-color: var(--dl-color-default-bge7e4d8);
          }
          .splash-screen-illustration-splash-left {
            width: 454px;
            align-self: flex-end;
            border-color: transparent;
          }
          .splash-screen-frame3 {
            width: 291px;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-twounits);
            border-color: transparent;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .splash-screen-text {
            color: var(--dl-color-default-b1e1e1e);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .splash-screen-splash-logo {
            width: 278px;
            height: 166px;
            border-color: transparent;
          }
          .splash-screen-text1 {
            color: var(--dl-color-default-b1e1e1e);
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .splash-screen-illustration-splash-right {
            width: 437px;
            height: 451px;
            align-self: flex-end;
            border-color: transparent;
          }
        `}
      </style>
    </>
  )
}

export default SplashScreen

import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import Inputatom from '../components/inputatom'
import Buttongoogleatom from '../components/buttongoogleatom'
import Buttonappleatom from '../components/buttonappleatom'
import Buttonfacebookatom from '../components/buttonfacebookatom'
import Footermolecule from '../components/footermolecule'

const SignUp = (props) => {
  return (
    <>
      <div className="sign-up-container">
        <Head>
          <title>exported project</title>
        </Head>
        <Navbarmolecule rootClassName="navbarmolecule-root-class-name"></Navbarmolecule>
        <div className="sign-up-container1">
          <div className="sign-up-illustration">
            <img
              alt="Recurso8150x11877"
              src="/playground_assets/recurso8150x11877-dphs-200h.png"
              className="sign-up-header-logo"
            />
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="sign-up-image"
            />
          </div>
          <div className="sign-up-form-wrapper">
            <div className="sign-up-name-fields">
              <Inputatom
                label="Nombre:"
                value="Requerido"
                rootClassName="inputatom-root-class-name"
              ></Inputatom>
              <Inputatom
                label="Segundo nombre:"
                value="Opcional"
                rootClassName="inputatom-root-class-name"
              ></Inputatom>
            </div>
            <div className="sign-up-last-name-fields">
              <Inputatom
                label="Apellido:"
                value="Requerido"
                rootClassName="inputatom-root-class-name"
              ></Inputatom>
              <Inputatom
                label="Segundo apellido:"
                value="Requerido"
                rootClassName="inputatom-root-class-name"
              ></Inputatom>
            </div>
            <div className="sign-up-email-field">
              <Inputatom
                label="Correo electronico:"
                value="Requerido"
                rootClassName="inputatom-root-class-name"
              ></Inputatom>
            </div>
            <div className="sign-up-password-wrapper">
              <Inputatom
                label="Contraseña:"
                value="Requerido"
                rootClassName="inputatom-root-class-name"
              ></Inputatom>
              <Inputatom
                label="Confirmar contraseña:"
                value="Requerido"
                rootClassName="inputatom-root-class-name"
              ></Inputatom>
            </div>
            <span className="sign-up-text">Cree su cuenta con:</span>
            <div className="sign-up-container2">
              <Buttongoogleatom
                text="GOOGLE"
                rootClassName="buttongoogleatom-root-class-name"
              ></Buttongoogleatom>
              <Buttonappleatom
                text="APPLE"
                rootClassName="buttonappleatom-root-class-name"
              ></Buttonappleatom>
              <Buttonfacebookatom
                text="FACEBOOK"
                rootClassName="buttonfacebookatom-root-class-name"
              ></Buttonfacebookatom>
            </div>
            <span className="sign-up-text1">
              <span>
                Todos los datos proporcionados se encuentran sujetos a nuestra
                política de privacidad, puede acceder a ella
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sign-up-text3">aquí.</span>
            </span>
          </div>
        </div>
        <Footermolecule rootClassName="footermolecule-root-class-name7"></Footermolecule>
      </div>
      <style jsx>
        {`
          .sign-up-container {
            min-height: 100vh;
          }
          .sign-up-container1 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            min-height: 100vh;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-up-illustration {
            gap: var(--dl-space-space-twounits);
            width: 50%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-up-header-logo {
            width: 293px;
            height: 62px;
            border-color: transparent;
          }
          .sign-up-image {
            width: 100px;
            object-fit: cover;
          }
          .sign-up-form-wrapper {
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-up-name-fields {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .sign-up-last-name-fields {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .sign-up-email-field {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .sign-up-password-wrapper {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .sign-up-text {
            margin: var(--dl-space-space-unit);
            font-style: normal;
            text-align: center;
            font-family: Archivo;
            font-weight: 100;
          }
          .sign-up-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .sign-up-text1 {
            margin: var(--dl-space-space-oneandhalfunits);
            font-size: 10px;
            text-align: center;
            font-family: Archivo;
          }
          .sign-up-text3 {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  )
}

export default SignUp

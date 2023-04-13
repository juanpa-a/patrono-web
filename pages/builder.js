import React from 'react'
import Head from 'next/head'

import Navbarmolecule from '../components/navbarmolecule'
import ProgressBarmolucule from '../components/progress-barmolucule'
import Titlesecondaryatom from '../components/titlesecondaryatom'
import Questionmolecule from '../components/questionmolecule'
import Inputatom from '../components/inputatom'
import Paginationmolecule from '../components/paginationmolecule'
import Footermolecule from '../components/footermolecule'

const Builder = (props) => {
  return (
    <>
      <div className="builder-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="builder-container1">
          <Navbarmolecule rootClassName="navbarmolecule-root-class-name5"></Navbarmolecule>
          <div className="builder-main-wrapper">
            <ProgressBarmolucule rootClassName="progress-barmolucule-root-class-name"></ProgressBarmolucule>
            <div className="builder-form-wrapper">
              <div className="builder-header">
                <Titlesecondaryatom rootClassName="titlesecondaryatom-root-class-name"></Titlesecondaryatom>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="builder-image"
                />
              </div>
              <div className="builder-form">
                <div className="builder-question-row">
                  <div className="builder-question">
                    <Questionmolecule></Questionmolecule>
                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                  </div>
                  <div className="builder-question1">
                    <Questionmolecule></Questionmolecule>
                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                  </div>
                </div>
                <div className="builder-question-row1">
                  <div className="builder-question2">
                    <Questionmolecule></Questionmolecule>
                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                  </div>
                  <div className="builder-question3">
                    <Questionmolecule></Questionmolecule>
                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                  </div>
                </div>
                <div className="builder-question-row2">
                  <div className="builder-question4">
                    <Questionmolecule></Questionmolecule>
                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                  </div>
                  <div className="builder-question5">
                    <Questionmolecule></Questionmolecule>
                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                  </div>
                </div>
              </div>
            </div>
            <Paginationmolecule rootClassName="paginationmolecule-root-class-name"></Paginationmolecule>
          </div>
          <Footermolecule rootClassName="footermolecule-root-class-name6"></Footermolecule>
        </div>
      </div>
      <style jsx>
        {`
          .builder-container {
            min-height: 100vh;
          }
          .builder-container1 {
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
          .builder-main-wrapper {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .builder-form-wrapper {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .builder-header {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .builder-image {
            flex: 1;
            width: 350px;
            height: 350px;
            align-self: center;
            object-fit: cover;
          }
          .builder-form {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .builder-question-row {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .builder-question {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .builder-question1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .builder-question-row1 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .builder-question2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .builder-question3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .builder-question-row2 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .builder-question4 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .builder-question5 {
            flex: 0 0 auto;
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

export default Builder

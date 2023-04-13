import React from 'react'

const Priceatom = (props) => {
  return (
    <>
      <div className="priceatom-container">
        <span className="priceatom-text">&#123;&#123;value&#125;&#125;</span>
      </div>
      <style jsx>
        {`
          .priceatom-container {
            display: flex;
            position: relative;
          }
          .priceatom-text {
            color: var(--dl-color-default-nfa7200);
            height: auto;
            font-size: 32px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Archivo;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Priceatom

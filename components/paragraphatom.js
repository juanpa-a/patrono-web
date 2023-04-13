import React from 'react'

const Paragraphatom = (props) => {
  return (
    <>
      <div className="paragraphatom-container">
        <span className="paragraphatom-text">&#123;&#123;body&#125;&#125;</span>
      </div>
      <style jsx>
        {`
          .paragraphatom-container {
            display: flex;
            position: relative;
          }
          .paragraphatom-text {
            color: var(--dl-color-default-bge7e4d8);
            width: 405px;
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: justified;
            font-family: Quattrocento;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Paragraphatom

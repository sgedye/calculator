import React from 'react'
import styled from 'styled-components'

import Body from './Components/Body.js'
import Footer from './Components/Footer.js'

const StyledSection = styled.section`
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`

const Title = styled.h2`
  font-size: 2em;
  text-shadow: 2px 2px 2px #fff;
  padding: 20px 0 0 0;
  text-align: center;
  color: #000;
`
const Calculator = styled.div`
  border: 1px solid #000;
  box-shadow: 2px 3px 5px #000;
  border-bottom: none;
  border-radius: 4px;
  min-width: 280px;
  max-width: 600px;
  margin: 20px auto;
  @media screen and (min-width: 768px) {
    display: inline-block;
    position: absolute;
    margin-left: 15px;
    width: calc(100vw - 385px);
  }
  @media screen and (min-width: 1024px) {
    margin-left: 30px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 230px;
  }
`

function App () {
  return (
    <StyledSection>
      <Title id="title">Calculator</Title>
      <Calculator id="calculator">
        <Body />
      </Calculator>
      <Footer />
    </StyledSection>
  )
}

export default App
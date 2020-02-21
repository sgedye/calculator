import React from 'react'
import styled from 'styled-components'

import Body from './Components/Body.js'

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
  max-width: 600px;
  margin: 20px auto;
`
const Footer = styled.div`
  font-size: 1.5em;
  text-shadow: 1px 1px 1px #fff;
  padding: 20px 0 0 0;
  text-align: center;
  color: #000;
`

function App () {
  return (
    <React.Fragment>
      <Title id="title">Calculator</Title>
      <Calculator id="calculator">
        <Body />
      </Calculator>
      <Footer id="footer">
        <h2>Too lazy to use the mouse?</h2>
        <p>TODO: write out this box of shortcuts. Calc is goood.</p>
      </Footer>
    </React.Fragment>
  )
}

export default App
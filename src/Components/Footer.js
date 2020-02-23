import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: none;
  @media screen and (min-width: 425px) {
    display: block;
    border: 1px solid #000;
    box-shadow: 2px 3px 5px #000;
    border-bottom: none;
    border-radius: 4px;
    width: 280px;
    margin: 20px auto;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
    position: absolute;
    right: 35px;
  }
  @media screen and (min-width: 1024px) {
    right: 50px;
  }
  @media screen and (min-width: 1440px) {
    right: 230px;
  }
`
const Table = styled.table`
  width: 90%;
  margin: auto;
  padding: 10px;
`
const Tr = styled.tr`
  width: 100%;
`
const Th = styled.th`
  color: #000;
  padding-bottom: 5px;
`
const Td = styled.td`
  color: #000;
`

function Footer() {
  return (
    <StyledDiv>
      <Table>
        <thead>
          <Tr><Th colSpan="2">Key Strokes:</Th></Tr>
        </thead>
        <tbody>
          <Tr><Td>Clear</Td><Td>esc, c, C</Td></Tr>
          <Tr><Td>Add</Td><Td>space, +</Td></Tr>
          <Tr><Td>Subtract</Td><Td>-</Td></Tr>
          <Tr><Td>Multiply</Td><Td>*, x, X</Td></Tr>
          <Tr><Td>Divide</Td><Td>/</Td></Tr>
          <Tr><Td>Equals</Td><Td>return, =</Td></Tr>
          <Tr><Td>Numbers</Td><Td>0-9</Td></Tr>
          <Tr><Td>Decimal</Td><Td>.</Td></Tr>
          <Tr><Td>Percent</Td><Td>%</Td></Tr>
          <Tr><Td>Plus/Minus</Td><Td>~</Td></Tr>
        </tbody>
      </Table>
    </StyledDiv>
  )
}

export default Footer
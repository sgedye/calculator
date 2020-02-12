import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  font-size: 2em;
  padding: 5px 10px;
  border: 1px solid #000;
  border-radius: 4px 4px 0 0;
  background-color: #444;
  cursor: default;
`

class Header extends React.Component {
  render() {
    const { answer } = this.props
    return (
    	<StyledDiv id="calc-header">{answer}</StyledDiv>
    )
  }
}

export default Header
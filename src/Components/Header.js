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
    let { answer } = this.props
    let wholePart = ""
    let decimalPart = ""
    if (answer.indexOf(".") === -1) {
      wholePart = answer
    } else {
      wholePart = answer.substring(0,answer.indexOf("."))
      decimalPart = answer.substring(answer.indexOf(".")+1)
    }
    if (wholePart.length + decimalPart.length > 8) {
      answer = parseFloat(answer).toExponential(2)
    }
    /*
    let ans = Number(this.props.answer)
    console.log(ans)
    //if (ans > 9)
    console.log(this.props)
    answer = String(Number(answer).toFixed(8))
    console.log(answer.length)
    answer = answer.replace(/[.]0*$|0*$/, '')
    console.log(answer, typeof(answer))
    //answer.length > 10 ? len = 10 : len = answer.length*/
    return (
    	<StyledDiv id="calc-header">{answer}</StyledDiv>
    )
  }
}

export default Header
import React from "react";
import styled from "styled-components";

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
`;

export const Header: React.FC<{}> = () => {
  // let { answer } = this.props;
  let answer = "fix-me";
  let wholePart = "";
  //let decimalPart = ""
  if (answer.indexOf(".") === -1) {
    if (answer.length > 8) {
      answer = parseFloat(answer).toExponential(2);
    }
  } else {
    wholePart = answer.substring(0, answer.indexOf("."));
    //decimalPart = answer.substring(answer.indexOf(".")+1)
    if (wholePart.length > 8) {
      answer = parseFloat(answer).toExponential(2);
    } else if (wholePart.length === 8) {
      answer = answer.substring(0, 8);
    } else {
      answer = answer.substring(0, 9);
    }
    if (parseFloat(answer) < 0.0) {
      answer = "0";
    }
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
  return <StyledDiv id="display">{answer}</StyledDiv>;
};

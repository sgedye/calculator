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
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: #444;
  cursor: default;
`;

export const Header: React.FC<{ answer: string }> = ({ answer }) => {
  // Using absolute value of answer as a workingAnswer, to simplify checks.
  const isNegative = Number(answer) < 0;
  let workingAnswer = isNegative ? answer.substring(1) : answer;
  let finalAnswer = workingAnswer.substring(0, 8);
  if (workingAnswer.includes("e")) {
    // Already converted into power of 10
    const [number, power] = workingAnswer.split("e");
    finalAnswer = `${number.substring(0, 4)}e${power}`;
  } else {
    // Number greater than 99999999 or smaller than -99999999
    let wholePart =
      workingAnswer.indexOf(".") === -1
        ? workingAnswer
        : workingAnswer.split(".")[0];
    if (wholePart.length > 8) {
      let tempAns = Math.round(Number(workingAnswer.substring(0, 4)) / 10) + "";
      finalAnswer = `${tempAns[0]}.${tempAns[1]}${tempAns[2]}e+${
        tempAns.length === 4
          ? workingAnswer.length - 1
          : workingAnswer.length - 2
      }`;
    } else {
      if (wholePart === "0" || wholePart === "-0") {
        // Number closer to zero than Abs(0.000001)
        let decimalPart =
          workingAnswer.indexOf(".") === -1 ? "" : workingAnswer.split(".")[1];
        let tempAns = Number(decimalPart).toString();
        let leadingZeros = decimalPart.length - tempAns.length;
        if (leadingZeros > 5) {
          finalAnswer = `${tempAns[0]}.${tempAns[1]}${tempAns[2]}e-${
            leadingZeros + 1
          }`;
        }
      }
    }
  }

  return (
    <StyledDiv id="display">
      {isNegative && "-"}
      {finalAnswer}
    </StyledDiv>
  );
};

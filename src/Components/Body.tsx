import { Fragment, useState, useEffect } from "react";
import { Header } from "./Header";
import Mousetrap from "mousetrap";
import styled from "styled-components";
// import "./mousetrap-bind-dictionary";

/*
const CalculatorOperations = {
  '/': (prevValue, nextValue) => Number(prevValue) / Number(nextValue),
  '*': (prevValue, nextValue) => Number(prevValue) * Number(nextValue),
  '+': (prevValue, nextValue) => Number(prevValue) + Number(nextValue),
  '-': (prevValue, nextValue) => Number(prevValue) - Number(nextValue),
  '=': (prevValue, nextValue) => Number(nextValue)
}*/

type Operator = "+" | "-" | "/" | "*";
type SpecialOperator = "C" | "+/-" | "%";

const calculate = (num1: number, num2: number, operator: Operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
};

export const Body: React.FC<{}> = () => {
  const [answer, setAnswer] = useState<string>("0");

  const [operationList, setOperationList] = useState<string[]>([]);
  const [current, setCurrent] = useState<string>("0");

  const [isDecimal, setIsDecimal] = useState<boolean>(false);

  // useEffect(() => {
  //   setAnswer(current);
  // }, [current]);

  const handleOperation = (operator: Operator) => {
    if (operationList.length > 2) {
      handleEquals();
    }
    setOperationList((prev) => [...prev, current, operator]);
    setCurrent("0");
  };

  const handleEquals = () => {
    setOperationList((prev) => [...prev, current]);
    setCurrent("0");
    if (operationList.length > 2) {
      const [num1, operator, num2, ...rest] = operationList;
      console.log(num1, operator, num2, rest);
      const answer = calculate(
        Number(num1),
        Number(num2),
        operator as Operator
      );
      setOperationList([`${answer}`, ...rest]);
    }
  };

  const handleSpecialOperation = (operator: SpecialOperator) => {
    switch (operator) {
      case "C":
        setCurrent("0");
        // setAnswer("0");
        setIsDecimal(false);
        setOperationList([]);
        break;
      case "+/-":
        current.startsWith("-")
          ? setCurrent((prev) => prev.substring(1))
          : setCurrent((prev) => "-" + prev);
        break;
      case "%":
        break;
      default:
        break;
    }
  };

  const handleNumber = (num: string) => {
    current === "0"
      ? setCurrent(num)
      : current === "-0"
      ? setCurrent("-" + num)
      : setCurrent((prev) => prev + num);
  };

  const handleDecimal = () => {
    if (!isDecimal) {
      setIsDecimal(true);
      setCurrent((prev) => prev + ".");
    }
  };

  console.log(current, operationList);
  return (
    <Fragment>
      <Header answer={current} />
      <div id="calc-buttons">
        <StyledButton
          bgColor="#666"
          onClick={() => handleSpecialOperation("C")}
        >
          C
        </StyledButton>
        <StyledButton
          bgColor="#666;"
          onClick={() => handleSpecialOperation("+/-")}
        >
          +/-
        </StyledButton>
        <StyledButton
          bgColor="#666;"
          onClick={() => handleSpecialOperation("%")}
        >
          {/* % */}
        </StyledButton>
        <StyledButton bgColor="orange;" onClick={() => handleOperation("/")}>
          ÷
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("7")}>
          7
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("8")}>
          8
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("9")}>
          9
        </StyledButton>
        <StyledButton bgColor="orange;" onClick={() => handleOperation("*")}>
          x
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("4")}>
          4
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("5")}>
          5
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("6")}>
          6
        </StyledButton>
        <StyledButton bgColor="orange;" onClick={() => handleOperation("-")}>
          -
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("1")}>
          1
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("2")}>
          2
        </StyledButton>
        <StyledButton bgColor="#aaa" onClick={() => handleNumber("3")}>
          3
        </StyledButton>
        <StyledButton bgColor="orange;" onClick={() => handleOperation("+")}>
          +
        </StyledButton>
        <StyledButton
          bgColor="#aaa;"
          className="zero-btn"
          onClick={() => handleNumber("0")}
        >
          0
        </StyledButton>
        <StyledButton bgColor="#aaa;" onClick={handleDecimal}>
          .
        </StyledButton>
        <StyledButton
          className="equals-btn"
          bgColor="orange;"
          onClick={handleEquals}
        >
          =
        </StyledButton>
      </div>
    </Fragment>
  );
};

const StyledButton = styled.button<{ bgColor: string }>`
  display: block;
  text-align: center;
  font-size: 1.5em;
  padding: 1rem 2rem;
  border: 1px solid #000;
  color: white;
  background-color: ${(p) => p.bgColor};
  transition: 100ms all ease;
  &:active {
    box-shadow: inset 0 0 1rem #11111144;
  }
`;
// class Body extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: "0",
//       storedValue: "0",
//       operation: "",
//       plusMinusPressed: false,
//       percentPressed: false,
//       decPressed: false,
//       numPressed: false,
//       equalsPressed: false,
//     };
//   }

//   handleClear() {
//     this.setState(() => ({
//       answer: "0",
//       storedValue: "0",
//       operation: "",
//       plusMinusPressed: false,
//       percentPressed: false,
//       decPressed: false,
//       numPressed: false,
//       equalsPressed: false,
//     }));
//   }
//   handlePlusMinus() {
//     this.setState((prevState) => ({
//       answer: (Number(prevState.answer) * -1).toString(),
//       plusMinusPressed: true,
//     }));
//   }
//   handlePercent() {
//     this.setState((prevState) => ({
//       answer: (Number(prevState.answer) / 100).toString(),
//       percentPressed: true,
//       decPressed: true,
//     }));
//   }
//   // 15/16 -- about as good as I can get :/
//   handleOperation(operation) {
//     this.setState(() => ({ numPressed: false }));
//     if (!!this.state.operation && !this.state.equalsPressed) {
//       this.handleEquals();
//     }
//     this.setState((prevState) => ({
//       storedValue: prevState.answer,
//       operation,
//       equalsPressed: false,
//       decPressed: false,
//     }));
//   }

//   handleEquals() {
//     if (!!this.state.operation) {
//       let tempVal = this.state.answer;
//       if (this.state.operation.length === 2) {
//         tempVal = String(Number(tempVal) * -1);
//       }
//       switch (this.state.operation[0]) {
//         case "+":
//           if (this.state.equalsPressed) {
//             this.setState((prevState) => ({
//               answer: (
//                 Number(prevState.storedValue) + Number(prevState.answer)
//               ).toString(),
//             }));
//           } else {
//             this.setState((prevState) => ({
//               storedValue: tempVal,
//               answer: (
//                 Number(prevState.storedValue) + Number(prevState.answer)
//               ).toString(),
//               equalsPressed: true,
//             }));
//           }
//           break;
//         default:
//           console.log(
//             `The operation (${this.state.operation}) does not exist.`
//           );
//       }
//     }
//   }

//   handleDecimal() {
//     if (!this.state.decPressed) {
//       this.setState((prevState) => ({
//         answer: (prevState.answer += "."),
//         decPressed: true,
//         numPressed: true,
//       }));
//     }
//   }

//   handleNumber(digit) {
//     if (
//       (this.state.plusMinusPressed || this.state.percentPressed) &&
//       !this.state.operation
//     ) {
//       this.handleClear();
//       //this.setState(() => ({ answer: '' }))     // Fix this func. once I have operations.
//     }
//     if (this.state.numPressed) {
//       this.setState((prevState) => ({ answer: (prevState.answer += digit) }));
//     } else {
//       if (digit !== "0" || this.state.operation) {
//         this.setState(() => ({
//           answer: digit,
//           numPressed: true,
//         }));
//       }
//     }
//   }

//   render() {
//     // Handle keystrokes
//     Mousetrap.bind(["c", "C", "esc"], () => this.handleClear());
//     Mousetrap.bind(["%"], () => this.handlePercent());
//     Mousetrap.bind(["~"], () => this.handlePlusMinus());
//     Mousetrap.bind(["/"], () => this.handleOperation("/"));
//     Mousetrap.bind(["x", "X", "*"], () => this.handleOperation("*"));
//     Mousetrap.bind(["-"], () => this.handleOperation("-"));
//     Mousetrap.bind(["+", "space"], () => this.handleOperation("+"));
//     Mousetrap.bind(["=", "enter"], () => this.handleEquals());
//     Mousetrap.bind({
//       0: () => this.handleNumber("0"),
//       1: () => this.handleNumber("1"),
//       2: () => this.handleNumber("2"),
//       3: () => this.handleNumber("3"),
//       4: () => this.handleNumber("4"),
//       5: () => this.handleNumber("5"),
//       6: () => this.handleNumber("6"),
//       7: () => this.handleNumber("7"),
//       8: () => this.handleNumber("8"),
//       9: () => this.handleNumber("9"),
//       ".": () => this.handleDecimal(),
//     });

//     return (
//       <React.Fragment>
//       </React.Fragment>
//     );
//   }
// }

// export default Body;

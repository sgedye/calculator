import { Fragment, useState } from "react";
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
  const [current, setCurrent] = useState<string>("0");
  const [prevAnswer, setPrevAnswer] = useState<number>(0);
  const [operator, setOperator] = useState<Operator | null>(null);

  const [isDecimal, setIsDecimal] = useState<boolean>(false);

  const handleOperation = (op: Operator) => {
    setIsDecimal(false);
    if (operator === null) {
      if (current !== "0") {
        setPrevAnswer(Number(current));
        setCurrent("0");
        setOperator(op);
      }
    } else {
      if (op === "-" && current === "0") {
        return setCurrent("-0");
      } else if (current.startsWith("-")) {
        setCurrent((prev) => prev.substring(1));
      }
      if (current !== "0" && current !== "-0") {
        handleEquals();
      }
      setOperator(op);
    }
  };

  console.log({
    curr: current,
    prev: prevAnswer,
    op: operator,
  });

  const handleEquals = (btnPressed: boolean = false) => {
    if (operator !== null) {
      const answer = calculate(prevAnswer, Number(current), operator);
      setPrevAnswer(answer);
      btnPressed ? setCurrent(`${answer}`) : setCurrent("0");
      setOperator(null);
    }
  };

  const handleSpecialOperation = (operator: SpecialOperator) => {
    switch (operator) {
      case "C":
        setCurrent("0");
        setPrevAnswer(0);
        setOperator(null);
        setIsDecimal(false);
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
      ? setCurrent(`-${num}`)
      : setCurrent((prev) => prev + num);
  };

  const handleDecimal = () => {
    if (!isDecimal) {
      setIsDecimal(true);
      setCurrent((prev) => prev + ".");
    }
  };

  // Handle keystrokes
  Mousetrap.bind(["c", "C", "esc"], () => handleSpecialOperation("C"));
  Mousetrap.bind(["%"], () => handleSpecialOperation("%"));
  Mousetrap.bind(["~"], () => handleSpecialOperation("+/-"));
  Mousetrap.bind(["/"], () => handleOperation("/"));
  Mousetrap.bind(["x", "X", "*"], () => handleOperation("*"));
  Mousetrap.bind(["-"], () => handleOperation("-"));
  Mousetrap.bind(["+", "space"], () => handleOperation("+"));
  Mousetrap.bind(["=", "enter"], () => handleEquals(true));
  Mousetrap.bind(["."], () => handleDecimal());
  Mousetrap.bind(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], (e) =>
    handleNumber(e.key)
  );

  return (
    <Fragment>
      <Header answer={current || `${prevAnswer}` || "0"} />
      <div id="calc-buttons">
        <StyledButton
          id="clear"
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
        <StyledButton
          id="divide"
          bgColor="orange;"
          onClick={() => handleOperation("/")}
        >
          ÷
        </StyledButton>
        <StyledButton
          id="seven"
          bgColor="#aaa"
          onClick={() => handleNumber("7")}
        >
          7
        </StyledButton>
        <StyledButton
          id="eight"
          bgColor="#aaa"
          onClick={() => handleNumber("8")}
        >
          8
        </StyledButton>
        <StyledButton
          id="nine"
          bgColor="#aaa"
          onClick={() => handleNumber("9")}
        >
          9
        </StyledButton>
        <StyledButton
          id="multiply"
          bgColor="orange;"
          onClick={() => handleOperation("*")}
        >
          x
        </StyledButton>
        <StyledButton
          id="four"
          bgColor="#aaa"
          onClick={() => handleNumber("4")}
        >
          4
        </StyledButton>
        <StyledButton
          id="five"
          bgColor="#aaa"
          onClick={() => handleNumber("5")}
        >
          5
        </StyledButton>
        <StyledButton id="six" bgColor="#aaa" onClick={() => handleNumber("6")}>
          6
        </StyledButton>
        <StyledButton
          id="subtract"
          bgColor="orange;"
          onClick={() => handleOperation("-")}
        >
          -
        </StyledButton>
        <StyledButton id="one" bgColor="#aaa" onClick={() => handleNumber("1")}>
          1
        </StyledButton>
        <StyledButton id="two" bgColor="#aaa" onClick={() => handleNumber("2")}>
          2
        </StyledButton>
        <StyledButton
          id="three"
          bgColor="#aaa"
          onClick={() => handleNumber("3")}
        >
          3
        </StyledButton>
        <StyledButton
          id="add"
          bgColor="orange;"
          onClick={() => handleOperation("+")}
        >
          +
        </StyledButton>
        <StyledButton
          id="zero"
          bgColor="#aaa;"
          className="zero-btn"
          onClick={() => handleNumber("0")}
        >
          0
        </StyledButton>
        <StyledButton id="decimal" bgColor="#aaa;" onClick={handleDecimal}>
          .
        </StyledButton>
        <StyledButton
          id="equals"
          className="equals-btn"
          bgColor="orange;"
          onClick={() => handleEquals(true)}
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
//
//     return (
//       <React.Fragment>
//       </React.Fragment>
//     );
//   }
// }

// export default Body;

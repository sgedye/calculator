import { useState } from "react";
import { Display } from ".";
import Mousetrap from "mousetrap";
import styled from "styled-components";

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
        setCurrent((prev) => (Number(prev) / 100).toString());
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
    <Calculator>
      <Display answer={current || `${prevAnswer}` || "0"} />
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
          %
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
    </Calculator>
  );
};

const Calculator = styled.div`
  border: 1px solid #000;
  box-shadow: 2px 3px 5px #000;
  border-bottom: none;
  border-radius: 0.5rem;
  width: 80vw;
  min-width: 15rem;
  max-width: 40rem;
  @media screen and (min-width: 768px) {
    margin-right: 3rem;
  }
`;

const StyledButton = styled.button<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  font-weight: 500;
  padding: 1rem 0;
  border: 1px solid #000;
  background-color: ${(p) => p.bgColor};
  transition: 100ms all ease;
  &:active {
    box-shadow: inset 0 0 1rem #11111144;
  }
`;

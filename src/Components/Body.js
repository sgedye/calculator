import React from "react";
import Header from "./Header.js";
import Mousetrap from "mousetrap";
import "./mousetrap-bind-dictionary";

import "./Body.css";
/*
const CalculatorOperations = {
  '/': (prevValue, nextValue) => Number(prevValue) / Number(nextValue),
  '*': (prevValue, nextValue) => Number(prevValue) * Number(nextValue),
  '+': (prevValue, nextValue) => Number(prevValue) + Number(nextValue),
  '-': (prevValue, nextValue) => Number(prevValue) - Number(nextValue),
  '=': (prevValue, nextValue) => Number(nextValue)
}*/

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "0",
      storedValue: "0",
      operation: "",
      plusMinusPressed: false,
      percentPressed: false,
      decPressed: false,
      numPressed: false,
      equalsPressed: false,
    };
    this.handleClear = this.handleClear.bind(this);
    this.handlePlusMinus = this.handlePlusMinus.bind(this);
    this.handlePercent = this.handlePercent.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleDot = this.handleDot.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
  }

  handleClear() {
    this.setState(() => ({
      answer: "0",
      storedValue: "0",
      operation: "",
      plusMinusPressed: false,
      percentPressed: false,
      decPressed: false,
      numPressed: false,
      equalsPressed: false,
    }));
  }
  handlePlusMinus() {
    this.setState((prevState) => ({
      answer: (Number(prevState.answer) * -1).toString(),
      plusMinusPressed: true,
    }));
  }
  handlePercent() {
    this.setState((prevState) => ({
      answer: (Number(prevState.answer) / 100).toString(),
      percentPressed: true,
      decPressed: true,
    }));
  }
  // 15/16 -- about as good as I can get :/
  handleOperation(operation) {
    this.setState(() => ({ numPressed: false }));
    if (!!this.state.operation && !this.state.equalsPressed) {
      this.handleEquals();
    }
    this.setState((prevState) => ({
      storedValue: prevState.answer,
      operation,
      equalsPressed: false,
      decPressed: false,
    }));
  }

  handleEquals() {
    if (!!this.state.operation) {
      let tempVal = this.state.answer;
      if (this.state.operation.length === 2) {
        tempVal = String(Number(tempVal) * -1);
      }
      switch (this.state.operation[0]) {
        case "/":
          if (this.state.equalsPressed) {
            this.setState((prevState) => ({
              answer: (
                Number(prevState.answer) / Number(prevState.storedValue)
              ).toString(),
            }));
          } else {
            this.setState((prevState) => ({
              storedValue: tempVal,
              answer: (
                Number(prevState.storedValue) / Number(prevState.answer)
              ).toString(),
              equalsPressed: true,
            }));
          }
          break;
        case "x":
          if (this.state.equalsPressed) {
            this.setState((prevState) => ({
              answer: (
                Number(prevState.storedValue) * Number(prevState.answer)
              ).toString(),
            }));
          } else {
            this.setState((prevState) => ({
              storedValue: tempVal,
              answer: (
                Number(prevState.storedValue) * Number(prevState.answer)
              ).toString(),
              equalsPressed: true,
            }));
          }
          break;
        case "-":
          if (this.state.equalsPressed) {
            this.setState((prevState) => ({
              answer: String(prevState.answer - prevState.storedValue),
            }));
          } else {
            this.setState((prevState) => ({
              storedValue: tempVal,
              answer: String(prevState.storedValue - prevState.answer),
              equalsPressed: true,
            }));
          }
          break;
        case "+":
          if (this.state.equalsPressed) {
            this.setState((prevState) => ({
              answer: (
                Number(prevState.storedValue) + Number(prevState.answer)
              ).toString(),
            }));
          } else {
            this.setState((prevState) => ({
              storedValue: tempVal,
              answer: (
                Number(prevState.storedValue) + Number(prevState.answer)
              ).toString(),
              equalsPressed: true,
            }));
          }
          break;
        default:
          console.log(
            `The operation (${this.state.operation}) does not exist.`
          );
      }
    }
  }
  handleDot() {
    if (!this.state.decPressed) {
      this.setState((prevState) => ({
        answer: (prevState.answer += "."),
        decPressed: true,
        numPressed: true,
      }));
    }
  }
  handleNumber(digit) {
    if (
      (this.state.plusMinusPressed || this.state.percentPressed) &&
      !this.state.operation
    ) {
      this.handleClear();
      //this.setState(() => ({ answer: '' }))     // Fix this func. once I have operations.
    }
    if (this.state.numPressed) {
      this.setState((prevState) => ({ answer: (prevState.answer += digit) }));
    } else {
      if (digit !== "0" || this.state.operation) {
        this.setState(() => ({
          answer: digit,
          numPressed: true,
        }));
      }
    }
  }

  render() {
    // Handle keystrokes
    Mousetrap.bind(["c", "C", "esc"], () => this.handleClear());
    Mousetrap.bind(["%"], () => this.handlePercent());
    Mousetrap.bind(["~"], () => this.handlePlusMinus());
    Mousetrap.bind(["/"], () => this.handleOperation("/"));
    Mousetrap.bind(["x", "X", "*"], () => this.handleOperation("x"));
    Mousetrap.bind(["-"], () => this.handleOperation("-"));
    Mousetrap.bind(["+", "space"], () => this.handleOperation("+"));
    Mousetrap.bind(["=", "enter"], () => this.handleEquals());
    Mousetrap.bind({
      0: () => this.handleNumber("0"),
      1: () => this.handleNumber("1"),
      2: () => this.handleNumber("2"),
      3: () => this.handleNumber("3"),
      4: () => this.handleNumber("4"),
      5: () => this.handleNumber("5"),
      6: () => this.handleNumber("6"),
      7: () => this.handleNumber("7"),
      8: () => this.handleNumber("8"),
      9: () => this.handleNumber("9"),
      ".": () => this.handleDot(),
    });

    return (
      <React.Fragment>
        <Header answer={this.state.answer} />
        <div id="calc-buttons">
          <div id="clear"     onClick={ () => this.handleClear()        }>C</div>
          <div id="plus-minus" onClick={() => this.handlePlusMinus()    }>+/-</div>
          <div id="percent"   onClick={ () => this.handlePercent()      }>%</div>
          <div id="divide"    onClick={ () => this.handleOperation('/') }>÷</div>
          <div id="seven"     onClick={ () => this.handleNumber('7')    }>7</div>
          <div id="eight"     onClick={ () => this.handleNumber('8')    }>8</div>
          <div id="nine"      onClick={ () => this.handleNumber('9')    }>9</div>
          <div id="multiply"  onClick={ () => this.handleOperation('x') }>x</div>
          <div id="four"      onClick={ () => this.handleNumber('4')    }>4</div>
          <div id="five"      onClick={ () => this.handleNumber('5')    }>5</div>
          <div id="six"       onClick={ () => this.handleNumber('6')    }>6</div>
          <div id="subtract"  onClick={ () => this.handleOperation('-') }>-</div>
          <div id="one"       onClick={ () => this.handleNumber('1')    }>1</div>
          <div id="two"       onClick={ () => this.handleNumber('2')    }>2</div>
          <div id="three"     onClick={ () => this.handleNumber('3')    }>3</div>
          <div id="add"       onClick={ () => this.handleOperation('+') }>+</div>
          <div id="zero"      onClick={ () => this.handleNumber('0')    }>0</div>
          <div id="decimal"   onClick={ () => this.handleDot()          }>.</div>
          <div id="equals"    onClick={ () => this.handleEquals()       }>=</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;

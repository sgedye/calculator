import React from 'react'
import Header from './Header.js'
import Mousetrap from 'mousetrap'
import './mousetrap-bind-dictionary'

import './Body.css'

class Body extends React.Component {
  constructor() {
    super()
    this.state = {
      answer: '0',
      storedValue: '0',
      operation: '',
      plusMinusPressed: false,
      percentPressed: false,
      decPressed: false,
      numPressed: false
    }
    this.handleClear = this.handleClear.bind(this)
    this.handlePlusMinus = this.handlePlusMinus.bind(this)
    this.handlePercent = this.handlePercent.bind(this)
    this.handleOperation = this.handleOperation.bind(this)
    this.handleEquals = this.handleEquals.bind(this)
    this.handleDot = this.handleDot.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
  }

  handleClear() {
    this.setState(() => ({
      answer: '0',
      storedValue: '0',
      operation: '',
      plusMinusPressed: false,
      percentPressed: false,
      decPressed: false,
      numPressed: false
    }))
  }
  handlePlusMinus() {
    this.setState((prevState) => ({
      answer: (Number(prevState.answer) * -1).toString(),
      plusMinusPressed: true
    }))
  }
  handlePercent() {
    this.setState((prevState) => ({
      answer: (Number(prevState.answer) / 100).toString(),
      percentPressed: true,
      decPressed: true
    }))
  }
  handleOperation(operation) {
    //if (this.state.answer !== '0') {
    this.setState((prevState) => ({
      storedValue: prevState.answer,
      answer: '0',
      operation
    }))
  }
  handleEquals() {
    if (this.state.operation) {
      switch(this.state.operation) {
        case '/':
          this.setState((prevState) => ({
            answer: (Number(prevState.storedValue) / Number(prevState.answer)).toString()
          }));
          break;
        case 'x':
          this.setState((prevState) => ({
            answer: (Number(prevState.storedValue) * Number(prevState.answer)).toString()
          }));
          break;
        case '-':
          this.setState((prevState) => ({
            answer: (Number(prevState.storedValue) - Number(prevState.answer)).toString()
          }));
          break;
        case '+':
          this.setState((prevState) => ({
            answer: (Number(prevState.storedValue) + Number(prevState.answer)).toString()
          }));
          break;
        default:
          console.log(`The operation (${this.prevState.operation}) does not exist.`)
      }
      this.setState(() => ({ operation: '' }))
    }
  }
  handleDot() {
    /* . */
    if (this.state.decPressed === false) {
      this.setState(prevState => ({
        answer: prevState.answer += ".",
        decPressed: true,
        numPressed: true
      }))
    }
  }
  handleNumber(digit) {
    /* 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 */

    if (this.state.plusMinusPressed || this.state.percentPressed) {
      this.handleClear()
      this.setState(() => ({ answer: '' }))     // Fix this func. once I have operations.
    }
    console.log(this.state.operation)
    if (this.state.operation !== '') {
      this.handleEquals()
    }
    // If operation is not '', 

    if (this.state.numPressed) {
      this.setState(prevState => ({ answer: prevState.answer += digit }))
    }
    else {
      if (digit === '0') {
        //Do nothing
      }
      else {
        this.setState(() => ({
          answer: digit,
          numPressed: true
        }))
      }
    }
  }


  render() {
    console.log(this.state)
    console.log(this.prevState)
    // Handle keystrokes
    Mousetrap.bind(['c', 'C', 'esc'], () => { this.handleClear() })
    Mousetrap.bind(['%'], () => { this.handlePercent() })
    Mousetrap.bind(['/'], () => { this.handleOperation('/') })
    Mousetrap.bind(['x', 'X', '*'], () => { this.handleOperation('x') })
    Mousetrap.bind(['-'], () => { this.handleOperation('-') })
    Mousetrap.bind(['+', 'space'], () => { this.handleOperation('+') })
    Mousetrap.bind(['enter'], () => { this.handleEquals() })
    Mousetrap.bind({
      //'0': this.handleNumber.bind(this, '0'), --- this does exactly the same thing.
      '0': () => { this.handleNumber('0') },
      '1': () => { this.handleNumber('1') },
      '2': () => { this.handleNumber('2') },
      '3': () => { this.handleNumber('3') },
      '4': () => { this.handleNumber('4') },
      '5': () => { this.handleNumber('5') },
      '6': () => { this.handleNumber('6') },
      '7': () => { this.handleNumber('7') },
      '8': () => { this.handleNumber('8') },
      '9': () => { this.handleNumber('9') },
      '.': () => { this.handleDot() }
    })
    return (
      <React.Fragment>
        <Header answer={this.state.answer}/>
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
          <div id="minus"     onClick={ () => this.handleOperation('-') }>-</div>
          <div id="one"       onClick={ () => this.handleNumber('1')    }>1</div>
          <div id="two"       onClick={ () => this.handleNumber('2')    }>2</div>
          <div id="three"     onClick={ () => this.handleNumber('3')    }>3</div>
          <div id="plus"      onClick={ () => this.handleOperation('+') }>+</div>
          <div id="zero"      onClick={ () => this.handleNumber('0')    }>0</div>
          <div id="dot"       onClick={ () => this.handleDot()          }>.</div>
          <div id="equals"    onClick={ () => this.handleEquals()       }>=</div>
        </div>
      </React.Fragment>
    )
  }
}

export default Body
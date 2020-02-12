import React from 'react'
import './App.css'
import Body from './Components/Body.js'
import Header from './Components/Header.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      answer: 'Hello There, this is a message'
    }
  }
  render() {
    return (
      <div>
        <Header msg={this.state.answer} />
        <Body />
      </div>
    )
  }
}

export default App



/* ******************************************************* */

/*
class Calculator extends React.Component {
  constructor() {
    super()
    this.state = { 
      answer: 0,
      operation: '',
      plusMinusPressed: false,
      decPressed: false,
      decPlace: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(btn) {
    btn.preventDefault()
    let btnPressed = btn.target.dataset.value
    switch(btnPressed) {
      // Top row (dark grey)
      case 'C':
      	this.setState(() => ({
          answer: 0,
          operation: '',
          plusMinusPressed: false,
          decPressed: false,
          decPlace: 0
        }))
        break
      case '+/-':
      	this.setState(prevState => ({
        	answer: prevState.answer * -1,
          operation: '',
          plusMinusPressed: true
        }))
        break
      case '%':
        this.setState(prevState => ({
        	answer: prevState.answer / 100,
          operation: ''
        }))
        break

      // Right column (orange)
      case '÷':
        break
      case 'x':
      	this.setState(prevState => ({
        	answer: prevState.answer,
          operation: 'x'
        }))
        break
        
      case '.':
      	if (this.state.decPressed === false) {
        	this.setState(prevState => ({
          	operation: '',
            decPressed: true,
            decPlace: 1
          }))
        }
      	break
      	
			// Number Key Pressed 0-9
      default:
      	if (btnPressed in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
        	if (this.state.plusMinusPressed) {
          	this.setState(() => ({
              answer: 0,
              operation: '',
              plusMinusPressed: false,
              decPressed: false,
              decPlace: 0
            }))
          }
          let numClicked = Number(btnPressed)
          let decPlace = this.state.decPlace
          if (this.state.decPressed && decPlace > 0) {
            this.setState(prevState => ({
              answer: Number(
              	(prevState.answer + numClicked / Math.pow(10,decPlace))
                .toFixed(decPlace)
              ),
              operation: 'none',
              decPlace: prevState.decPlace + 1
            }))
          } else {
            this.setState(prevState => ({
              answer: prevState.answer * 10 + numClicked,
              operation: 'none'
            }))      	
          }
				} else {
        	console.log('error in switch statement')
        }
        console.log(this.state)
    }
  }
  
  render() {
  	return (
      <div>
        <Header answer={this.state.answer} />
        
    )
  }
}

class Header extends React.Component {
	constructor(props) {
  	super(props)
  }
  render() {
    return (
    	<div id="calc-header">
    	  <div>{this.props.answer}</div>
    	</div>
    )
  }
}

export default Calculator
*/
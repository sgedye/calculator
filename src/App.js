import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



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
        <div id="calc-buttons">
          <div
            id="clear"
            data-value='C'
            onClick={(e) => this.handleClick(e)}
          >C
          </div>
          <div
            id="plus-minus"
            data-value='+/-'
            onClick={(e) => this.handleClick(e)}
          >+/-
          </div>
          <div
            id="percent"
            data-value='%'
            onClick={(e) => this.handleClick(e)}
          >%
          </div>
          <div
            id="divide"
            data-value='÷'
            onClick={(e) => this.handleClick(e)}
          >÷
          </div>
          <div
            id="seven"
            data-value="7"
            onClick={(e) => this.handleClick(e)}
          >7
          </div>
          <div 
            id="eight"
            data-value="8"
            onClick={(e) => this.handleClick(e)}
          >8
          </div>
          <div
            id="nine"
            data-value="9"
            onClick={(e) => this.handleClick(e)}
          >9
          </div>
          <div
            id="multiply"
            data-value="*"
            onClick={(e) => this.handleClick(e)}
          >x
          </div>
          <div
            id="four"
            data-value="4"
            onClick={(e) => this.handleClick(e)}
          >4
          </div>
          <div
            id="five" 
            data-value="5" 
            onClick={(e) => this.handleClick(e)}
          >5
          </div>
          <div
            id="six"
            data-value="6"
            onClick={(e) => this.handleClick(e)}
          >6
          </div>
          <div
            id="minus"
            data-value="-"
            onClick={(e) => this.handleClick(e)}
          >-
          </div>
          <div
            id="one"
            data-value="1"
            onClick={(e) => this.handleClick(e)}
          >1
          </div>
          <div
            id="two"
            data-value="2"
            onClick={(e) => this.handleClick(e)}
          >2
          </div>
          <div
            id="three"
            data-value="3"
            onClick={(e) => this.handleClick(e)}
          >3
          </div>
          <div
            id="plus"
            data-value="+"
            onClick={(e) => this.handleClick(e)}
          >+
          </div>
          <div
            id="zero" 
            data-value="0"
            onClick={(e) => this.handleClick(e)}
          >0
          </div>
          <div
            id="dot"
            data-value="."
            onClick={(e) => this.handleClick(e)}
          >.
          </div>
          <div
            id="equals"
            data-value="="
            onClick={(e) => this.handleClick(e)}
          >=
          </div>
        </div>
      </div>
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

ReactDOM.render(
  <Calculator />,
  document.querySelector("#calculator")
)
*/
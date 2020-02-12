import React from 'react'
import './Body.css'

class Body extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Body
import React from 'react';
import './js-calculator.css';


// You are collecting three things, the first operand (number) the operator (+, -, x, /) and the second operand (number).

// If you work your why through the characters left to right, you should throw away any characters that are not a number character, 
// these include (0-9, “.” and “-”) once a operator key is pressed, you have completed collection of the first operand and you have the operator.

// Note: the “-” key is a little funny because it can be either part of a negative number or the operator for the calculation.

// The next key will either be another operator, and therefore replaces the operator you previously had,
//  or a number character is pressed and you’ve begun to collect the second operand. Collecting the second operand 
//  continues until either another operator or the “=” sign is pressed.

// The the calculation is performed and the result is designed the first operand for the next operator pressed 
// or in case an operator is pressed after the equal sign to perform further math on the result.

class Calculator extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      input:'',
      zero: '0',
      operator: '',
      decimal: false
    }
    //this.handleChange = this.handleChange.bind(this);
    // this.handleClear = this.handleClear.bind(this);
    // this.handleEquals = this.handleEquals.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    //this.handleCurrentVal = this.handleCurrentVal.bind(this);
  }
  
  // handleClick = (event) => {
  //   let number = this.state.input + event.target.value;
  //   if(event.target.value === '0' && this.state.input === 0){
  //     this.setState({ input: 0 });
  //   } else if (event.target.value === '.' &&  this.state.lastVal.includes('.')){
  //     this.setState({ lastVal: '.'});
  //   } else {
  //     this.setState({
  //       input: number
  //     });
  //   }
  // }
  
  handleClear = () => {
    this.setState({input: '', zero: '', operator: '', decimal: true});
  }
  
  handleInput = (val) => {
    this.setState({ input: this.state.input + val, zero: ''});
    // if(this.state.display === '+' || this.state.display === '-' || this.state.display === '*' ||
    //    this.state.display === '/'){
    //   this.setState({
    //     display: num
    //   });
    // }
  }

  handleEquals = () => {
    this.setState({

    });
  }
  // handleCurrentVal (e){
  //   let currentValue = document.getElementById(e.target.id);
  //   this.setState({
  //     currentVal: this.state.currentVal+=currentValue
  //   });
  // }
  
  // handleClick() {
  //   this.setState(input: this.value);
  // }
  
  
  // componentDidMount = () => {
  //   document.addEventListener('click', this.handleInput);
  // }
  
  // componenetWillUnMount = () => {
  //   document.removeEventListener('click', this.handleInput);
  // }

  render() {
    return (
      <div id="calculator" className="container">
        <form>
          <div id="numbers">
            <div className="row">
              <input type="text" id="display" value={this.state.input} onClick={this.handleInput} />
            </div>

            <div className="row">
              <button id="clear" type="button" onClick={this.handleClear}>clear </button>
              <input id="divide" type="button" value = "/" />
            </div>

            <div className="row">
              <input id="seven" type="button" value = "7" onClick={this.handleInput} />
              <input id="eight" type="button" value = "8" onClick={this.handleInput} />
              <input id="nine"  type="button" value = "9" onClick={this.handleInput} /> 
              <input id="multiply" type="button" value = "*" /> 
            </div>

            <div className="row">
              <input id="four" type="button" value = "4" onClick={this.handleInput} />
              <input id="five" type="button" value = "5" onClick={this.handleInput} />
              <input id="six" type="button" value = "6"  onClick={this.handleInput} />
              <input id="subtract" type="button" value = "-" /> 
            </div>

            <div className="row">
              <input id="one" type="button" value = "1"   onClick={this.handleInput} />
              <input id="two" type="button"  value = "2"  onClick={this.handleInput} />
              <input id="three" type="button" value = "3" onClick={this.handleInput} />
              <input id="add" type="button" value = "+" />
            </div>

            <div className="row">
              <input id="zero" type="button"  value = "0"  onClick={this.handleInput} />
              <input id="decimal" type="button" value="." />
              <input id="equals" type="button" value = "=" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
// ReactDOM.render(<Calculator />, document.getElementById('root'));



inputButton = (e) => {
  let input = [];
  let operator = this.state.operator;
  let decimal = this.state.decimal;
  let numbers = /\d+/g;
  let operators = /[+\-\/*]/g;
  //let operators =  /(\+|-|\*|\/){2,}/;
  let lastOp = [];
 // let newArr = [input];
  let final;
 // let result = '';
  //let ops = input.test(operators);
 // let multiOp = new RegExp('[^0-9]{2}$');
  let multiOps = /(\+|-|\*|\/){2,}/;
 console.log(`multiple operators ${multiOps}`);

  switch(true){
    case numbers.test(e.target.value): 
      if(input !== '0'){
        this.setState({
          input: input.push(e.target.value),
          operator: false
        });
      }  else {
        this.setState({ 
          input: input = input[e.target.value]
        });
      }
      break;
    case multiOps.test(e.target.value):
    
   
    break;

    case operators.test(e.target.value):
   
     if (e.target.value === '-') {
        // newArr.push(e.target.value);
        input = input.push(e.target.value).join('');
        this.setState({
         // input: newArr.join(''),
          input: input,
          operator: true,
          decimal: false
        });
      
    } else {
        this.setState({
          input: input.push(e.target.value),
          operator: true,
          decimal: false
        });
      }
     break;

   case e.target.value === "." :
    if(!decimal){
    this.setState({
      input: input.push('.'),
      operator: false,
      decimal: true
    });
    }
    break;
  
  case e.target.value === "=" :
    this.setState({
      input: eval(input),
      operator: true,
      decimal: false
    });
    break;

  default:
    console.log("Not a valid command.");
 }
}

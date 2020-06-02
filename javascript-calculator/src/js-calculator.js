import React from 'react';
import './js-calculator.css';


let inputArr = [];

class Calculator extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      input: '0',
      operator: false,
      decimal: false
    }
  }
 
  handleClear = () => {
    inputArr.splice(0, inputArr.length);
    this.setState({
      input: '0'
    });
  }

  button = (e) => {
    let symbols = /^[^0-9-]+.*/;
    let multiOps = /[^0-9]{2}$/;
    inputArr.push(e.target.value);
   // inputArr[...e.target.value];
    inputArr = inputArr.filter(function(arr){return arr !== ""; });
     
    if(symbols.test(inputArr)){
      inputArr.splice(0, 1);
      if(inputArr.length === 0){
        this.setState({input: '0'});
      } 
    }
    if(multiOps.test(inputArr.join(''))){
      inputArr.splice(-2, 1);
      this.setState({ input: inputArr.join('') });
    }
      console.log(`From the button method ${inputArr}`);
  


 // zero = () => {
    if(inputArr.join('').match(/^0\d+/) ){
      inputArr.splice(-2, 1);
      this.setState({ input: inputArr.join('')});
    } else if (inputArr.join('').match(/[^0-9.]0\d+/)) {
      inputArr.splice(-2, 1);
      this.setState({ input: inputArr.join('')});
    } else if(inputArr.join('').match(/\.0/)) {
      this.setState({ input: inputArr.join('')});
    } else {
    this.setState({ input: inputArr.join('') });
  }
  console.log(`inputArr type from button: ${typeof inputArr}`);
}


 decimal = () => {
   //input arr is an object for some reason
    inputArr = Object.entries(inputArr);
    console.log(`type of inputArr from decimal ${typeof inputArr}`);
    let lastNum = inputArr.join('').match(/\.\d+$/);
    if(/[^0-9]$/.test(inputArr)){
      this.setState({ input: inputArr.join('')});
    } else if(inputArr.length === 0) {
      inputArr.splice(0,0, "0.");
      this.setState({ input : inputArr.join('')});
    } else{
      inputArr.splice(inputArr.length, 0, '.');
      this.setState({ input: inputArr.join('') });
    } 
     // inputArr = Object.entries(inputArr);
      //console.log(`type of inputArr from decimal ${typeof inputArr}`);
      console.log(` type of lastNum: ${typeof lastNum}`);

    // if(lastNum.join('').includes('.')) {
    //       inputArr.splice(-1, 1);
    //       this.setState({ input: inputArr.join('') });
    // }
      console.log(`last num variable ${lastNum}`);
  }


  negative = () => {
    let lastNums = inputArr.join('').match(/\d+?\.?\d{1,}$/); // matches numbers before and after the decimal
    let negLastNum = inputArr.join('').match(/-\d+?\.?\d{0,}$/); // matches negative number before and after the decimal
    let multiOps = /[^0-9]{2}$/;

    if(!multiOps.test(inputArr)){
      if(negLastNum){
      inputArr.splice(-negLastNum.join('').split('').length, 1);
      this.setState({ input: inputArr.join('')});
    }  if (inputArr.length === 0){
      inputArr.splice(0, 0, "-0");
      this.setState({ input: inputArr.join('')});
    } else if(lastNums) {
      inputArr.splice(-lastNums.join('').split('').length, 0 , '-')
    }else if(lastNums === null) {
      inputArr.splice(-1, 0, "-");
      this.setState({ input: inputArr.join('')});
    }
   }
  }

  equal = () => {
    let answer = inputArr.join('');
    console.log(`From equal method: ${answer}`);
    this.setState({ input: eval(answer).toString() });

    inputArr.splice(0, inputArr.length, answer);
    console.log(`From equal method: ${answer}`);
  }

  
  render() {
    console.log(` This.state.input: ${this.state.input}`);
    console.log(`InputArr render: ${typeof inputArr}`);
    return (
      <div id="calculator" className="container text-center pt-5">
          <div id="display">{this.state.input}</div> 
          <div id="cal-container">
            <div className="row ">
              <div className="col-sm clearBtn">
                <button id="clear"    type="button" class="btn"  onClick={this.handleClear}>clear</button> 
                <button id="divide"   type="button" class="btn"  onClick={this.button} value = "/">/</button>
                <button id="negative" type="button" class="btn"  onClick={this.negative} value = "±">±</button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm multiplyBtn">
                <button id="seven"    type="button" class="btn"  onClick={this.button} value = "7">7</button>
                <button id="eight"    type="button" class="btn"  onClick={this.button} value = "8">8</button>
                <button id="nine"     type="button" class="btn"  onClick={this.button} value = "9">9</button> 
                <button id="multiply" type="button" class="btn"  onClick={this.button} value = "*">x</button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm minusBtn">
                <button id="four"     type="button" class="btn"  onClick={this.button} value = "4">4</button>
                <button id="five"     type="button" class="btn"  onClick={this.button} value = "5">5</button>
                <button id="six"      type="button" class="btn"  onClick={this.button}  value = "6">6</button>
                <button id="subtract" type="button" class="btn"  onClick={this.button} value = "-">-</button>
              </div>
            </div> 

            <div className="row">
              <div className="col-sm plusBtn">
                <button id="one"     type="button" class="btn"   onClick={this.button} value = "1">1</button>
                <button id="two"     type="button" class="btn"   onClick={this.button} value = "2">2</button>
                <button id="three"   type="button" class="btn"   onClick={this.button} value = "3">3</button>
                <button id="add"     type="button" class="btn"   onClick={this.button} value = "+">+</button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm equalsBtn">
                <button id="zero"    type="button" class="btn"  onClick={this.button}    value = "0">0</button>
                <button id="decimal" type="button" class="btn"  onClick={this.decimal} value=".">.</button>
                <button id="equals"  type="button" class="btn"  onClick={this.equal}   value = "=">=</button>
              </div>
          </div>
          
        </div>

        
          <div className="author">
          {" "}
          Designed and Coded By <br />
          <a href="https://codepen.io/Moroccois" target="_blank" rel="noopener noreferrer">
            Tonya Fowler
          </a>
          </div>
     </div>
    );
  }
}

export default Calculator;
// ReactDOM.render(<Calculator />, document.getElementById('root'));

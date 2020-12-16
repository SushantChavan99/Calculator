import React, {useState } from 'react';
import ReactDOM from "react-dom";

function Calculator(){
	const [calVal, setState] = useState(0);	
	const [singOp, setSingOp] = useState();
	const [prevValue, setPrevSet] = useState();
	var currentVal, prevValuev, preV = 0;
	const addValue = (e)=>{
		//debugger;
		if(!singOp){
			currentVal = e.target.value;
			prevValuev = calVal;
			var concatS;
			if(prevValuev === 0){
				concatS = currentVal
			}else{
				concatS = prevValuev + currentVal; 	
			}		
			setState(concatS);
			setPrevSet(concatS);
		}else{			
			currentVal = e.target.value;
			preV = calVal
			if(preV === 0){
				concatS = currentVal
			}else{
				concatS = preV + currentVal; 	
			}
			setState(concatS);
		}
	}
	const operatorBtn = (e) => {
		//debugger
		if(calVal > 0){
			setState(0);
			setSingOp(e.target.value);
		} else if(calVal < 0){
			setState(0);
			setSingOp(e.target.value);
		}else {
			setSingOp();
		}
	}
	const calculateFun = () => {
		switch(singOp){
			case '+':
				setState(parseInt(prevValue) + parseInt(calVal));
				setPrevSet(parseInt(prevValue) + parseInt(calVal));
				setSingOp();
				break;
			case '-':
				setState(parseInt(prevValue) - parseInt(calVal));
				setPrevSet(parseInt(prevValue) - parseInt(calVal));
				setSingOp();
				break;
			case '/':
				setState(parseInt(prevValue) / parseInt(calVal));
				setPrevSet(parseInt(prevValue) / parseInt(calVal));
				setSingOp();
				break;
			case '*':
				setState(parseInt(prevValue) * parseInt(calVal));
				setPrevSet(parseInt(prevValue) * parseInt(calVal));
				setSingOp();
				break;
			default :
				alert("Select Operator");
		}
		
	}

	const clearFun = ()=>{
		setSingOp();
		setState(0);
		setPrevSet();
	}

	return(
		<>
		<h1 style={{textAlign:'center'}}>Calculator Demo</h1>
		<div className="conatiner">
	        <div className="calculorBody">
	        	<div className="calculatorHeader">
	        		<input type='text' value={calVal} readonly />
	        	</div>
	        	<div className='clearDiv'>
	        		<button className="valueBtn clearBtn" onClick={clearFun}>CLR</button>
	        	</div>
	        	<div className="calculatorbuttonBody">
	        		<button className="valueBtn" value="7" onClick={addValue}>7</button>
	        		<button className="valueBtn" value="8" onClick={addValue}>8</button>
	        		<button className="valueBtn" value="9" onClick={addValue}>9</button>
	        		<button className="valueBtn operatorBtn" value='/' onClick={operatorBtn}>/</button>
	        		<button className="valueBtn" value="4" onClick={addValue}>4</button>
	        		<button className="valueBtn" value="5" onClick={addValue}>5</button>
	        		<button className="valueBtn" value="6" onClick={addValue}>6</button>
	        		<button className="valueBtn operatorBtn" value='*' onClick={operatorBtn}>*</button>
	        		<button className="valueBtn" value="1" onClick={addValue}>1</button>
	        		<button className="valueBtn" value="2" onClick={addValue}>2</button>
	        		<button className="valueBtn" value="3" onClick={addValue}>3</button>
	        		<button className="valueBtn operatorBtn" value='-' onClick={operatorBtn}>-</button>
	        		<button className="valueBtn" value="0" onClick={addValue}>0</button>
	        		<button className="valueBtn" value="." onClick={addValue}>.</button>
	        		<button className="valueBtn equalSign" onClick={calculateFun}>=</button>
	        		<button className="valueBtn operatorBtn" value='+' onClick={operatorBtn}>+</button>

	        	</div>
	        </div>
      	</div>
      	</>
	)
}

export default Calculator;
import React, {useState} from 'react';
import './App.css';
import CalcButton from './calculator';

const App = () =>{

  const[windowVal, updateWindow] = useState('0');
  const[hasOperator, updateOperator] = useState(false);
  const[operator, pickOperator] = useState('');

  function clicked(value){
    if(windowVal.length > 16){
      return;
    }
    else if(isOperator(value) && hasOperator){
      return;
    }
    else if(windowVal === '0'){
      if(isOperator(value)){
        return;
      }
      updateWindow(value);
    }
    else{
      if(isOperator(value)){
        updateOperator(true);
        pickOperator(value);
      }
      updateWindow(windowVal + value);
    }
  }

  function isOperator(value){
    if(value === '+' || value === '-' || value === '/' || value ==='X'){
      return true;
    }
    return false;
  }

  function evaluate(){
    if(!hasOperator){
      return;
    }
    else{
      let result;
      const nums = windowVal.split(operator);
      switch(operator){
        case '+':
          result = Number(nums[0]) + Number(nums[1]);
          break;
        case '-':
          result = nums[0] - nums[1];
          break;
        case 'X':
          result = nums[0] * nums[1];
          break;
        case '/':
          result= nums[0] / nums[1];
          break;
        default:
          return;
      }
      updateWindow(result);
      updateOperator(false);
      pickOperator('');
    }
  }

  return(
    <div className="Calculator">
      <div className="Window">{windowVal}</div>
      <div className="ButtonRow">
        <CalcButton onClick={() => clicked('7')} value='7'/>
        <CalcButton onClick={() => clicked('8')} value='8'/>
        <CalcButton onClick={() => clicked('9')} value='9'/>
        <CalcButton onClick={() => clicked('+')} value='+' type='o'/>
      </div>
      <div className="ButtonRow">
        <CalcButton onClick={() => clicked('4')} value='4'/>
        <CalcButton onClick={() => clicked('5')} value='5'/>
        <CalcButton onClick={() => clicked('6')} value='6'/>
        <CalcButton onClick={() => clicked('-')} value='-' type='o'/>
      </div>
      <div className="ButtonRow">
        <CalcButton onClick={() => clicked('1')} value='1'/>
        <CalcButton onClick={() => clicked('2')} value='2'/>
        <CalcButton onClick={() => clicked('3')} value='3'/>
        <CalcButton onClick={() => clicked('X')} value='X' type='o'/>
      </div>
      <div className="ButtonRow">
        <CalcButton onClick={() => clicked('.')} value='.'/>
        <CalcButton onClick={() => clicked('0')} value='0'/>
        <CalcButton onClick={() => evaluate()} value='=' type='o'/>
        <CalcButton onClick={() => clicked('/')} value='/' type='o'/>
      </div>
    </div>
  );
}

export default App;

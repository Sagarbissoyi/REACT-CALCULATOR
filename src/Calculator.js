import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  font-size: 16px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #444;
  }
`;

const Message = styled.div`
  margin: 10px;
  font-size: 16px;
  color: ${props => props.error ? 'red' : 'blue'};
`;

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculation = (operator) => {
    if (num1 === '') {
      setError('Num1 Cannot Be Empty');
      return;
    }

    if (num2 === '') {
      setError('Num2 Cannot Be Empty');
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;

    switch (operator) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setError('Cannot divide by zero');
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }

    setResult(res);
    setError('');
  };

  return (
    <CalculatorWrapper>
      <h2>React Calculator</h2>
      <Input
        type="text"
        placeholder="Num 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Num 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <Button onClick={() => handleCalculation('+')}>+</Button>
        <Button onClick={() => handleCalculation('-')}>-</Button>
        <Button onClick={() => handleCalculation('*')}>*</Button>
        <Button onClick={() => handleCalculation('/')}>/</Button>
      </div>
      {error && <Message error>{`Error! ${error}`}</Message>}
      {result !== null && <Message>Success! Result - {result}</Message>}
    </CalculatorWrapper>
  );
};

export default Calculator;

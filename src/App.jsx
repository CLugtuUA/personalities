import React, { useState } from 'react';
import './App.css';

function App() {
  // State management
  const [pin, setPin] = useState('1234567890');
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('INPUT CODE');
  const [mode, setMode] = useState('normal'); // normal, verify, newCode, invalid, success
  const [userName] = useState('CHARLENE LUGTU');
  const [subjCode] = useState('CPEITEL3');

  // Handle number inputs
  const handleNumberInput = (num) => {
    if (mode === 'normal') {
      setInput(prev => prev + num);
      setDisplay(prev => prev === 'INPUT CODE' ? num : prev + num);
    } else if (mode === 'verify') {
      setInput(prev => prev + num);
      setDisplay(prev => prev === 'ENTER CURRENT CODE' ? num : prev + num);
    } else if (mode === 'newCode') {
      setInput(prev => prev + num);
      setDisplay(prev => prev === 'ENTER NEW CODE' ? num : prev + num);
    } else if (mode === 'invalid') {
      setInput(num);
      setDisplay(num);
      setMode('verify');
    } else if (mode === 'success') {
      setInput(num);
      setDisplay(num);
      setMode('normal');
    }
  };

  // Handle ENTER button
  const handleEnter = () => {
    if (mode === 'normal') {
      if (input === pin) {
        setDisplay('OPEN');
        setInput('');
      } else {
        setDisplay('LOCKED');
        setInput('');
      }
    } else if (mode === 'verify') {
      if (input === pin) {
        setDisplay('ENTER NEW CODE');
        setInput('');
        setMode('newCode');
      } else {
        setDisplay('INVALID CODE');
        setInput('');
        setMode('invalid');
      }
    } else if (mode === 'newCode') {
      if (input.length >= 8) {
        setPin(input);
        setDisplay('CHANGE CODE SUCCESSFUL');
        setInput('');
        setMode('success');
      } else {
        setDisplay('CODE SHOULD BE 8 DIGITS');
        setInput('');
        setMode('newCode');
      }
    }
  };

  // Handle PIN button (change PIN)
  const handlePinButton = () => {
    setDisplay('ENTER CURRENT CODE');
    setInput('');
    setMode('verify');
  };

  // Handle RESET button
  const handleReset = () => {
    setInput('');
    setDisplay('INPUT CODE');
    setMode('normal');
  };

  // Handle NAME button
  const handleName = () => {
    setDisplay(userName);
    setInput('');
  };

  // Handle SUBJ button
  const handleSubj = () => {
    setDisplay(subjCode);
    setInput('');
  };

  return (
    <div className="keypad-container">
      <div className="keypad">
        <h1 className="title">SECURITY LOCKER</h1>
        
        {/* Display */}
        <div className="display">
          <div className="display-text">{display}</div>
        </div>

        {/* Keypad Grid */}
        <div className="keypad-grid">
          {/* Row 1 */}
          <button className="key" onClick={() => handleNumberInput('1')}>1</button>
          <button className="key" onClick={() => handleNumberInput('2')}>2</button>
          <button className="key" onClick={() => handleNumberInput('3')}>3</button>
          <button className="control-key pin-key" onClick={handlePinButton}>PIN</button>
          <button className="control-key enter-key" onClick={handleEnter}>ENTER</button>

          {/* Row 2 */}
          <button className="key" onClick={() => handleNumberInput('4')}>4</button>
          <button className="key" onClick={() => handleNumberInput('5')}>5</button>
          <button className="key" onClick={() => handleNumberInput('6')}>6</button>
          <button className="control-key reset-key" onClick={handleReset}>RESET</button>
          <button className="control-key" onClick={handleName}>NAME</button>

          {/* Row 3 */}
          <button className="key" onClick={() => handleNumberInput('7')}>7</button>
          <button className="key" onClick={() => handleNumberInput('8')}>8</button>
          <button className="key" onClick={() => handleNumberInput('9')}>9</button>
          <button className="control-key" onClick={handleSubj}>SUBJ</button>
          <button className="key" onClick={() => handleNumberInput('0')}>0</button>
        </div>

        {/* Info */}
        <div className="info">
          <p>Student: {userName}</p>
          <p>Subject: {subjCode}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
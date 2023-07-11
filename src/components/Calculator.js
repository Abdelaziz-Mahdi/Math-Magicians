import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const getBtn = (ButtonName) => {
    setState(calculate(state, ButtonName));
  };

  return (
    <div>
      <Display result={[state.total, state.next, state.operation]} />
      <Button getBtn={getBtn} />
    </div>
  );
}

function Display({ result }) {
  return (
    <h2 className="bg-gray color-white text-right pr-1 height-16" style={{ marginButton: '0px' }}>
      {result[0] == null && result[1] == null ? '0' : result[0]}
      {result[2] == null ? '' : result[2]}
      {result[1] == null ? '' : result[1]}
    </h2>
  );
}

Display.propTypes = {
  result: PropTypes.arrayOf(string).isRequired,
};

function Button({ getBtn }) {
  const buttons = [
    { id: 1, value: 'AC', color: 'gray-eo' },
    { id: 2, value: '+/-', color: 'gray-eo' },
    { id: 3, value: '%', color: 'gray-eo' },
    { id: 4, value: '÷', color: 'orange' },
    { id: 5, value: '7', color: 'gray-eo' },
    { id: 6, value: '8', color: 'gray-eo' },
    { id: 7, value: '9', color: 'gray-eo' },
    { id: 8, value: 'x', color: 'orange' },
    { id: 9, value: '4', color: 'gray-eo' },
    { id: 10, value: '5', color: 'gray-eo' },
    { id: 11, value: '6', color: 'gray-eo' },
    { id: 12, value: '-', color: 'orange' },
    { id: 13, value: '1', color: 'gray-eo' },
    { id: 14, value: '2', color: 'gray-eo' },
    { id: 15, value: '3', color: 'gray-eo' },
    { id: 16, value: '+', color: 'orange' },
    { id: 17, value: '0', color: 'gray-eo col-span-2' },
    { id: 18, value: '.', color: 'gray-eo' },
    { id: 19, value: '=', color: 'orange' },
  ];

  const handelClick = (e) => {
    getBtn(e.target.value);
  };

  return (
    <div className="grid grid-cols-4 height-83">
      {
        buttons.map((button) => (
          <button value={button.value} onClick={handelClick} type="button" key={button.id} className={`bg-${button.color}`}>{button.value}</button>
        ))
      }
    </div>
  );
}

Button.propTypes = {
  getBtn: PropTypes.func.isRequired,
};

export default Calculator;

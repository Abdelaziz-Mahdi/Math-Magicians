function Calculator() {
  return (
    <div>
      <Display />
      <Button />
    </div>
  );
}

function Display() {
  return (
    <h2 className="bg-gray color-white text-right pr-1 height-16">0</h2>
  );
}

function Button() {
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
  return (
    <div className="grid grid-cols-4 height-83">
      {
        buttons.map((button) => (
          <button type="button" key={button.id} className={`bg-${button.color}`}>{button.value}</button>
        ))
      }
    </div>
  );
}

export default Calculator;

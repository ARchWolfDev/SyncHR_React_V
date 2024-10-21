import React from 'react';

function Form1({ value, setValue }) {

  const handleValue = (event) => {
    const { name, value } = event.target

    setValue((preValue) => ({
        ...preValue, 
        [name] : value 
    }) );
    console.log(value)
  };

//   const handleCheckBox

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Input 1</label>
          <input
            className="form-control"
            name='input1'
            value={value.input1}
            onChange={handleValue}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Input 2</label>
          <input 
            className="form-control"
            name='input2'
            value={value.input2}
            onChange={handleValue} />
        </div>
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>
      </form>
    </div>
  );
}

export default Form1;

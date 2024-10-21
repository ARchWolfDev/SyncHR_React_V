import React from 'react';

function CalendarBody({ value, setValue, selectedDate }) {

    
  const handleValue = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">{selectedDate}</label>
          <input
            type="email"
            className="form-control"
            value={value}
            onChange={handleValue}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Input 2</label>
          <input className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>
      </form>
    </div>
  );
}

export default CalendarBody;

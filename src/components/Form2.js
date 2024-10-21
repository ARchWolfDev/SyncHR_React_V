import React from 'react'

function Form2() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Input 1</label>
                    <input type="email" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Input 2</label>
                    <input className="form-control"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input"></input>
                    <label className="form-check-label">Check me out</label>
                </div>
            </form>
        </div>
      )
    }

export default Form2
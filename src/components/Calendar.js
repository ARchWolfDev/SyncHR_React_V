import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useModalContext } from './ModalProvider';
import { Button } from 'react-bootstrap';
import CalendarModal from './CalendarModal';

function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date());
    const {handleShowModal} = useModalContext()

    const handleCalendarData = (content) => {
        handleShowModal(content, (props) => <CalendarModal {...props} selectedDate={content} />)
    }

    const handlePreviousMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            // console.log(newDate)
            newDate.setMonth(newDate.getMonth() - 1);
            return newDate;
        })
    }

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + 1);
            // console.log(newDate)
            return newDate;
        })
    }

    const renderHeader = () => {
        return (
            <div className='container text-center'>
                <div className='row align-items-center'>
                    <div className='col'><button onClick={handlePreviousMonth} className='btn btn-sm'><i className="fa-solid fa-chevron-left"></i></button></div>
                    <div className='col'><h2>{currentDate.toLocaleString('default', {month: 'long'})} {currentDate.getFullYear()}</h2></div>
                    <div className='col'>
                        <button 
                            onClick={handleNextMonth} 
                            className='btn btn-sm'>
                                <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <Button 
                            variant="light" 
                            style={{float: 'right'}} 
                            size="sm">
                                <i className="fa-solid fa-gear"></i>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    
    const renderDays = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className='row days-header'>
                {days.map(day => (
                    <div className="col day" key={day}>{day}</div>
                ))}
            </div>
        )
    }

    const renderCells = () => {
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const startDate = firstDay.getDay(); // Day of the week of the first day
        const endDate = lastDay.getDate(); // Total days in the month

        const rows = [];
        let cells = [];

        // Create empty cells for days before the first day of the month
        for (let i = 0; i < startDate; i++) {
            cells.push(<div className="col cell cell-empty" key={`empty-${i}`}></div>)
        }

        // Check if the day is current day or check if the day was in a request day

        const today = new Date();
        const todayDate = today.getDate()
        const todayMonth = today.getMonth()
        const todayYear = today.getFullYear()

        const reqListDemo = [{
            date: new Date(2024, 9, 16),
            status: 2,
            user: 1
        },{
            date: new Date(2024, 8, 16),
            status: 3,
            user: 2
        }]

        const isDateinArray = (targetDate, dataArray) => {
            const dataTarget = targetDate.toISOString()
            for ( let i = 0; i < dataArray.length; i++) {
                const list = dataArray[i].date.toISOString()
                if (dataTarget === list) {
                    if (dataArray[i].status === 2) {
                        return "approved"
                    } else if (dataArray[i].status === 3) {
                        return "rejected"
                    } else {
                        return ''
                    }
                }
            }
            return ''
        }

        const startEndWeek = (selectedDate) => {
            if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
                return { color: "red" }
            }
            return { color: "" }
        }

        // Create cells for each day of the month
        for (let d = 1; d <= endDate; d++) {

            const isToday = d === todayDate && currentDate.getMonth() === todayMonth && currentDate.getFullYear() === todayYear;
            const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), d)

            cells.push(<div 
                className={`col cell ${isToday ? 'today' : ''} ${isDateinArray(selectedDate, reqListDemo)}`}
                style={startEndWeek(selectedDate)}
                onClick={() => handleCalendarData(selectedDate.toDateString())} 
                key={d}>{d}</div>)

            if ((d + startDate) % 7 === 0) {
                rows.push(<div className="row calendar-row" key={d}>{cells}</div>);
                cells = []
            }
        }

            

        while (cells.length < 7) {
            cells.push(<div className="col cell cell-empty" key={`empty-end-${cells.length}`}></div>);
        }
        rows.push(<div className="row calendar-row" key="end">{cells}</div>);

        return <div>{rows}</div>;
    }

  return (
    <div>
        {renderHeader()}
        <div>
            {renderDays()}
            {renderCells()}
        </div>
    </div>
  )
}

export default Calendar

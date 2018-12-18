import React, {Component} from 'react';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment'

class Homepage extends Component {
    state = {
        startDate: moment(),
        endDate: moment(),
        name: "",
        phoneNumber: "",
        numberOfRooms: " ",
        focusedInput: null,
        isCompleted: false
    }
    setDates = ({startDate, endDate}) => {

        this.setState({
            startDate: startDate !== null ? startDate : startDate,
            endDate: endDate !== null ? endDate : endDate
        })
    }
    formattedDate = (date) => {
        let dateFormat = 'dddd, MMMM Do YYYY';

        return date.format(dateFormat);

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="main-block">
                        <div className="card  " style={{width: "30rem"}}>
                            <h3 className="card-title"> Book Unique Homes and Hotels</h3>

                            <div className="card-body">
                                <form className="form-group">
                                    <label>Where</label>
                                    <input className="form-control" type="text"/>
                                    <div>
                                    <label>Check In</label>
                                    <label>Check Out</label>
                                    </div>
                                    <DateRangePicker
                                        className="form-control"
                                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                        startDateId="startDate" // PropTypes.string.isRequired,
                                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                        endDateId="enddate" // PropTypes.string.isRequired,
                                        onDatesChange={this.setDates} // PropTypes.func.isRequired,
                                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                        onFocusChange={focusedInput => this.setState({focusedInput})} // PropTypes.func.isRequired,
                                    />
                                </form>
                                <div className="form-group">
                                    <label>Guests</label>
                                    <select className="form-control">
                                        <option></option>
                                        <option>Adults</option>
                                        <option>Children</option>
                                        <option>Infants</option>
                                    </select>
                                    <br/>
                                        <div className=" text-center">
                                            <button id="button" name="button" className="btn btn-primary">Search!
                                            </button>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
            ;

    }
}


export default Homepage;

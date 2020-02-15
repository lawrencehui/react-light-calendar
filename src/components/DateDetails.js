import React, { Component } from 'react'
import { formartTime } from '../utils'
import times from 'lodash.times'
import { bool, arrayOf, string, number, func } from 'prop-types'
import t from 'timestamp-utils'

class DateDetails extends Component {
  onHoursChange = e => {
    const { date, onTimeChange } = this.props
    onTimeChange(t.setHours(date, parseInt(e.target.value, 10)))
  }

  onMinutesChange = e => {
    const { date, onTimeChange } = this.props
    onTimeChange(t.setMinutes(date, parseInt(e.target.value, 10)))
  }

  render = () => {
    const { date, displayTime, dayLabels, monthLabels } = this.props
    const hours = t.getHours(date)
    // const minutes = t.getMinutes(date)
    const minutes = "00"

    return (
      <div className="rlc-date-details-wrapper">
        <div className="rlc-date-details">
          <div className="rlc-date-number">{t.getDay(date)}</div>
          <div className="rlc-date-day-month-year">
            <div className="rlc-detail-day">{dayLabels[t.getWeekDay(date)]}</div>
            <div className="rlc-detail-month-year">{monthLabels[t.getMonth(date) - 1]} <span className="rlc-detail-year">{t.getYear(date)}</span></div>
          </div>
        </div>
        {displayTime &&
          <div className="rlc-date-time-selects">
            <select onChange={this.onHoursChange} value={hours}>{times(24).map(hour => <option value={formartTime(hour)} key={hour}>{formartTime(hour)}</option>)}</select>
            <span className="rlc-time-separator">:</span>
            <select onChange={this.onMinutesChange} value={minutes}>{times(60).map(minute => <option value={formartTime(minute)} key={minute}>{formartTime(minute)}</option>)}</select>
            // <select onChange={this.onMinutesChange} value={minutes}>
            //   <option value={formartTime(0)} key={0}>{formartTime(0)}</option>
            //   <option value={formartTime(15)} key={15}>{formartTime(15)}</option>
            //   <option value={formartTime(30)} key={30}>{formartTime(30)}</option>
            //   <option value={formartTime(45)} key={45}>{formartTime(45)}</option>
            // </select>
          </div>
        }
      </div>
    )
  }
}

DateDetails.propTypes = {
  date: number,
  displayTime: bool,
  dayLabels: arrayOf(string),
  monthLabels: arrayOf(string),
  onTimeChange: func
}

export default DateDetails

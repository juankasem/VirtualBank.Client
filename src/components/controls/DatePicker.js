import React from 'react'
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = () => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

        </MuiPickersUtilsProvider>
    )
}

export default DatePicker

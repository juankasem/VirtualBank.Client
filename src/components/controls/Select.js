import React from 'react'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core'

const Select = (props) => {
    const { name, label, value, onChange, options } = props
    return (
        <FormControl
            variant="outlined"
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>
                    ))
                }
            </MuiSelect>
        </FormControl>
    )
}

export default Select

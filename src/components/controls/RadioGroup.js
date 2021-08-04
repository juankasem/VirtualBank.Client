import React from 'react';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const RadioGroup = (props) => {

    const { name, label, value, onChange, items } = props;

    return (
        <FormControl>
            <FormLabel>
                < MuiRadioGroup row
                    name={name}
                    label={label}
                    value={value}
                    onChange={onChange}
                >
                    {
                        items.map((item) => (
                            <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.title} />
                        ))
                    }
                </ MuiRadioGroup>
            </FormLabel>
        </FormControl>
    )
}

export default RadioGroup

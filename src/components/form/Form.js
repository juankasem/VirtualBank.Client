import React from 'react'
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    },
}))

const Form = (props) => {
    const classes = useStyles();

    return (
        <form className={classes.root} autoComplete="off" >
            {props.children}
        </form>
    )
}

export default Form

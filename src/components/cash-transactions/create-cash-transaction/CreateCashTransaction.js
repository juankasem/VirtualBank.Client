import React, { useState } from "react";
import { TextField, MenuItem, Button, Typography, Paper } from "@material-ui/core";
import { paymentTypes } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./../../../Styles";
import moment from "moment";
import { addCashTransaction } from "../../../actions/cashTransactions";

const CreateCashTransaction = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const bankAccount = useSelector((state) => state.bankAccounts);
  const { recipientBankAccount } = bankAccount;

  const [cashTransaction, setCashTransaction] = useState({
    cashTransactionType: "",
    initiatedBy: "",
    recipient: recipientBankAccount.recipientName,
    from: "",
    to: recipientBankAccount.iban,
    amount: "",
    paymentType: "",
    description: "",
    cashTransactionDate: moment,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCashTransaction(cashTransaction));
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6"></Typography>
        <TextField
          name="recipient"
          variant="outlined"
          label="Recipient Name"
          value={cashTransaction.recipient}
          onChange={(e) =>
            setCashTransaction({
              ...cashTransaction,
              recipient: e.target.value,
            })
          }
        />
        <TextField
          name="to"
          variant="outlined"
          label="Recipient IBAN"
          value={cashTransaction.to}
          onChange={(e) => setCashTransaction({ ...cashTransaction, to: e.target.value })}
        />
        <TextField
          name="amount"
          variant="outlined"
          label="amount"
          value={cashTransaction.amount}
          onChange={(e) => setCashTransaction({ ...cashTransaction, amount: e.target.value })}
        />
        <TextField
          id="-select-cpayment-types"
          select
          label="Select"
          value={cashTransaction.paymentType}
          onChange={(e) =>
            setCashTransaction({
              ...cashTransaction,
              paymentType: e.target.value,
            })
          }
          helperText="Please select payment type"
        >
          {paymentTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="description"
          variant="outlined"
          label="amount"
          value={cashTransaction.description}
          onChange={(e) =>
            setCashTransaction({
              ...cashTransaction,
              description: e.target.value,
            })
          }
        />

        <Button type="submit" className={classes.buttonSubmit} variant="container" color="primary" size="large" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default CreateCashTransaction;

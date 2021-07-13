import React from "react";
import { CircularProgress, Button, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MessageBox from "../../layout/MessageBox";
import useStyles from "./../../../Styles";
import BankAccount from "../bank-account/BankAccount";

const BankAccountList = () => {
  const classes = useStyles();
  const history = useHistory();

  const customerBankAccounts = useSelector((state) => state.bankAccounts);
  const { bankAccounts, loading, errors } = customerBankAccounts;

  return (
    <div className={classes.bankAccountList}>
      <Typography variant="h5">My Accounts</Typography>
      {loading ? (
        <CircularProgress />
      ) : errors ? (
        <MessageBox variant="danger" />
      ) : (
        bankAccounts &&
        bankAccounts.length > 0 &&
        bankAccounts.map((bankAccount) => <BankAccount key={bankAccount.id} bankAccount={bankAccount} />)
      )}
      {!loading & !errors && (
        <div className={classes.buttons}>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            color="secondary"
            onClick={history.push("/create-cash-transaction")}
          >
            Money Transfer
          </Button>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            color="secondary"
            onClick={history.push("/cash-transactions")}
          >
            Account Transactions
          </Button>
        </div>
      )}
    </div>
  );
};

export default BankAccountList;

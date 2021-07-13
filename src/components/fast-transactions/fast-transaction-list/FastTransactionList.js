import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "../../../Styles";
import MessageBox from "../../layout/MessageBox";
import FastTransaction from "../fast-transaction/FastTransaction";

const FastTransactionList = () => {
  const classes = useStyles();
  const fastTransactions = useSelector((state) => state.fastTransactions);
  const { accountFastTransactions, loading, errors } = fastTransactions;

  return (
    <div classname={classes.fastTransactionList}>
      <Typography variant="h5">Fast Transactions</Typography>
      {loading ? (
        <CircularProgress />
      ) : errors ? (
        <MessageBox variant="danger" />
      ) : (
        accountFastTransactions &&
        accountFastTransactions.length > 0 &&
        accountFastTransactions.map((fastTx) => <FastTransaction key={fastTx.id} fastTransaction={fastTx} />)
      )}
    </div>
  );
};

export default FastTransactionList;

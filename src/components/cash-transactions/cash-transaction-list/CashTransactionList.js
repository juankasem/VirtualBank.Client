import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Table, TableBody, TableRow, TableCell, Paper } from "@material-ui/core";
import MessageBox from "../../layout/MessageBox";
import useStyles from "./../../../Styles";
import { listAccountCashTransactions } from "../../../actions/cashTransactions";

const CashTransactionList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const bankAccounts = useSelector((state) => state.bankAccounts);
  const { selectedBankAccount } = bankAccounts;
  const cashTransactions = useSelector((state) => state.cashTransactions);
  const { accountCashTransactions, loading, errors } = cashTransactions;

  useEffect(() => {
    dispatch(listAccountCashTransactions(selectedBankAccount?.iban));
  }, [dispatch, selectedBankAccount.iban]);

  return loading ? (
    <CircularProgress />
  ) : errors ? (
    <MessageBox variant="danger" text={errors.message} />
  ) : (
    <Paper>
      <Table>
        <TableBody>
          {accountCashTransactions &&
            accountCashTransactions.length > 0 &&
            accountCashTransactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>{tx.transactionDate}</TableCell>
                <TableCell>{tx.description}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell>{tx.balance}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CashTransactionList;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomerBankAccounts } from "../../actions/bankAccounts";
import { getAccountLatestTransfers } from "../../actions/cashTransactions";
import { getAccountFastTransactions } from "../../actions/fastTransactions";
import BankAccountList from "./../bank-accounts/bank-account-list/BankAcountList";
import FastTransactionList from "./../fast-transactions/fast-transaction-list/FastTransactionList";
import useStyles from "./../../../Styles";

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const bankAccounts = useSelector((state) => state.bankAccounts);
  const loggedInCustomer = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(getCustomerBankAccounts(loggedInCustomer.id));
    dispatch(getAccountLatestTransfers(bankAccounts.selectedBankAccount.iban));
    dispatch(getAccountFastTransactions(bankAccounts.selectedBankAccount.iban));
  }, [dispatch, loggedInCustomer.id, bankAccounts.selectedBankAccount.iban]);

  return (
    <div className={classes.homePage}>
      <BankAccountList customer={loggedInCustomer} />
      <FastTransactionList iban={bankAccounts.selectedBankAccount.iban} />
    </div>
  );
};

export default HomePage;

import React from "react";
import useStyles from "../../../Styles";
import { Card, Typography } from "@material-ui/core";

const BankAccount = ({ bankAccount }) => {
  const classes = useStyles();

  return (
    <Card className={classes.bankAccountCard}>
      <div className={classes.title}>
        <Typography variant="h6">{bankAccount.branchName} branch</Typography>
        <Typography variant="body2">
          {bankAccount.branchCode}-{bankAccount.accountNo}
        </Typography>
      </div>

      <div className={classes.accountDetails}>
        <div className={classes.balance}>
          <Typography variant="body2">Balance</Typography>
          <Typography variant="body2">{bankAccount.balance}</Typography>
        </div>
        <div className={classes.iban}>
          <Typography variant="body2">IBAN</Typography>
          <Typography variant="body2">{bankAccount.iban}</Typography>
        </div>
      </div>
    </Card>
  );
};

export default BankAccount;

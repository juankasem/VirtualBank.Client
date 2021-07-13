import React from "react";
import useStyles from "../../../Styles";
import { Card, Typography } from "@material-ui/core";

const FastTransaction = ({ fastTransaction }) => {
  const classes = useStyles();

  return (
    <Card className={classes.fastTransactionCard}>
      <div className={classes.left}>
        <Typography variant="h6">
          {fastTransaction.amount} {fastTransaction.currency}
        </Typography>
        <Typography variant="body2">{fastTransaction.shortName}</Typography>
      </div>
      <div className={classes.middle}>Arrow icon</div>
      <div className={classes.right}>
        <Typography variant="h6">{fastTransaction.recipient}</Typography>
        <Typography variant="body2">{fastTransaction.bankName}</Typography>
      </div>
    </Card>
  );
};

export default FastTransaction;

import React, { useEffect } from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { useDispatch } from "react-redux";
import CashTransactionList from "./components/cash-transactions/cash-transaction-list/CashTransactionList";
import CreateCashTransaction from "./components/cash-transactions/create-cash-transaction/CreateCashTransaction";
import useStyles from "./Styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import SideMenu from "./components/layout/SideMenu";
import Header from "./components/layout/Header";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Router>
      <Container maxWidth="lg">
        <SideMenu />
        <Header />
        <h2>Hi</h2>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cash-transactions" component={CashTransactionList} />
          <Route path="/create-cash-transaction" component={CreateCashTransaction} />
        </Switch>
      </Container>
      <CssBaseline />
    </Router>
  );
};

export default App;

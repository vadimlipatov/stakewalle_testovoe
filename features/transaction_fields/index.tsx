"use client";

import { Container, Typography, TextField, Select, MenuItem, Grid } from "@mui/material";
import { useTransactionFields } from "./useTransactionFields";
import { ChangeEvent } from "react";

const TransactionFields = ({
  amount,
  walletAddress,
  handleChangeWalletAddress,
  handleChangeAmount,
}: {
  walletAddress: string;
  amount: string;
  handleChangeAmount: (event: ChangeEvent<HTMLInputElement>) => {};
  handleChangeWalletAddress: (event: ChangeEvent<HTMLInputElement>) => {};
}) => {
  const [selectedCoin, handleSelectChange] = useTransactionFields();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Make Transaction
      </Typography>

      <TextField
        label="Recipient Address"
        variant="outlined"
        fullWidth
        value={walletAddress}
        onChange={handleChangeWalletAddress}
        sx={{ mb: 2 }}
      />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3}>
          <Select value={selectedCoin} onChange={handleSelectChange} fullWidth sx={{ mb: 1 }}>
            <MenuItem value="BNB">BNB</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            label="Amount"
            variant="outlined"
            value={amount}
            onChange={handleChangeAmount}
            fullWidth
            sx={{ mb: 1 }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TransactionFields;

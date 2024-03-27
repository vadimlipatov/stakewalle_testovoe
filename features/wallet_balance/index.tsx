"use client";

import { Container, Typography, CircularProgress, Stack } from "@mui/material";
import { useWalletBalance } from "./useWalletBalance";

export const WalletBalance = () => {
  const [walletAddress, ethBalance, bnbBalance, loading] = useWalletBalance();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Wallet Information
      </Typography>
      {loading ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : (
        <>
          <Typography noWrap variant="subtitle1">
            Current Wallet: {walletAddress}
          </Typography>
          <Typography variant="subtitle1">ETH Balance: {ethBalance}</Typography>
          <Typography variant="subtitle1">BNB Balance: {bnbBalance}</Typography>
        </>
      )}
    </Container>
  );
};

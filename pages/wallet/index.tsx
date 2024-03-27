"use client";

import { Box, Grid, Container, Alert, Link } from "@mui/material";
import { WalletBalance } from "@/features/wallet_balance";
import useWallet from "./useWallet";
import Transaction from "@/widgets/transaction";

export default function WalletPage() {
  const [isMetaMask] = useWallet();

  if (!isMetaMask) {
    return (
      <Container maxWidth="sm">
        <Alert severity="error">
          Please Install Chrome Extension&nbsp;
          <Link href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
            Metamask
          </Link>
        </Alert>
      </Container>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Grid container spacing={2} alignItems="baseline">
        <Grid lg={1} xl={2}></Grid>
        <Grid item xs={12} md={6} lg={5} xl={4}>
          <WalletBalance />
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={4}>
          <Transaction />
        </Grid>
        <Grid lg={1} xl={2}></Grid>
      </Grid>
    </Box>
  );
}

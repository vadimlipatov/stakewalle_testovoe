"use client";

import { Box, Grid, Container, Alert, Link } from "@mui/material";
import { WalletBalance } from "@/features/wallet_balance";
import useWallet from "./useWallet";
import MakeTransaction from "@/widgets/make_transaction";

export default function WalletPage() {
  const [isMetaMask] = useWallet();

  if (!isMetaMask) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Alert severity="error">
          Please Install Chrome Extension&nbsp;
          <Link href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
            Metamask
          </Link>
        </Alert>
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Grid container alignItems="baseline" justifyContent="center">
        <Grid item xs={12} lg={5} xl={4}>
          <WalletBalance />
        </Grid>
        <Grid item xs={12} lg={5} xl={4}>
          <MakeTransaction />
        </Grid>
      </Grid>
    </Box>
  );
}

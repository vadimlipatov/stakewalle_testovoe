import { WalletBalance } from "@/features/wallet_balance";
import { Container } from "@mui/material";
import React from "react";

export default function WalletInfo() {
  return (
    <Container maxWidth="sm">
      <WalletBalance />
    </Container>
  );
}

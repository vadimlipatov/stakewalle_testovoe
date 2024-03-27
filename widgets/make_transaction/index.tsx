import { ChangeWalletNetwork } from "@/features/change_network";
import { SendTransactionButton } from "@/features/send_transaction_button";
import TransactionFields from "@/features/transaction_fields";
import { Container } from "@mui/material";
import React from "react";
import useTransaction from "./useTransaction";

export default function MakeTransaction() {
  const [walletAddress, amount, handleChangeWalletAddress, handleChangeAmount] = useTransaction();
  return (
    <Container maxWidth="sm">
      <TransactionFields
        amount={amount}
        walletAddress={walletAddress}
        handleChangeAmount={handleChangeAmount}
        handleChangeWalletAddress={handleChangeWalletAddress}
      />
      <ChangeWalletNetwork />
      <SendTransactionButton walletAddress={walletAddress} amount={amount} />
    </Container>
  );
}

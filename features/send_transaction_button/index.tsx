"use client";

import { Button, Alert } from "@mui/material";
import { useSendTransactionButton } from "./useSendTransactionButton";

export const SendTransactionButton = ({
  walletAddress,
  amount,
}: {
  walletAddress: string;
  amount: string;
}) => {
  const [loading, error, handleSendTransaction] = useSendTransactionButton(walletAddress, amount);

  return (
    <>
      <Button sx={{mt: 1}} variant="contained" color="primary" onClick={handleSendTransaction} fullWidth>
        {loading ? "Pending...Check MetaMask" : "Send Transaction"}
      </Button>

      {error && (
        <Alert sx={{ mt: 2 }} severity="error">
          {error}
        </Alert>
      )}
    </>
  );
};

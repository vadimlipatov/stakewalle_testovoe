"use client";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  CircularProgress,
  Stack,
  Alert,
} from "@mui/material";
import { useChangeNetwork } from "./useChangeNetwork";

export const ChangeWalletNetwork = () => {
  const [network, loading, error, handleChangeNetwork] = useChangeNetwork();

  if (loading)
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );

  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Network</FormLabel>
        <RadioGroup row value={network} onChange={handleChangeNetwork}>
          <FormControlLabel value="bsc_testnet" control={<Radio />} label="BSC Testnet" />
          <FormControlLabel value="bsc_mainnet" control={<Radio />} label="BSC Mainnet" />
          <FormControlLabel value="eth_mainnet" control={<Radio />} label="Ethereum Mainnet" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

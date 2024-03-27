import { ChangeEvent, useState } from "react";

export default function useTransaction() {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("0.001");

  const handleChangeWalletAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value as string);
  };

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value as string);
  };
  return [walletAddress, amount, handleChangeWalletAddress, handleChangeAmount];
}

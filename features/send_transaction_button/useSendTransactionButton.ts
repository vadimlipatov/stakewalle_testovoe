"use client";

import { useState } from "react";
import { ethers } from "ethers";

export const useSendTransactionButton = (
  walletAddress: string,
  amount: string
): [boolean, string, () => void] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function sendTransaction(toWalletAddress: string, amount: string): Promise<void> {
    try {
      setLoading(true);

      // Connect to MetaMask
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get signer
      const signer = provider.getSigner();

      // Construct transaction
      const tx = {
        to: toWalletAddress, // Recipient address
        value: ethers.utils.parseEther(amount), // Amount in ether (0.1 BNB in this case)
        gasLimit: 21000, // Gas limit
        gasPrice: ethers.utils.parseUnits("5", "gwei"), // Gas price (5 gwei)
      };

      // Sign and send transaction
      const txResponse = await signer.sendTransaction(tx);
      console.log("Transaction sent:", txResponse);
    } catch (error) {
      setError("MetaMask error occurred");
      console.error("MetaMask error:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setError(""), 5000);
    }
  }

  const handleSendTransaction = async () => {
    if (walletAddress.trim() && amount.trim()) {
      await sendTransaction(walletAddress, amount);
    }
  };

  return [loading, error, handleSendTransaction];
};

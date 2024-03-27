"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";

export function useWalletBalance() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [ethBalance, setEthBalance] = useState<string>("");
  const [bnbBalance, setBnbBalance] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchEthBalance = async () => {
    if (window.ethereum) {
      // Initialize the ethers provider with MetaMask's injected provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Request access to the user's accounts
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Get the user's address
      const accounts = await provider.listAccounts();

      // Get the balance of the user's address
      const balance = await provider.getBalance(accounts[0]);
      setWalletAddress(accounts[0]);

      // Convert balance from wei to ether and set it in state
      const ethBalance = ethers.utils.formatEther(balance);
      console.log("Eth: " + ethBalance);
      setEthBalance(ethBalance);
    }
  };

  const fetchBnbBalance = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Configure provider for Binance Smart Chain
      const bscProvider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

      // Get signer from MetaMask provider
      const signer = provider.getSigner();
      const bnbAddress = await signer.getAddress();

      // Fetch BNB balance
      const bnbBalanceWei = await bscProvider.getBalance(bnbAddress);
      const bnbBalance = ethers.utils.formatUnits(bnbBalanceWei, "ether");
      console.log("BNB: " + bnbBalance);
      setBnbBalance(bnbBalance);
    }
  };

  useEffect(() => {
    try {
      fetchEthBalance();
      fetchBnbBalance();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return [walletAddress, ethBalance, bnbBalance, loading] as const;
}

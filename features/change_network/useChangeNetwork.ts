"use client";

import React, { useState, useEffect } from "react";

export const  useChangeNetwork = () => {
  const [network, setNetwork] = useState<string>(""); // 'bsc_mainnet'
  const [loading, setLoading] = useState<boolean>(true);

  const handleChangeNetwork = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const networkName = event.target.value;

    // Update network state
    setNetwork(networkName);

    try {
      // Request MetaMask to switch network
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: mapNetworkNameToChainId(networkName) }], // 0x61 for BSC Testnet, 0x1 for Ethereum Mainnet, 0x38 BSC Mainnet
      });
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  const getCurrentNetworkName = async () => {
    if (window.ethereum) {
      // Request MetaMask to enable itself
      await window.ethereum.enable();

      // Get the current network ID
      const networkId = window.ethereum.networkVersion;
      console.log("Network ID:", networkId);

      // Convert network ID to network name
      const networkName = mapNetworkIdToNetworkName(networkId);

      return networkName;
    }
    return "bsc_testnet";
  };

  const mapNetworkIdToNetworkName = (networkId: string) => {
    switch (networkId) {
      case "1":
        return "eth_mainnet";
      case "56":
        return "bsc_mainnet";
      case "97":
        return "bsc_testnet";
      default:
        return "";
    }
  };

  const mapNetworkNameToChainId = (networkName: string) => {
    switch (networkName) {
      case "eth_mainnet":
        return "0x1";
      case "bsc_mainnet":
        return "0x38";
      case "bsc_testnet":
        return "0x61";
      default:
        return "0x1";
    }
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const network = await getCurrentNetworkName();
      setNetwork(network);
      setLoading(false);
    };

    init();
  }, []);

  return [network, loading, handleChangeNetwork] as const;
}

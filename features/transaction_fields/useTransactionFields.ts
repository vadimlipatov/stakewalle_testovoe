"use client";

import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

export const useTransactionFields = () => {
  const [selectedCoin, setSelectedCoin] = useState<string>("BNB");

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedCoin(event.target.value as string);
  };

  return [selectedCoin, handleSelectChange] as const;
};

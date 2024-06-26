import { useEffect, useState } from "react";

export default function useWallet() {
  const [isMetaMask, setIsMetaMask] = useState<boolean>(true);

  useEffect(() => {
    if (window.ethereum == undefined) {
      setIsMetaMask(false);
    }
  }, []);

  return [isMetaMask] as const;
}

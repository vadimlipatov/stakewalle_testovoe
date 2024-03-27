import { useEffect, useState } from "react";

export default function useWallet() {
  const [isMetaMask, setIsMetaMask] = useState(true);

  useEffect(() => {
    if (window.ethereum == undefined) {
      setIsMetaMask(false);
    }
  }, []);

  return [isMetaMask];
}

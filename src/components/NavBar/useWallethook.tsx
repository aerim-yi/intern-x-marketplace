import { useContext } from "react";
import { WalletContext } from "../../Context/WalletContext";

export const useWalletHook = () => {
  return useContext(WalletContext)
}

import { useEffect, useState } from "react";
import { hooks, metaMask } from "../../connectors/metaMask";
const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export const useMetaMaskCard = () => {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const provider = useProvider();
  const ENSNames = useENSNames(provider);
  const [error, setError] = useState(undefined);

  console.log({ hooks, metaMask });

  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);

  return {
    connector: metaMask,
    activeChainId: chainId,
    isActivating,
    isActive,
    error,
    setError,
    accounts,
    provider,
    ENSNames,
  };
};

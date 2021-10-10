import { web3Modal, connectToWallet } from "./wallet";

(async () => {
  try {
    if (web3Modal.cachedProvider) connectToWallet();
  } catch (e) {
    web3Modal.clearCachedProvider();
  }
})();

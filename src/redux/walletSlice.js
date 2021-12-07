import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: null,
    networkID: 43114,
    ens: null,
    myNFTs: [],
    tokens: {},
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setNetworkId: (state, action) => {
      state.networkID = action.payload;
    },
    setEnsName: (state, action) => {
      state.ens = action.payload;
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
    setTokenId: (state, action) => {
      state.tokens._tokenIdTracker = action.payload;
    },
    setMyNFTS: (state, action) => {
      state.myNFTs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAddress,
  setEnsName,
  setTokenId,
  setTokens,
  setNetworkId,
  setMyNFTS,
} = walletSlice.actions;

export const userAddress = (state) => state.wallet.address;
export const networkID = (state) => state.wallet.networkID;
export const tokens = (state) => state.wallet.tokens;
export const myNFTs = (state) => state.wallet.myNFTs;

export default walletSlice.reducer;

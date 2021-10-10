import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: null,
    ens: null,
    tokens: { totalValue: 0 },
    liquidity: { totalValue: 0, lpTokens: [] },
    stakings: {},
    rewards: {},
    errors: {},
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setEnsName: (state, action) => {
      state.ens = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
    setLiquidity: (state, action) => {
      state.liquidity = action.payload;
    },
    setStakings: (state, action) => {
      state.stakings = action.payload;
    },
    setRewards: (state, action) => {
      state.rewards = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAddress, setEnsName, setErrors, setTokens, setLiquidity } =
  walletSlice.actions;

export const userAddress = (state) => state.wallet.address;
export const userTokenBalances = (state) => state.wallet.tokens;
export const userLiquidityBalances = (state) => state.wallet.liquidity;

export default walletSlice.reducer;

import { createSlice, createSelector } from "@reduxjs/toolkit";

const claimsSlice = createSlice({
  name: "claims",
  initialState: {
    data: {},
  },
  reducers: {
    claimsReceived(state, action) {
      const data = action.payload.reduce((acc, item) => {
        acc[item.registrationNumber] = item;
        return acc;
      }, {});
      state.data = { ...state.data, ...data };
    },
    claimCreated(state, action) {
      state.data[action.payload.registrationNumber] = action.payload;
    },
  },
});

const selectClaimsSlice = (state) => state.claims;
const selectClaimNumber = (_, claimNumber) => claimNumber;

export const selectClaims = createSelector([selectClaimsSlice], (slice) =>
  Object.values(slice.data)
);
export const selectClaimByNumber = createSelector(
  [selectClaimsSlice, selectClaimNumber],
  (slice, number) => slice.data[number] || {}
);

export const { claimsReceived, claimCreated } = claimsSlice.actions;
export default claimsSlice.reducer;

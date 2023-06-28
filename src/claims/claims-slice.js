import { createSlice, createSelector } from "@reduxjs/toolkit";

const claimsSlice = createSlice({
  name: "claims",
  initialState: {
    data: {},
  },
  reducers: {
    claimsReceived(state, action) {
      const data = action.payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      state.data = { ...state.data, ...data };
    },
    claimCreated(state, action) {
      state.data[action.payload.id] = action.payload;
    },
  },
});

const selectClaimsSlice = (state) => state.claims;
const selectClaimId = (_, claimId) => claimId;

export const selectClaims = createSelector([selectClaimsSlice], (slice) =>
  Object.values(slice.data)
);
export const selectClaimById = createSelector(
  [selectClaimsSlice, selectClaimId],
  (slice, id) => slice.data[id] || {}
);

export const { claimsReceived, claimCreated } = claimsSlice.actions;
export default claimsSlice.reducer;

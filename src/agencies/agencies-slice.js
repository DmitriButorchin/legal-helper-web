import { createSlice, createSelector } from "@reduxjs/toolkit";

const agenciesSlice = createSlice({
  name: "agencies",
  initialState: {
    data: {},
  },
  reducers: {
    agenciesReceived(state, action) {
      const data = action.payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      state.data = { ...state.data, ...data };
    },
  },
});

const selectAgenciesSlice = (state) => state.agencies;

export const selectAgencies = createSelector([selectAgenciesSlice], (slice) =>
  Object.values(slice.data)
);

export const { agenciesReceived } = agenciesSlice.actions;
export default agenciesSlice.reducer;

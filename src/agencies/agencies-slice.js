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
const selectAgencyId = (_, agencyId) => agencyId;

export const selectAgencies = createSelector([selectAgenciesSlice], (slice) =>
  Object.values(slice.data)
);
export const selectAgenciesTitlesReference = createSelector(
  [selectAgencies],
  (agencies) =>
    agencies.reduce((acc, region) => {
      acc[region.id] = region.title;
      return acc;
    }, {})
);
export const selectAgencyById = createSelector(
  [selectAgenciesSlice, selectAgencyId],
  (slice, id) => slice.data[id] || {}
);

export const { agenciesReceived } = agenciesSlice.actions;
export default agenciesSlice.reducer;

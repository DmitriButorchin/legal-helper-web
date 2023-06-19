import { createSlice, createSelector } from "@reduxjs/toolkit";

const regionsSlice = createSlice({
  name: "regions",
  initialState: {
    data: {},
  },
  reducers: {
    regionsReceived(state, action) {
      const data = action.payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      state.data = { ...state.data, ...data };
    },
  },
});

const selectRegionsSlice = (state) => state.regions;
const selectRegionId = (_, regionId) => regionId;

export const selectRegions = createSelector([selectRegionsSlice], (slice) =>
  Object.values(slice.data)
);
export const selectRegionsTitlesReference = createSelector(
  [selectRegions],
  (regions) =>
    regions.reduce((acc, region) => {
      acc[region.id] = region.title;
      return acc;
    }, {})
);
export const selectRegionById = createSelector(
  [selectRegionsSlice, selectRegionId],
  (slice, id) => slice.data[id] || {}
);

export const { regionsReceived } = regionsSlice.actions;
export default regionsSlice.reducer;

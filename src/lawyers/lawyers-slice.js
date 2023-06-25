import { createSlice, createSelector } from "@reduxjs/toolkit";

const lawyersSlice = createSlice({
  name: "lawyers",
  initialState: {
    data: {},
  },
  reducers: {
    lawyersReceived(state, action) {
      const data = action.payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      state.data = { ...state.data, ...data };
    },
    caseAdded(state, action) {
      state.data[action.payload].caseCount++;
    },
  },
});

const selectLawyersSlice = (state) => state.lawyers;
const selectLawyerId = (_, lawyerId) => lawyerId;
const selectRegionId = (_, regionId) => regionId;

export const selectLawyers = createSelector([selectLawyersSlice], (slice) =>
  Object.values(slice.data)
);
export const selectLawyersByRegionSorted = createSelector(
  [selectLawyers, selectRegionId],
  (lawyers, regionId) =>
    lawyers
      .filter((lawyer) => lawyer.regionId === regionId)
      .sort((first, second) => second.caseCount - first.caseCount)
);
export const selectLawyersNamesReference = createSelector(
  [selectLawyers],
  (lawyers) =>
    lawyers.reduce((acc, lawyer) => {
      acc[lawyer.id] = `${lawyer.firstName} ${lawyer.lastName}`;
      return acc;
    }, {})
);
export const selectLawyerById = createSelector(
  [selectLawyersSlice, selectLawyerId],
  (slice, id) => slice.data[id] || {}
);

export const { lawyersReceived, caseAdded } = lawyersSlice.actions;
export default lawyersSlice.reducer;

import { createSlice, createSelector } from "@reduxjs/toolkit";

const casesSlice = createSlice({
  name: "cases",
  initialState: {
    data: {},
  },
  reducers: {
    casesReceived(state, action) {
      const data = action.payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      state.data = { ...state.data, ...data };
    },
  },
});

const selectCasesSlice = (state) => state.cases;
const selectCaseId = (_, caseId) => caseId;

export const selectCases = createSelector([selectCasesSlice], (slice) =>
  Object.values(slice.data)
);
export const selectCaseById = createSelector(
  [selectCasesSlice, selectCaseId],
  (slice, id) => slice.data[id] || {}
);

export const { casesReceived } = casesSlice.actions;
export default casesSlice.reducer;

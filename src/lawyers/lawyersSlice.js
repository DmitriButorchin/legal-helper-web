import { createSlice, createSelector } from "@reduxjs/toolkit";

const lawyersSlice = createSlice({
  name: "lawyers",
  initialState: {
    data: {},
    selectedId: undefined,
  },
  reducers: {
    lawyersReceived(state, action) {
      const data = action.payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      state.data = { ...state.data, ...data };
    },
    lawyerSelected(state, action) {
      state.selectedId = action.payload;
    },
  },
});

const selectLawyersSlice = (state) => state.lawyers;
const selectLawyerId = (_, lawyerId) => lawyerId;

export const selectLawyers = createSelector([selectLawyersSlice], (slice) =>
  Object.values(slice.data)
);
export const selectLawyerById = createSelector(
  [selectLawyersSlice, selectLawyerId],
  (slice, id) => slice.data[id] || {}
);

export const { lawyersReceived, lawyerSelected } = lawyersSlice.actions;
export default lawyersSlice.reducer;

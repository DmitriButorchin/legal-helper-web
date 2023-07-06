import { createSlice, createSelector } from "@reduxjs/toolkit";

const correspondentsSlice = createSlice({
  name: "correspondents",
  initialState: {
    data: {},
  },
  reducers: {
    correspondentsReceived(state, action) {
      const data = action.payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      state.data = { ...state.data, ...data };
    },
    correspondentCreated(state, action) {
      state.data[action.payload.id] = action.payload;
    },
  },
});

const selectCorrespondentsSlice = (state) => state.correspondents;
const selectCorrespondentId = (_, correspondentId) => correspondentId;

export const selectCorrespondents = createSelector([selectCorrespondentsSlice], (slice) =>
  Object.values(slice.data)
);
export const selectCorrespondentsTitlesReference = createSelector(
  [selectCorrespondents],
  (correspondents) =>
  correspondents.reduce((acc, region) => {
      acc[region.id] = region.title;
      return acc;
    }, {})
);
export const selectCorrespondentById = createSelector(
  [selectCorrespondentsSlice, selectCorrespondentId],
  (slice, id) => slice.data[id] || {}
);

export const { correspondentsReceived, correspondentCreated } = correspondentsSlice.actions;
export default correspondentsSlice.reducer;

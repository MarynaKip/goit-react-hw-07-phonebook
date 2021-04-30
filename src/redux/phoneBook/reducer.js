import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const { actions, reducer } = createSlice({
  name: "phoneBook/toolkit/slice",
  initialState,
  reducers: {
    onSave: (state, action) => {
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    onDelete: (state, action) => {
      state.contacts.items = [
        ...state.contacts.items.filter(({ id }) => action.payload !== id),
      ];
    },
    onUpdate: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
});

export const { onSave, onDelete, onUpdate } = actions;

export default reducer;

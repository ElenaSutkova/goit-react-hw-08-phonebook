import { createSlice } from "@reduxjs/toolkit";

export const sliceFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContacts(_, { payload }) {
            return payload;
        }
    }
});

export const { filterContacts } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;
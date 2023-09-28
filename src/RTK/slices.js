import { createSlice } from "@reduxjs/toolkit";

const initialState = 'create-post-popup-displsy-none';

const Change_create_post_popup = createSlice({
    name: 'change_popup',
    initialState,
    reducers: {
        showpopup(state, action) {
            return ''
        },
        hidepopup(state, action) {
            return 'create-post-popup-displsy-none'; // Return a new state value
        }
    }
});

export const { showpopup, hidepopup } = Change_create_post_popup.actions;
export default Change_create_post_popup.reducer;

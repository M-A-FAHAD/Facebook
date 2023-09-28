import { configureStore } from "@reduxjs/toolkit";
import Change_create_post_popup from './slices'
export const Store = configureStore({
    reducer: {
        popup_change: Change_create_post_popup
    }
})
export default Store;
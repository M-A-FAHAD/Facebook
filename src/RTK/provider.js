'use client'
import { Store } from "./store";
import { Provider } from "react-redux";

export default function ReduxStoreProvider({ children }) {
    return (
        <Provider store={Store}>
            {children}
        </Provider>
    )
}
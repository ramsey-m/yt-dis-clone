import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"; //configuration and boiler plate stuff
import userReducer from "../features/user/userSlice";
export default configureStore({
    reducer:{

        user: userReducer

    },
    middleware: getDefaultMiddleware({
        serializableCheck: false, 
    }),
});
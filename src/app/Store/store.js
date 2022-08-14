import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cakeSlice";
import iceCreamReducer from "../features/iceCreamSlice";
import userReducer from "../features/userSlice";
// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        users: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

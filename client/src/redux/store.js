import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// 1. Combine reducers
const rootReducer = combineReducers({ user: userReducer });

// 2. Persist config
const persistConfig = {
    key: 'root',
    storage,
    version: 1
};

// 3. Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure store with persisted reducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// 5. Persistor
export const persistor = persistStore(store);

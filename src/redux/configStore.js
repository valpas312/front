import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    logout : () => {
      return {};
    },
  },
});

const techSlice = createSlice({
  name: "techs",
  initialState: [],
  reducers: {
    setTechs: (state, action) => {
      return action.payload;
    },
  }
})

const rootReducer = combineReducers({
  user: userSlice.reducer,
  techs: techSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor = persistStore(store);

export default store;

export const { setUser, logout } = userSlice.actions;
export const { setTechs } = techSlice.actions;
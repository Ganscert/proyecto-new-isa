import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuración de persistencia
const persistConfig = {
  key: 'auth',
  storage,
};

// Reducer persistido para auth
const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

// Crear el store usando el reducer persistido
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // aquí usas el persistido
  },
})
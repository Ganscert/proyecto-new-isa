
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        userName: "",
        position: "",
        codigo: "",
        transferencia: false,
        recepcion: false,
        preparacion: false,
        EIE: false,
        saldoId: ""
    },
    reducers: {
        setLogin: (state) => {
            state.isLoading = true
        },
        fullLogin: (state, action) => {
            console.log(action)
            state.isLoading = false
            state.userName = action.payload.userName
            state.position = action.payload.position
            state.codigo = action.payload.codigo
            state.transferencia = action.payload.transferencia
            state.recepcion = action.payload.recepcion
            state.preparacion = action.payload.preparacion
            state.EIE = action.payload.EIE
            state.saldoId = action.payload.saldoId
        }
    }
});


export const { setLogin,fullLogin } = authSlice.actions;


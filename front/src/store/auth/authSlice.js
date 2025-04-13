
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
        saldoId: "",
        inventario: [],
        caja: 0
    },
    reducers: {
        setLogin: (state) => {
            state.isLoading = true
        },
        fullLogin: (state, action) => {
            state.isLoading = false
            state.userName = action.payload.userName
            state.position = action.payload.position
            state.codigo = action.payload.codigo
            state.transferencia = action.payload.transferencia
            state.recepcion = action.payload.recepcion
            state.preparacion = action.payload.preparacion
            state.EIE = action.payload.EIE
            state.saldoId = action.payload.saldoId
            state.inventario = action.payload.inventario
            state.caja = action.payload.caja
        }
    }
});


export const { setLogin, fullLogin } = authSlice.actions;


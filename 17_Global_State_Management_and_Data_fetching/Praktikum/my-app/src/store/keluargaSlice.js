import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    nama: "John Doe",
    umur: 30,
  },
];

const keluargaSlice = createSlice({
  name: "keluarga",
  initialState,
  reducers: {
    hapusAnggotaKeluarga: (state, action) => {
      state.keluarga = state.keluarga.filter((keluarga) => {
        return keluarga.id !== action.payload;
      });
    },
    tambahAnggotaKeluarga: (state, action) => {
      const newData = {
        id: Math.random() * (100 - 1) + 1,
        ...action.payload,
      };
      state.keluarga.push(newData);
    },
  },
});

export const { hapusAnggotaKeluarga, tambahAnggotaKeluarga } = keluargaSlice.actions;
export default keluargaSlice.reducer;

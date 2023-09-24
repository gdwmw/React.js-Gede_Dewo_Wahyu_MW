import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hapusAnggotaKeluarga, tambahAnggotaKeluarga } from "@/store/keluargaSlice";

export default function Main() {
  const { keluarga } = useSelector((state) => state.keluarga); // Update this line
  const dispatch = useDispatch();

  const [data, setData] = useState({
    nama: "",
    umur: 0,
  });

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    dispatch(tambahAnggotaKeluarga(data));
    setData({
      nama: "",
      umur: 0,
    });
  };

  return (
    <div className="container mx-auto p-5 space-y-5">
      <header>
        <h1 className="text-center font-bold text-3xl">KELUARGA</h1>
      </header>
      <main className="flex flex-col items-center justify-center gap-5">
        <form className="flex flex-col items-center justify-center gap-3" onSubmit={onSubmitData}>
          <input type="text" name="nama" onChange={onChangeData} value={data.nama} className="border-2 outline-none p-2" placeholder="Nama" />
          <input type="number" name="umur" onChange={onChangeData} value={data.umur} className="border-2 outline-none p-2" placeholder="Umur" />
          <button type="submit" className="px-3 py-1 bg-blue-400 hover:bg-blue-500 text-white">
            Tambah
          </button>
        </form>
        <table>
          <thead>
            <tr className="border-2 text-center">
              <th className="border-2 p-2">No</th>
              <th className="border-2 p-2">Name</th>
              <th className="border-2 p-2">Umur</th>
              <th className="border-2 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {keluarga.map((anggota, index) => (
              <tr className="border-2 text-center" key={anggota.id}>
                <td className="border-2 p-2">{index + 1}</td>
                <td className="border-2 p-2">{anggota.nama}</td>
                <td className="border-2 p-2">{anggota.umur}</td>
                <td className="border-2 p-2 space-x-2">
                  <button
                    onClick={() => {
                      dispatch(hapusAnggotaKeluarga(anggota.id));
                    }}
                    className="py-1 px-3 bg-red-400 hover:bg-red-500 text-white">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

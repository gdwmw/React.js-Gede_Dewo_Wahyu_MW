const daftarBuku = [
    {
        id: 1,
        judul: "Harry Potter",
        penulis: "J.K. Rowling",
        tahunTerbit: 2001,
        dipinjam: false,
    },
    {
        id: 2,
        judul: "To Kill a Mockingbird",
        penulis: "Harper Lee",
        tahunTerbit: 1960,
        dipinjam: true,
    },
    {
        id: 3,
        judul: "The Great Gatsby",
        penulis: "F. Scott Fitzgerald",
        tahunTerbit: 1925,
        dipinjam: false,
    },
];

daftarBuku.forEach((item) => {
    if (item.dipinjam === false) {
        item.dipinjam = "Tersedia";
    } else {
        item.dipinjam = "Dipinjam";
    }

    console.log(
        `${item.id} ${item.judul} oleh ${item.penulis}(Tahun Terbit: ${item.tahunTerbit} - ${item.dipinjam})`
    );
});
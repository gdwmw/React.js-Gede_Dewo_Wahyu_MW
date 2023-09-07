const daftarBelanja = [
    { nama: 'Pisang', harga: 5000 },
    { nama: 'Apel', harga: 3000 },
    { nama: 'Jeruk', harga: 4000 },
];

function hitungTotalHarga(daftarBelanja) {
    return new Promise((resolve, reject) => {
        let totalHarga = 0;

        daftarBelanja.forEach((item) => {
            totalHarga += item.harga;
        });

        resolve(totalHarga);
    });
}

hitungTotalHarga(daftarBelanja)
    .then((totalHarga) => {
        console.log(`Total Harga: ${totalHarga}`);
    })
    .catch((error) => {
        console.error(error);
    });

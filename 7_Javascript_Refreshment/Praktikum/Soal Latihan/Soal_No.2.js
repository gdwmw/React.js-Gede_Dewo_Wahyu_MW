const daftarItem = [
    { nama: 'Baju', harga: 100000 },
    { nama: 'Celana', harga: 80000 },
    { nama: 'Sepatu', harga: 200000 },
    { nama: 'Topi', harga: 30000 },
];

const batasDiskon = 300000;
const diskonTambahan = 50000;

let totalBelanja = 0;

for (let i = 0; i < daftarItem.length; i++) {
    totalBelanja += daftarItem[i].harga;
}

console.log(`Total belanja: ${totalBelanja}`);

if (totalBelanja > batasDiskon) {
    console.log(`Anda mendapatkan diskon tambahan sebesar Rp ${diskonTambahan}.`);
    totalBelanja -= diskonTambahan;
    console.log(`Total belanja akhir setelah diskon: ${totalBelanja}`);
} else {
    console.log('Maaf, Anda tidak mendapatkan diskon tambahan.');
}

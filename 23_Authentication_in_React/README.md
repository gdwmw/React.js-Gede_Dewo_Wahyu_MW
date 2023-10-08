# 23 - Authentication in React

## A. What Is Authentication?

Authentication dalam React adalah proses verifikasi identitas pengguna sebelum mereka dapat mengakses bagian tertentu dari aplikasi web yang dibangun dengan menggunakan React.js. Ini adalah langkah penting dalam mengamankan aplikasi dan mengontrol akses ke sumber daya yang dilindungi. Keberhasilan autentikasi didasarkan pada kombinasi yang tepat antara faktor-faktor identitas yang valid dan aman, serta pengelolaan yang baik dari kredensial dan metode otentikasi yang digunakan.

## B. Komponen Utama Authentication

1. Identifikasi: Pengguna atau entitas harus mengidentifikasi diri mereka sendiri, misalnya dengan username, alamat email, nomor ID, atau informasi lainnya.

2. Verifikasi: Setelah identifikasi dilakukan, sistem harus memverifikasi kebenaran informasi yang diberikan. Ini dapat melibatkan kata sandi, kunci enkripsi, kartu akses, sidik jari, atau metode otentikasi lainnya.

3. Penilaian: Sistem kemudian menilai apakah pengguna atau entitas tersebut memiliki izin untuk mengakses sumber daya yang diminta. Ini melibatkan pengecekan terhadap daftar izin, hak akses, dan kebijakan keamanan.

## C. Beberapa metode Authentication umum

1. Autentikasi Kata Sandi: Metode ini paling umum dan sederhana. Pengguna harus memasukkan kata sandi yang benar untuk mengakses sistem atau akun mereka.

2. Autentikasi Dua Faktor, 2FA: Memerlukan dua metode autentikasi yang berbeda, seperti kata sandi dan kode yang dikirim melalui SMS, aplikasi otentikasi, atau token.

3. Kata Sandi Sekali Pakai, OTP: Menghasilkan kode unik yang hanya berlaku sekali dan hanya untuk sesi autentikasi tertentu. Biasanya dikirim melalui pesan teks atau aplikasi khusus.

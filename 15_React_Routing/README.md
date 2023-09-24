# 15 React Routing

## A. Definisi Route

Dalam pengembangan aplikasi web dengan React, routing adalah teknik yang digunakan untuk mengelola navigasi antara halaman atau komponen dalam aplikasi. Route adalah modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application).Route menentukan bagaimana komponen-komponen aplikasi akan ditampilkan berdasarkan perubahan URL atau tindakan user, sehingga memungkinkan pembuatan aplikasi web yang dinamis tanpa perlu memuat ulang halaman sepenuhnya setiap kali navigasi terjadi. Route menghubungkan URL dengan komponen-komponen yang sesuai untuk ditampilkan, menciptakan pengalaman user yang mulus dan responsif.

## B. Multi Page Application (MPA) vs Single Page Application (SPA)

1. Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website yang dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru. Ini berarti bahwa setiap halaman memiliki URL yang berbeda dan menghasilkan permintaan HTTP terpisah ke server untuk mengambil halaman yang sesuai.

2. Single Page Application (SPA) adalah jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut. Salah satu ciri utama SPA adalah kemampuannya untuk memungkinkan navigasi antara berbagai tampilan atau halaman tanpa memuat ulang halaman utama. Ini dicapai dengan menggunakan teknik AJAX atau Fetch API untuk mengambil data atau konten tambahan dari server dan memperbarui hanya bagian-bagian tertentu dari halaman tanpa merender ulang seluruh halaman.

## C. Hook Routing React

1. useHistory: Hook ini memungkinkan Anda untuk mengakses objek history, yang dapat digunakan untuk melakukan navigasi programatik, seperti mengarahkan pengguna ke halaman lain, kembali ke halaman sebelumnya, atau melakukan navigasi lanjutan.

2. useLocation: Hook ini memungkinkan Anda untuk mengakses objek location, yang berisi informasi tentang URL saat ini, seperti pathname, search, dan hash.

3. useParams: Hook ini memungkinkan Anda untuk mengakses parameter yang didefinisikan dalam rute URL. Misalnya, jika Anda memiliki rute seperti /user/:id, Anda dapat menggunakan useParams untuk mengambil nilai id dari URL.

4. useRouteMatch: Hook ini memungkinkan Anda untuk mencocokkan URL saat ini dengan suatu pola rute dan mengakses informasi tentang cocokan tersebut.

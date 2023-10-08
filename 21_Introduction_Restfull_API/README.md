# 21 - Introduction Restful API

## A. Apa itu API?

API (Application Programming Interface) adalah sekumpulan fungsi dan prosedur yang memungkinkan pembuatan aplikasi yang mengakses fitur atau data sistem operasi, aplikasi, atau layanan lainnya. API memungkinkan developer untuk mengakses dan menggunakan fungsi atau data dari layanan atau perangkat yang lain tanpa perlu mengetahui detail internal dari bagaimana fungsi tersebut bekerja. Dalam pengertian sederhana, API adalah jembatan yang memungkinkan berbagai program berbicara satu sama lain. API sangat penting dalam pengembangan software modern karena memungkinkan aplikasi untuk bekerja sama, memperluas fungsionalitas, dan mengakses resource yang beragam. Ini juga mempermudah pengembangan aplikasi lintas platform dan mengintegrasikan berbagai layanan untuk memberikan pengalaman yang lebih luas kepada pengguna.

## B. Apa itu HTTP Response Code?

HTTP Response Code adalah kode status yang diberikan oleh server web sebagai tanggapan terhadap permintaan yang dikirimkan oleh klien (biasanya browser web) ke server tersebut. Kode-kode ini digunakan untuk mengindikasikan hasil dari permintaan HTTP, seperti apakah permintaan tersebut berhasil, gagal, atau memerlukan tindakan tambahan. Kode-kode ini terdiri dari tiga digit dan dibagi menjadi beberapa kelompok berdasarkan kategori respons yang diberikan.

1. 1xx (Informational): Kode status ini mengindikasikan bahwa server hanya memberikan informasi awal atau sementara sebagai tanggapan terhadap permintaan klien. Contoh: 100 Continue, 101 Switching Protocols.
2. 2xx (Successful): Kode status ini menunjukkan bahwa permintaan klien berhasil diterima, dimengerti, dan dijalankan dengan sukses. Contoh: 200 OK, 201 Created, 204 No Content.
3. 3xx (Redirection): Kode status ini digunakan ketika klien perlu mengambil tindakan tambahan untuk menyelesaikan permintaan. Ini sering digunakan untuk mengarahkan klien ke URL lain. Contoh: 301 Moved Permanently, 302 Found, 304 Not Modified.
4. 4xx (Client Error): Kode status ini menunjukkan bahwa ada kesalahan dalam permintaan klien, seperti permintaan yang salah atau tidak memiliki izin. Contoh: 400 Bad Request, 401 Unauthorized, 404 Not Found.
5. 5xx (Server Error): Kode status ini mengindikasikan bahwa server mengalami kesalahan dalam memproses permintaan. Ini biasanya terjadi ketika server mengalami masalah internal. Contoh: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable.

## C. Apa itu Rest?

REST (Representational State Transfer) adalah sebuah pendekatan arsitektural dalam pengembangan aplikasi web yang didasarkan pada konsep utama yaitu resources, representasi, dan transfer state. Dalam konteks REST, Resource merujuk pada objek atau data yang dapat diakses melalui sebuah URI (Uniform Resource Identifier). REST memiliki keuntungan seperti skalabilitas, kinerja yang baik, dan mudah diimplementasikan. Ini juga memungkinkan aplikasi untuk berkomunikasi dengan baik melalui internet. Salah satu keterbatasan REST adalah kurangnya documentation untuk mengatur bagaimana resource harus didefinisikan dan diakses, yang dapat mengarah pada perbedaan dalam implementasi.

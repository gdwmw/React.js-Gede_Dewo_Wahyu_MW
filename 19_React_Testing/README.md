# 19 - React Testing

## A. Basic Testing

React Testing adalah praktik test perangkat lunak yang digunakan untuk menguji aplikasi berbasis React, memastikan bahwa komponen dan fungsionalitasnya berfungsi sesuai yang diharapkan. Basic testing dalam React melibatkan verifikasi bahwa komponen merender dengan benar, berinteraksi dengan perubahan data, dan merespons terhadap event atau input pengguna.

## B. Render dan Debug di RTL

Dalam React Testing, kita menggunakan library testing seperti React Testing Library (RTL) untuk merender komponen React dalam test environment. RTL menyediakan fungsi render yang memungkinkan kita merender komponen React dalam tes dan mengakses elemen-elemen di dalamnya untuk melakukan testing.Untuk membantu dalam proses debug, RTL menyediakan alat yang kuat seperti screen dan debug yang membantu untuk memahami perubahan dalam komponen selama proses testing.

## C. Testing dengan RTL

Testing dengan RTL melibatkan penggunaan metode dan fungsi yang disediakan oleh RTL untuk menguji komponen React. Ini termasuk penggunaan fireEvent untuk menginisiasi event, waitFor untuk menunggu perubahan dalam tampilan, dan expect untuk memverifikasi perilaku yang diharapkan.RTL juga mendukung pengujian berdasarkan teks, label, placeholder, dan atribut aksesibilitas lainnya yang membantu mengidentifikasi elemen yang akan diuji. Penting untuk mengikuti aturan testing yang baik, seperti menulis code testing yang independen dan menjaga fokus pada test fungsi dan perilaku komponen daripada implementasi internal.

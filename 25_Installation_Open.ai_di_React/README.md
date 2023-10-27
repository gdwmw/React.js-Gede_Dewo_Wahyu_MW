# 25 - Installation OpenAI di React

## Kenapa Kita Belajar OpenAI

Belajar OpenAI adalah suatu langkah yang bermanfaat dan menarik dengan alasan-alasan berikut:

1. Gratis: Salah satu keuntungan utama dalam belajar OpenAI adalah akses gratis ke berbagai layanan dan model yang ditawarkan oleh OpenAI.
2. Mudah dipasang: OpenAI telah merancang alat-alat dan API yang relatif mudah digunakan. Ini memungkinkan pengguna, termasuk pengembang, untuk memasang model AI OpenAI dalam berbagai aplikasi dan proyek tanpa kesulitan teknis yang berlebihan.
3. Dipakai Banyak User: OpenAI telah digunakan oleh banyak pengguna dan organisasi di seluruh dunia. Hal ini menciptakan komunitas yang kuat dan sumber daya yang berlimpah, yang dapat membantu dalam belajar dan memecahkan masalah dalam penggunaan teknologi OpenAI.
4. Jumlah Parameter 175 Miliar (Model Davinci 03): Salah satu keunggulan OpenAI adalah model-model AI canggih yang memiliki jumlah parameter besar. Sebagai contoh, model Davinci 03 memiliki 175 miliar parameter, yang membuatnya sangat mampu dalam berbagai tugas pemrosesan bahasa alami, generasi teks, dan banyak lagi.

## Starting Point

Berikut ini merupakan beberapa hal yang harus di siapkan :

1. Pemahaman tentang React, framework JavaScript yang digunakan untuk membangun antarmuka pengguna.
2. Memahami penggunaan Git atau platform kolaborasi seperti GitHub sangat penting untuk mengelola source code secara efisien dan berkolaborasi dengan tim.
3. Menginstal management package seperti NPM atau Yarn untuk mengelola dan menginstal dependensi project.
4. Memiliki code editor seperti Visual Studio Code akan memudahkan Anda dalam menulis, mengedit, dan mengelola project React.
5. Pastikan memiliki laptop atau komputer yang dapat menjalankan software yang diperlukan, serta koneksi internet yang stabil.

## Instalasi OpenAI di React

1. Membuat React Project Code dengan perintah "npx create-react-app my-app"
2. Install OpenAI Package dengan perintah "npm install openai"
3. Mengimport modul yang dibutuhkan yaitu usestate, Configuration, dan OpenAIApi dari package react dan openai.
4. Selanjutnya, deklarasikan objek Configuration dan OpenAIApi dengan menggunakan API key yang diberikan oleh OpenAI.
5. Deklarasikan beberapa state menggunakan useState.
6. Membuat request ke OpenAIApi dengan menggunakan method createCompletion.
7. Terakhir, rendering komponen textarea, button, dan pre untuk menampilkan input dari user, tombol generate, dan hasil generate dari OpenAI API.

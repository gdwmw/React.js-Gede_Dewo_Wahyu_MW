## 17 - Global State Management

# A. Global State Management

Global State Management adalah sebuah konsep dalam pengembangan perangkat lunak yang digunakan untuk mengelola data yang harus diakses dan dibagi oleh berbagai komponen dalam aplikasi. Ini memungkinkan aplikasi untuk menjaga konsistensi dan sinkronisasi data di seluruh aplikasi, bahkan jika data tersebut digunakan di berbagai bagian dari aplikasi yang berbeda.

# B. Redux

Redux adalah salah satu alat atau library yang umumnya digunakan untuk mengimplementasikan Global State Management dalam aplikasi JavaScript, terutama dalam pengembangan aplikasi React. Redux menyediakan cara untuk menyimpan dan mengelola status global aplikasi dalam sebuah "store" sentral. Ini memungkinkan komponen React untuk mengakses dan memperbarui status ini dengan mudah melalui aksi atau tindakan yang didefinisikan. Redux bekerja dengan prinsip unidirectional data flow, yang berarti bahwa data hanya dapat diubah melalui aksi yang memicu pembaruan status, dan komponen hanya dapat membaca data dari status tersebut.

# C. Data fetching

Data fetching adalah proses pengambilan data dari berbagai sumber, seperti API web, database, atau penyimpanan lokal, untuk digunakan dalam aplikasi. Dalam konteks Global State Management, data fetching sering kali digunakan untuk mengambil data eksternal dan memperbarui status global aplikasi. Redux dan alat Global State Management lainnya menyediakan cara untuk mengelola data yang diambil dengan melakukan aksi pengambilan data, menyimpan data dalam status global, dan memperbarui komponen yang memerlukan data tersebut. Penting untuk menjaga manajemen status global yang efisien dan efektif ketika melakukan data fetching, agar aplikasi tetap responsif dan data selalu akurat dan tersedia untuk komponen yang memerlukannya.

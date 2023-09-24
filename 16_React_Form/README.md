# 16 React Form

## A. Penggunaan Form

Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form ini dapat digunakan untuk menghandle inputan dari user.
Form banyak kita temui pada saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data, dan banyak hal lainnya.
Dalam react, akan ada beberapa hal yang dipelajari mengenai form. Seperti bagaimana menghadnle inputan, bagaimana memvalidasi inputan, dan sebagainya.

## B. Uncontrolled Component

adalah jenis input dalam formulir yang tidak terkendali oleh React seperti halnya input dalam formulir HTML tradisional. Pada Uncontrolled Component, nilai-nilai elemen input tidak diatur atau dikontrol oleh React melalui state komponen. Sebaliknya, nilai-nilai ini diperoleh dan diatur secara langsung dari DOM (Document Object Model) menggunakan referensi (ref) pada elemen input. Artinya, kita harus mengekstrak nilai dari elemen input saat dibutuhkan, misalnya saat formulir di-submit. Meskipun sederhana, pendekatan ini mungkin tidak memiliki kontrol dan fitur yang kuat.

## C. Controlled Component

adalah jenis input dalam formulir yang sepenuhnya dikendalikan oleh React melalui state. Pada Controlled Component, nilai-nilai elemen input dalam formulir diatur dan diambil melalui state React. Setiap perubahan pada elemen input akan memperbarui state, dan kemudian komponen akan di-render ulang dengan nilai yang diperbarui. Pendekatan ini memberikan kontrol yang lebih besar dan memungkinkan validasi input dan tindakan lainnya untuk dilakukan saat input berubah.

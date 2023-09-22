import "@/styles/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>/d,Wo</title>
        <meta name="author" content="/d,Wo" />
        <meta
          name="description"
          content="Selamat Datang di /d,Wo Photography! Saya adalah para penggemar seni fotografi yang siap mengabadikan momen-momen berharga dalam hidup Anda. Setiap gambar adalah kisah yang tak terlupakan, dan saya hadir untuk menjadikannya abadi. Mari berkelana bersama saya dalam dunia cahaya dan bayangan yang penuh keindahan."
        />
        <meta name="keywords" content="/d,Wo" />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}

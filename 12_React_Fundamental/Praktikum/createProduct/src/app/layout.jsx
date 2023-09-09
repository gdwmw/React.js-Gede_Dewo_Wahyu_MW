import "@/styles/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Create Product</title>
      </head>
      <body className="font-serif bg-gray-100">{children}</body>
    </html>
  );
}

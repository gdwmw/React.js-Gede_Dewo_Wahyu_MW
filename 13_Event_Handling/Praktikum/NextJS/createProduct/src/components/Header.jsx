import React from "react";

export default function Header({ languageProps, languageChangeButtonProps }) {
  const contentLanguage = {
    title: {
      en: "Create Product",
      id: "Buat Produk",
    },
    description: {
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    },
  };
  return (
    <header className="container mx-auto px-5 py-6 text-center">
      <h1 className="text-3xl font-bold">{languageProps == "inggris" ? contentLanguage.title.en : contentLanguage.title.id}</h1>
      <p>{languageProps == "inggris" ? contentLanguage.description.en : contentLanguage.description.id}</p>
      {languageChangeButtonProps}
    </header>
  );
}

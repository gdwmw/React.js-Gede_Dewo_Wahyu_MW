import React from "react";
import { useState } from "react";

export default function Main({ languageProps }) {
  const [productName, setProductName] = useState("");
  const [productNameTernary, setProductNameTernary] = useState(false);
  const [productCategory, setProductCategory] = useState("Select");
  const [productCategoryTernary, setProductCategoryTernary] = useState(false);
  const [productFreshness, setProductFreshness] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [additionalDescriptionTernary, setAdditionalDescriptionTernary] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");
  const [randomNumberTernary, setRandomNumberTernary] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.length >= 6 && productCategory !== "Select" && additionalDescription !== "" && randomNumber !== "") {
      const message = `Product Name: ${productName}\nProduct Category: ${productCategory}\nProduct Freshness: ${productFreshness}\nAdditional Description: ${additionalDescription}\nProduct Price: ${randomNumber}`;
      alert(message);
    } else {
      setProductNameTernary(true);
      setProductCategoryTernary(true);
      setAdditionalDescriptionTernary(true);
      setRandomNumberTernary(true);
    }
  };

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 1000);
    setRandomNumber(random);
    console.log("Random Number:", random);
  };

  const contentLanguage = {
    title: {
      en: "Detail Product",
      id: "Detil Produk",
    },
    input1: {
      en: "Product Name :",
      id: "Nama Produk :",
    },
    input2: {
      en: "Product Category :",
      id: "Kategori Produk :",
    },
    input3: {
      en: "Product Freshness :",
      id: "Kesegaran Produk :",
      option: {
        en: ["Brand New", "Second Hand", "Refurbished"],
        id: ["Barang Baru", "Tangan Kedua", "Diperbaharui"],
      },
    },
    input4: {
      en: "Image of Product",
      id: "Gambar Produk",
    },
    input5: {
      en: "Additional Description :",
      id: "Deskripsi Tambahan :",
    },
    input6: {
      en: "Product Price :",
      id: "Harga Produk :",
    },
    warning1: {
      en: `"Product Name" minimum 6 characters!`,
      id: `"Nama Produk" minimal 6 karakter!`,
    },
    warning2: {
      en: `"Product Name" maximum 25 characters!`,
      id: `"Nama Produk" maksimal 25 karakter!`,
    },
    warning3: {
      en: "Please choose one of the options!",
      id: "Silakan pilih salah satu opsi!",
    },
    warning4: {
      en: "Can not be empty!",
      id: "Tidak boleh kosong!",
    },
    button1: {
      en: "Generate Random Price",
      id: "Hasilkan Harga Acak",
    },
    button2: {
      en: "Submit",
      id: "Kirim",
    },
  };
  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32">
      <h2 className="mb-4 text-2xl font-semibold">{languageProps == "inggris" ? contentLanguage.title.en : contentLanguage.title.id}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="productname">{languageProps == "inggris" ? contentLanguage.input1.en : contentLanguage.input1.id}</label>
          <input
            type="text"
            name="productname"
            id="productname"
            onClick={() => setProductNameTernary(true)}
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            className={`w-full rounded border-2 px-4 py-2 outline-none ${
              productNameTernary === true ? (productName.length < 6 || productName.length > 25 ? "border-red-500" : "focus:border-blue-500") : ""
            }`}
          />
        </div>
        <p className="text-red-500" style={{ display: productNameTernary === true ? (productName.length < 6 ? "block" : "none") : "none" }}>
          {languageProps == "inggris" ? contentLanguage.warning1.en : contentLanguage.warning1.id}
        </p>
        <p className="text-red-500" style={{ display: productName.length > 25 ? "block" : "none" }}>
          {languageProps == "inggris" ? contentLanguage.warning2.en : contentLanguage.warning2.id}
        </p>

        {/* Product Category */}
        <div className="form-group">
          <label htmlFor="productcategory">{languageProps == "inggris" ? contentLanguage.input2.en : contentLanguage.input2.id}</label>
          <select
            name="productcategory"
            id="productcategory"
            onClick={() => setProductCategoryTernary(true)}
            onChange={(e) => setProductCategory(e.target.value)}
            value={productCategory}
            className={`w-full rounded border-2 px-4 py-2 outline-none ${
              productCategoryTernary === true ? (productCategory === "Select" ? "border-red-500" : "focus:border-blue-500") : ""
            }`}
          >
            <option value="Select">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <p className="text-red-500" style={{ display: productCategoryTernary === true ? (productCategory === "Select" ? "block" : "none") : "none" }}>
          {languageProps == "inggris" ? contentLanguage.warning3.en : contentLanguage.warning3.id}
        </p>

        {/* Product Freshness */}
        <fieldset className="field-set form-group">
          <legend className="font-semibold">{languageProps == "inggris" ? contentLanguage.input3.en : contentLanguage.input3.id}</legend>
          <input
            type="radio"
            name="options"
            id="option1"
            onClick={(e) => setProductFreshness(e.target.value)}
            value={languageProps == "inggris" ? contentLanguage.input3.option.en[0] : contentLanguage.input3.option.id[0]}
            className="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="option1">{languageProps == "inggris" ? contentLanguage.input3.option.en[0] : contentLanguage.input3.option.id[0]}</label>
          <br />
          <input
            type="radio"
            name="options"
            id="option2"
            onClick={(e) => setProductFreshness(e.target.value)}
            value={languageProps == "inggris" ? contentLanguage.input3.option.en[1] : contentLanguage.input3.option.id[1]}
            className="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="option2">{languageProps == "inggris" ? contentLanguage.input3.option.en[1] : contentLanguage.input3.option.id[1]}</label>
          <br />
          <input
            type="radio"
            name="options"
            id="option3"
            onClick={(e) => setProductFreshness(e.target.value)}
            value={languageProps == "inggris" ? contentLanguage.input3.option.en[2] : contentLanguage.input3.option.id[2]}
            className="mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="option3">{languageProps == "inggris" ? contentLanguage.input3.option.en[2] : contentLanguage.input3.option.id[2]}</label>
        </fieldset>

        {/* Image of Product */}
        <div className="form-group">
          <label htmlFor="image">{languageProps == "inggris" ? contentLanguage.input4.en : contentLanguage.input4.id}</label>
          <input
            type="file"
            name="image"
            id="image"
            className="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Additional Description */}
        <div className="form-group">
          <label htmlFor="additionaldesc">{languageProps == "inggris" ? contentLanguage.input5.en : contentLanguage.input5.id}</label>
          <textarea
            name="additionaldesc"
            id="additionaldesc"
            cols="50"
            rows="10"
            onClick={() => setAdditionalDescriptionTernary(true)}
            onChange={(e) => setAdditionalDescription(e.target.value)}
            value={additionalDescription}
            className={`w-full rounded border-2 px-4 py-2 outline-none ${
              additionalDescriptionTernary === true ? (additionalDescription === "" ? "border-red-500" : "focus:border-blue-500") : ""
            }`}
          ></textarea>
        </div>
        <p
          className="text-red-500"
          style={{ display: additionalDescriptionTernary === true ? (additionalDescription === "" ? "block" : "none") : "none" }}
        >
          {languageProps == "inggris" ? contentLanguage.warning4.en : contentLanguage.warning4.id}
        </p>

        {/* Product Price */}
        <div className="form-group">
          <label htmlFor="price">{languageProps == "inggris" ? contentLanguage.input6.en : contentLanguage.input6.id}</label>
          <input
            type="number"
            name="price"
            id="price"
            onClick={() => setRandomNumberTernary(true)}
            onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
            value={randomNumber}
            className={`w-full rounded border-2 px-4 py-2 outline-none ${
              randomNumberTernary === true ? (randomNumber === "" ? "border-red-500" : "focus:border-blue-500") : ""
            }`}
          />
        </div>
        <p className="text-red-500" style={{ display: randomNumberTernary === true ? (randomNumber === "" ? "block" : "none") : "none" }}>
          {languageProps == "inggris" ? contentLanguage.warning4.en : contentLanguage.warning4.id}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="cursor-pointer rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
            onClick={generateRandomNumber}
          >
            {languageProps == "inggris" ? contentLanguage.button1.en : contentLanguage.button1.id}
          </button>

          <button type="submit" className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            {languageProps == "inggris" ? contentLanguage.button2.en : contentLanguage.button2.id}
          </button>
        </div>
      </form>
    </main>
  );
}

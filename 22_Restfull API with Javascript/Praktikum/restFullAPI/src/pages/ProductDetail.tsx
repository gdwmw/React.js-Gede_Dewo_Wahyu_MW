import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchProductDataID } from "../utils/fetchProductDataID";

interface ProductData {
  id: number;
  productName: string;
  productCategory: string;
  productFreshness: string;
  productImage: string | undefined;
  additionalDescription: string;
  randomNumber: number;
}

export default function ProductDetail() {
  const location = useLocation();
  const id = parseInt(location.pathname.replace("/productdetail/", "")); // Assuming the path is like "/product/{id}"
  const [selectedProduct, setSelectedProduct] = useState<ProductData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProductDataID(id);
        setSelectedProduct(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!selectedProduct) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <p className="text-3xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-5 py-5">
      <table className="w-full border-collapse rounded border-2">
        <thead>
          <tr>
            <th className="border-2 px-2">Product Name</th>
            <th className="border-2 px-2">Category</th>
            <th className="border-2 px-2">Freshness</th>
            <th className="border-2 px-2">Product Image</th>
            <th className="border-2 px-2">Additional Description</th>
            <th className="border-2 px-2">Price</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border-2 px-2 py-2">{selectedProduct.productName}</td>
            <td className="border-2 px-2 py-2">{selectedProduct.productCategory}</td>
            <td className="border-2 px-2 py-2">{selectedProduct.productFreshness}</td>
            <td className="border-2 px-2 py-2">
              <img
                src={selectedProduct.productImage}
                alt="Product"
                width={100}
                height={100}
                style={{ height: "auto", margin: "0px auto 0px auto" }}
              />
            </td>
            <td className="border-2 px-2 py-2">{selectedProduct.additionalDescription}</td>
            <td className="border-2 px-2 py-2">{selectedProduct.randomNumber}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

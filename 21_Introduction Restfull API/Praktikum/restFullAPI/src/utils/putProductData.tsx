export async function putProductData(data: any) {
  const id = data.id;

  const url = `https://650c816247af3fd22f67b58e.mockapi.io/ProductData/${id}`;

  const updatedData = {
    productName: data.productName,
    productCategory: data.productCategory,
    productFreshness: data.productFreshness,
    productImage: data.productImage,
    additionalDescription: data.additionalDescription,
    randomNumber: data.randomNumber,
  };

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) {
    throw new Error("Failed updating data");
  }

  return res.json();
}

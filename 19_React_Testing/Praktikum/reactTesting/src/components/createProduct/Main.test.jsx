import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./Main";

test("Create Product Form", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Main languageProps="inggris" />
    </MemoryRouter>,
  );

  const productName = screen.getByTitle("productName");
  expect(productName).toBeDefined();
  fireEvent.change(productName, { target: { value: "Alterra Academy" } });

  const productCategory = screen.getByTitle("productCategory");
  expect(productCategory).toBeDefined();
  fireEvent.change(productCategory, { target: { value: "B" } });

  const optionB = screen.getByTitle("optionB");
  expect(optionB).toBeDefined();
  fireEvent.click(optionB);

  const radio0 = screen.getByTitle("radio0");
  expect(radio0).toBeDefined();
  fireEvent.click(radio0);

  const imageOfProduct = screen.getByTitle("imageOfProduct");
  expect(imageOfProduct).toBeDefined();
  fireEvent.change(imageOfProduct, {
    target: {
      files: [new File(["../../images/Tailwind.svg"], "Tailwind.svg", { type: "image/svg" })],
    },
  });

  const additionalDesc = screen.getByTitle("additionalDesc");
  expect(additionalDesc).toBeDefined();
  fireEvent.change(additionalDesc, { target: { value: "Alterra Academy" } });

  const randomNumber = screen.getByTitle("randomNumber");
  expect(randomNumber).toBeDefined();
  fireEvent.click(randomNumber);

  const submit = screen.getByTitle("submit");
  expect(submit).toBeDefined();
  fireEvent.click(submit);

  fireEvent.change(productName, { target: { value: "" } });
  expect(screen.getByText("Product Name is required")).toBeInTheDocument();

  // Test Product Name with invalid characters
  fireEvent.change(productName, { target: { value: "@Invalid#Name" } });
  expect(screen.getByText("Product Name contains invalid characters")).toBeInTheDocument();

  fireEvent.change(productName, { target: { value: "A Very Long Product Name That Exceeds 25 Characters" } });
  expect(screen.getByText("Product Name must not exceed 25 characters")).toBeInTheDocument();

  expect(screen.getByText("Product Name is required")).toBeInTheDocument();
  expect(screen.getByText("Product Category is required")).toBeInTheDocument();

  fireEvent.change(productName, { target: { value: "Valid Product Name" } });

  fireEvent.click(submit);

  expect(screen.queryByText("Product Name is required")).toBeNull();
  expect(screen.queryByText("Product Category is required")).toBeNull();

  fireEvent.click(submit);
});

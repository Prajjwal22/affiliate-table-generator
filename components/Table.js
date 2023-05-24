"use client";
import React, { useState } from "react";
import "../styles/globals.css";
import "../styles/table.css";
import Modal from "./modal";
import { cssToCopy } from "../lib/codeToCopy";

export default function TableGenerator() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState();
  const [products, setProducts] = useState([
    {
      productName: "",
      productBadge: "",
      productImage: "",
      productFeat: [],
      btnText: "",
      btnLink: "",
    },
    {
      productName: "",
      productBadge: "",
      productImage: "",
      productFeat: [],
      btnText: "",
      btnLink: "",
    },
    {
      productName: "",
      productBadge: "",
      productImage: "",
      productFeat: [],
      btnText: "",
      btnLink: "",
    },
  ]);

  const handleProductName = (e, index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      productName: e.target.value,
    };
    setProducts(updatedProducts);
  };

  const handleBadge = (e, index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      productBadge: e.target.value,
    };
    setProducts(updatedProducts);
  };

  const handleProductImg = (e, index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      productImage: e.target.value,
    };
    setProducts(updatedProducts);
  };

  const handleFeatures = (e, index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      productFeat: e.target.value.split(/\n/),
    };
    setProducts(updatedProducts);
  };

  const handleBtn = (e, index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      btnText: e.target.value,
    };
    setProducts(updatedProducts);
  };

  const handleLink = (e, index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      btnLink: e.target.value,
    };
    setProducts(updatedProducts);
  };

  const generateCode = () => {
    let htmlCode = "";

    products.forEach((product) => {
      htmlCode += `
      <div class="table_container">
        <div class="card">
        <img src="/rating.png" width={70} height={50} />
          <span class="product_name">${product.productName}</span>
          <div class="product_image">
            <img src="${
              product.productImage || "product.png"
            }" width="150" height="150" />
          </div>
          <ul class="product_feat">
            ${product.productFeat
              .map((feature) => `<li>${feature}</li>`)
              .join("")}
          </ul>
          <div class="cta_btn">
            <a href="${product.btnLink}" class="btn">${
        product.btnText || "Check on Amazon"
      }</a>
          </div>
        </div>
        </div>
      `;
    });
    setCode(htmlCode);
    setOpen(true);
    console.log(htmlCode);
    // You can do further processing with the generated HTML code, such as displaying it in a modal or copying it to the clipboard.
  };

  return (
    <main className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="table_container">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <img src="rating.png" width={70} height={50} />
              <span className="product_badge">
                {product.productBadge || "Best Pick"}
              </span>
              <span className="product_name">
                {product.productName || "Product 1"}
              </span>
              <div className="product_image">
                <img
                  src={product.productImage || "product.png"}
                  width={150}
                  height={150}
                />
              </div>

              <ul className="product_feat">
                {product.productFeat.length > 0 ? (
                  product.productFeat.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))
                ) : (
                  <>
                    <li>Product Feature Specs 1</li>
                    <li>Product Feature Specs 1</li>
                    <li>Product Feature Specs 1</li>
                    <li>Product Feature Specs 1</li>
                  </>
                )}
              </ul>
              <div className="cta_btn">
                <a href={product.btnLink} className="btn">
                  {product.btnText || "Check on Amazon"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center mt-9 gap-7 w-full flex-wrap">
          {products.map((product, index) => (
            <div className="input_container w-64" key={index}>
              <h1 className="text-lg font-bold underline-offset-1 underline">
                Product {index + 1}
              </h1>
              <div className="flex flex-col gap-6">
                <label>
                  Product Name:
                  <input
                    type="text"
                    value={product.productName}
                    onChange={(e) => handleProductName(e, index)}
                  />
                </label>
                <label>
                  Product Badget:
                  <input
                    type="text"
                    value={product.productBadge}
                    onChange={(e) => handleBadge(e, index)}
                  />
                </label>
                <label>
                  Product Image:
                  <input
                    type="text"
                    value={product.productImage}
                    onChange={(e) => handleProductImg(e, index)}
                  />
                </label>
                <label>
                  Product Features:
                  <textarea
                    type="text"
                    rows={5}
                    cols={30}
                    value={product.productFeat.join("\n")}
                    onChange={(e) => handleFeatures(e, index)}
                  />
                </label>
                <label>
                  Product Btn Text:
                  <input
                    type="text"
                    value={product.btnText}
                    onChange={(e) => handleBtn(e, index)}
                  />
                </label>
                <label>
                  Product Btn Link:
                  <input
                    type="url"
                    value={product.btnLink}
                    onChange={(e) => handleLink(e, index)}
                  />
                </label>
              </div>
            </div>
          ))}
          <div>
            <h1 className="text-lg font-bold underline-offset-1 underline">
              Copy CSS
            </h1>
            <textarea className="css_textarea" value={cssToCopy} readOnly />
            <button
              className="bg-blue-700 text-white p-3 rounded-md w-fit mt-8"
              onClick={() => window.navigator.clipboard.writeText(cssToCopy)}
            >
              Copy CSS
            </button>
          </div>
        </div>

        <button
          className="bg-blue-700 text-white p-3 rounded-md w-fit mt-8"
          onClick={generateCode}
        >
          Generate Code
        </button>
      {open && <Modal code={code} setOpen={setOpen} />}
      </main>
  );
}

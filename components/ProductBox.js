"use client";

import { useState } from "react";
import "../styles/product-box.css";
import "../styles/globals.css";
import Modal from "./modal";
import { productBoxCSS } from "../lib/productBox";

export default function ProductBox() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState();
  const [product, setProduct] = useState({
    badge: "",
    name: "",
    image: "",
    reviews: "",
    features: [],
    oldPrice: "",
    discount: "",
    newPrice: "",
    button: "",
    link: "",
  });

  const handleProductName = (e) => {
    setProduct({ ...product, name: e.target.value });
  };

  const handleReviews = (e) => {
    setProduct({ ...product, reviews: e.target.value });
  };
  const handleBadge = (e) => {
    setProduct({ ...product, badge: e.target.value });
  };

  const handleProductImg = (e) => {
    setProduct({ ...product, image: e.target.value });
  };

  const handleFeatures = (e) => {
    setProduct({ ...product, features: e.target.value.split(/\n/) });
  };

  const handleOldPrice = (e) => {
    setProduct({ ...product, oldPrice: e.target.value });
  };

  const hanldeDiscount = (e) => {
    setProduct({ ...product, discount: e.target.value });
  };
  const handleNewPrice = (e) => {
    setProduct({ ...product, newPrice: e.target.value });
  };
  const handleBtn = (e) => {
    setProduct({ ...product, button: e.target.value });
  };

  const handleLink = (e) => {
    setProduct({ ...product, link: e.target.value });
  };



  const generateCode = () => {

    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  let htmlCode = "";

    htmlCode += `
    <div class="product_box">
    <span class="product_badge">${product.badge || "Sale"}</span>
    <div class="product_left">
      <img
        class="product_image"
        src=${
          product.image ||
          "https://affiliate-table-generator.vercel.app/product.png"
        }
        alt="product_image"
      />
      <img
        class="product_rating"
        src="https://affiliate-table-generator.vercel.app/product_box_rating.webp"
        alt="product_image"
      />
      <span class="product_reviews">
        ${product.reviews || "36 Reviews"}
      </span>
    </div>
    <div class="product_right">
      <span class="product_title">
        ${product.name || "IBELL Inverter ARC Welding Machine (IGBT)"}
      </span>
      <ul class="product_features">
      ${product.features
        .map((feature) => `<li>${feature}</li>`)
        .join("")}
      </ul>
      <div class="product_pricing">
        <span class="striked_price">
          ${product.oldPrice || "$4,000"}
        </span>
        <span class="product_discount">
          ${product.discount || "45%"}
        </span>
        <span class="product_price">
          ${product.newPrice || "$3,000"}
        </span>
      </div>
      <a href=${product.link || "#"} class="product_btn">
        <img src="https://affiliate-table-generator.vercel.app/cart_icon.png" />
        <span>${product.button || "View on Amazon"}</span>
      </a>
    </div>
  </div>
    `;
  setCode(`<div class="table_container">${htmlCode}</div>`);
  setOpen(true);
  console.log(htmlCode);
  // You can do further processing with the generated HTML code, such as displaying it in a modal or copying it to the clipboard.
};

  return (
    <main className="max-w-5xl m-auto">
    <div className="max-w-screen-xl m-auto p-3">
      <h1 className="text-xl">Product Box</h1>
      <div className="product_box">
        <span className="product_badge">{product.badge || "Sale"}</span>
        <div className="product_left">
          <img
            className="product_image"
            src={
              product.image ||
              "/laptop.jpeg"
            }
            alt="product_image"
          />
          <img
            className="product_rating"
            src="https://affiliate-table-generator.vercel.app/product_box_rating.webp"
            alt="product_image"
          />
          <span className="product_reviews">
            {product.reviews || "45 Reviews & Ratings"}
          </span>
        </div>
        <div className="product_right">
          <span className="product_title">
            {product.name || "DEAL OF THE DAY HP 15s, 11th Gen Intel Core i5"}
          </span>
          <ul className="product_features">
            {product.features.length > 0 ? (
              product.features.map((feature, i) => <li key={i}>{feature}</li>)
            ) : (
              <>
                <li>Processor: Intel Core i5-1155G7 (up to 4.5 GHz with Intel Turbo Boost)</li>
                <li>Technology(2g), 8 MB L3 cache, 4 cores, 8 threads)</li>
                <li>Memory: 8 GB DDR4-3200 MHz RAM (1 x 8 GB) Upto 16 GB DDR4-3200 MHz RAM (2 x 8 GB)</li>
                <li>Storage: 512 GB PCIe NVMe M.2 SSD</li>
                <li>Graphics: Intel Iris Xe Graphics</li>
              </>
            )}
          </ul>
          <div className="product_pricing">
            <span className="striked_price">
              {product.oldPrice || "Rs. 45,990"}
            </span>
            <span className="product_discount">
              {product.discount || "-60%"}
            </span>
            <span className="product_price">
              {product.newPrice || "Rs. 23,990/-"}
            </span>
          </div>
          <a href={product.link || "#"} className="product_btn">
            <img src="https://affiliate-table-generator.vercel.app/cart_icon.png" />
            <span>{product.button || "View on Amazon"}</span>
          </a>
        </div>
      </div>

      <div className="my-9 flex flex-row gap-6">
        <div className="input_container">
          <h1 className="text-lg font-bold underline-offset-1 underline">
            Product
          </h1>
          <div className="grid grid-cols-4 gap-6">
            <label>
              Product Name:
              <input
                type="text"
                value={product.name}
                onChange={(e) => handleProductName(e)}
              />
            </label>
            <label>
              Product Reviews:
              <input
                type="text"
                value={product.reviews}
                onChange={(e) => handleReviews(e)}
              />
            </label>
            <label>
              Product Badge:
              <input
                type="text"
                value={product.badge}
                onChange={(e) => handleBadge(e)}
              />
            </label>
            <label>
              Product Image:
              <input
                type="text"
                value={product.image}
                onChange={(e) => handleProductImg(e)}
              />
            </label>
            <label>
              Product Old Price:
              <input
                type="text"
                value={product.oldPrice}
                onChange={(e) => handleOldPrice(e)}
              />
            </label>
            <label>
              Product Discount:
              <input
                type="text"
                value={product.discount}
                onChange={(e) => hanldeDiscount(e)}
              />
            </label>
            <label>
              Product New Price:
              <input
                type="text"
                value={product.newPrice}
                onChange={(e) => handleNewPrice(e)}
              />
            </label>
            <label>
              Product Btn Text:
              <input
                type="text"
                value={product.btnText}
                onChange={(e) => handleBtn(e)}
              />
            </label>
            <label>
              Product Btn Link:
              <input
                type="url"
                value={product.btnLink}
                onChange={(e) => handleLink(e)}
              />
            </label>
<div>
              Product Features:
              <textarea
                type="text"
                rows={5}
                cols={30}
                value={product.features.join("\n")}
                onChange={(e) => handleFeatures(e)}
              />
</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold underline-offset-1 underline">
            Copy CSS
          </h1>
          <textarea className="css_textarea" value={productBoxCSS} readOnly />
          <button
            className="bg-blue-700 text-white p-3 rounded-md w-fit mt-8"
            onClick={() => window.navigator.clipboard.writeText(productBoxCSS)}
          >
            Copy CSS
          </button>
        </div>
        <button
          className="bg-blue-700 text-white p-3 rounded-md w-fit mt-8"
          onClick={generateCode}
        >
          Generate Code
        </button>
      </div>
    </div>
    {open && <Modal code={code} setOpen={setOpen} />}

    </main>
  );
}

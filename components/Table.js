"use client";

import React, { useState } from "react";
import { poppins } from "../app/font";
import "../styles/globals.css";
import "../styles/table.css";
import Image from "next/image";

export default function TableGenerator() {
  const [product1, setProduct1] = useState({
    productName: "",
    productImage: "",
    productFeat: [],
    btnText: "",
    btnLink: "",
  });

  const handleProductName = (e) => {
    setProduct1({ ...product1, productName: e.target.value });
  };

  const handleProductImg = (e) => {
    setProduct1({ ...product1, productImage: e.target.value });
  };

  const handleFeatures = (e) => {
    setProduct1({ ...product1, productFeat: e.target.value.split(",") });
  };

  const handleBtn = (e) => {
    setProduct1({ ...product1, btnText: e.target.value });
  };
  const handleLink = (e) => {
    setProduct1({ ...product1, btnLink: e.target.value });
  };

  return (
    <main className={poppins.className}>
      <div className="table_container">
        <div className="card">
          <span className="product_name">
            {product1.productName || "Product 1"}
          </span>
          <div className="product_image">
            <img
              src={product1.productImage || "/product.png"}
              width={150}
              height={150}
            />
          </div>

          <ul className="product_feat">
            <li>Product Feature Specs 1</li>
            <li>Product Feature Specs 1</li>
            <li>Product Feature Specs 1</li>
            <li>Product Feature Specs 1</li>
          </ul>
          <div className="cta_btn">
            <a href="#" className="btn">
              Check on Amazon
            </a>
          </div>
        </div>
        <div className="card">
          <span className="product_name">Product 1</span>
          <div className="product_image">
            <Image src="/product.png" width={150} height={150} />
          </div>

          <ul className="product_feat">
            {product1.productFeat.length > 0 ? (
              product1.productFeat.map((feature, i) => <li>{feature}</li>)
            ) : (
              <>
                {" "}
                <li>Product Feature Specs 1</li>
                <li>Product Feature Specs 1</li>
                <li>Product Feature Specs 1</li>
                <li>Product Feature Specs 1</li>
              </>
            )}
          </ul>
          <div className="cta_btn">
            <a href={product1.btnLink} className="btn">
              {product1.btnText || "Check on Amazon"}
            </a>
          </div>
        </div>
        <div className="card">
          <span className="product_name">Product 1</span>
          <div className="product_image">
            <Image src="/product.png" width={150} height={150} />
          </div>

          <ul className="product_feat">
            <li>Product Feature Specs 1</li>
            <li>Product Feature Specs 1</li>
            <li>Product Feature Specs 1</li>
            <li>Product Feature Specs 1</li>
          </ul>
          <div className="cta_btn">
            <a href="#" className="btn">
              Check on Amazon
            </a>
          </div>
        </div>
      </div>

      <div className="product_input">
        <label>
          Product1 Name:
          <input type="text" onChange={(e) => handleProductName(e)} />
        </label>
        <label>
          Product1 Image:
          <input type="text" onChange={(e) => handleProductImg(e)} />
        </label>

        <label>
          Product1 Features:
          <textarea
            type="text"
            rows={5}
            cols={30}
            onChange={(e) => handleFeatures(e)}
          />
        </label>

        <label>
          Product1 Btn Text:
          <input
            type="text"
            rows={5}
            cols={30}
            onChange={(e) => handleBtn(e)}
          />
        </label>

        <label>
          Product1 Btn Link:
          <input
            type="url"
            rows={5}
            cols={30}
            onChange={(e) => handleLink(e)}
          />
        </label>
      </div>
    </main>
  );
}

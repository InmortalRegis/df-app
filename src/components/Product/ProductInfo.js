/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ProductInfo.css";
import HeartIcon from "../Icons/Heart";

const ProductSellerInfo = ({ sellerName }) => {
  return (
    <span className="product__seller">
      Vendido y entregado:{" "}
      <a href="#" className="product__seller-name">
        {sellerName}
      </a>
    </span>
  );
};

const ProductInfoRow = ({ brand, productName, sellerName }) => {
  return (
    <div className="product__info-row">
      <div style={{ marginRight: "12px" }}>
        <p className="product__brand">{brand}</p>
        <h5 className="product__name">{productName}</h5>
        <ProductSellerInfo sellerName={sellerName} />
      </div>

      <HeartIcon />
    </div>
  );
};

const ProductInfo = ({ product }) => {
  return (
    <div className="product__info">
      <ProductInfoRow
        brand={product.brand}
        productName={product.productname}
        sellerName={product.seller}
      />
    </div>
  );
};

export default ProductInfo;

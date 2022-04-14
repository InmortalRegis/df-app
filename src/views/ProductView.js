import React from "react";
import ProductInfo from "../components/Product/ProductInfo";
import ProductImage from "../components/Product/ProductImage";
import "./ProductView.css";
import ProductSizes from "../components/Product/ProductSizes";
import AccordionSection from "../components/AccordionSection";

const ProductView = ({ product }) => {
  return (
    <div className="product">
      <ProductImage src={product.productimage} alt={product.productname} />
      <div className="product__info-div">
        <ProductInfo product={product} />
        <ProductSizes sizes={product.sizes} />
        <AccordionSection title="Descripción" content={product.description} />
        <AccordionSection
          title="Detalles del producto"
          content={product.description}
        />
      </div>
    </div>
  );
};

export default ProductView;

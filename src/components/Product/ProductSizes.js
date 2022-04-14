import React from "react";
import "./ProductSizes.css";
import TwitterIcon from "../Icons/Twitter";
import FacebookIcon from "../Icons/Facebook";
import WhatsappIcon from "../Icons/Whatsapp";
const ProductSizes = ({ sizes }) => {
  return (
    <div className="product-sizes">
      <p className="product-sizes__title">TALLE</p>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          width: "90vw",
          marginBottom: "1.5rem",
        }}
      >
        {sizes.map((s, i) => (
          <div className="product-sizes__size" key={i}>
            {s.size}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TwitterIcon
          style={{
            marginRight: "10px",
          }}
        />
        <FacebookIcon
          style={{
            marginRight: "10px",
          }}
        />
        <WhatsappIcon />
      </div>
      {/* <p className="product-sizes__title">TALLE</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div>
          {sizes.map((s, i) => (
            <div className="product-sizes__size" key={i}>
              {s.size}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductSizes;

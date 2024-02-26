import CustomButton from "components/UI/CustomButton";

import { productText } from "data/productText";

import "./product-page.scss";
import "./product-page-media.scss";

const ProductPage = () => {
  return (
    <div className="productSection">
      <div className="productSection-title">Наш продукт</div>
      <div className="productSection-content">
        <div className="content-picture">
          <img src="/product.svg" alt=""></img>
        </div>
        <div className="content-text">
          <div className="title">TenderChad</div>
          <div className="text__line"></div>
          <div className="description">{productText}</div>
          <CustomButton
            color="black"
            value="Подробнее"
            onClick={() => window.open("https://tenderchad.ru/", "_blank")}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import { useContext, useEffect, useRef } from "react";
import "./ProductDetailModal.scss";
import { X } from "@phosphor-icons/react";
import { ProductModalContext } from "../../../context/ProductModalContext";
import ProductDetails from "../../../features/product/ProductDetails/ProductDetails";

const ProductDetailModal = () => {
  const modalRef = useRef(null);

  const { isProdModalOpen, dispatch: modalDispatch } =
    useContext(ProductModalContext);
  const closeProdModal = () => {
    modalDispatch({
      type: "CLOSE_PROD_MODAL",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;
      if (clickedElement.classList.contains("comp-product-view")) {
        modalDispatch({
          type: "CLOSE_PROD_MODAL",
        });
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [modalDispatch]);

  return (
    <div
      className={`comp-product-view-modal ${isProdModalOpen ? "show" : ""}`}
      ref={modalRef}
    >
      <div className="segment-product-view-modal-wrapper">
        <button className="product-view-close-btn" onClick={closeProdModal}>
          <X size={16} />
        </button>
        <div className="segment-product-view-modal scrollbar">
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;

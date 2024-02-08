import { X } from "@phosphor-icons/react";
import "./AddCardModal.scss";
import { useContext, useEffect, useRef } from "react";
import { AddCardModalContext } from "../../../context/AddCardModalContext";

const AddCardModal = () => {
  const { isAddCardModalOpen, dispatch } = useContext(AddCardModalContext);

  const addCardModalRef = useRef(null);

  const closeAddCardModal = () => {
    dispatch({
      type: "CLOSE_ADD_CARD_MODAL",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;
      if (
        addCardModalRef.current &&
        !addCardModalRef.current.contains(event.target) &&
        !clickedElement.closest(".add-card-btn")
      ) {
        closeAddCardModal();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`comp-add-card-modal ${isAddCardModalOpen ? "show" : ""}`}>
      <div className="segment-add-card-modal" ref={addCardModalRef}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={closeAddCardModal}
        >
          <X size={16} />
        </button>
        <div className="modal-add-card-head">
          <h4 className="add-card-ttl">add new card</h4>
        </div>
        <div className="modal-add-card-body">
          <form action="">
            <div className="form-elems-wrap">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Name on Card
                </label>
                <input type="text" className="form-ctrl" />
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Card Number
                </label>
                <input type="text" className="form-ctrl" />
              </div>
              <div className="form-elem-cols-2">
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Expire Date
                  </label>
                  <input type="text" className="form-ctrl" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    CVC
                  </label>
                  <input type="text" className="form-ctrl" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm form-btn">
              <div className="btn-text">add card</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;

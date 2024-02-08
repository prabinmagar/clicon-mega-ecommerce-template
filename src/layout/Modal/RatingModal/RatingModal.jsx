import { Star } from "@phosphor-icons/react/dist/ssr";
import "./RatingModal.scss";
import { CaretDown, X } from "@phosphor-icons/react";
import { useContext, useEffect, useRef, useState } from "react";
import { RatingModalContext } from "../../../context/RatingModalContext";

const RatingModal = () => {
  const { isRatingModalOpen, dispatch } = useContext(RatingModalContext);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const optionsRef = useRef(null);
  const ratingModalRef = useRef(null);
  const [ratingVal, setRatingVal] = useState(0);

  const closeRatingModal = () => {
    dispatch({
      type: "CLOSE_RATING_MODAL",
    });
  };

  const handleOptionsVisibility = () => {
    setIsOptionsVisible((prevVal) => !prevVal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setIsOptionsVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;
      if (
        ratingModalRef.current &&
        !ratingModalRef.current.contains(event.target) &&
        !clickedElement.closest(".rating-modal-open-btn")
      ) {
        closeRatingModal();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`comp-rating-modal ${isRatingModalOpen ? "show" : ""}`}>
      <div className="segment-rating-modal" ref={ratingModalRef}>
        <button
          type="button"
          className="rating-modal-close-btn"
          onClick={closeRatingModal}
        >
          <X size={16} />
        </button>
        <div className="modal-rating-head">
          <h4 className="rating-head-ttl">leave a rating</h4>
        </div>
        <div className="modal-rating-body">
          <form action="" className="modal-form">
            <div className="form-elems-wrap">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Rating
                </label>
                <div className="form-select" ref={optionsRef}>
                  <div
                    className="form-select-active"
                    onClick={handleOptionsVisibility}
                  >
                    <div className="rating-content">
                      <div className="rating-stars">
                        {Array.from({ length: ratingVal }).map((_, index) => (
                          <Star key={index} size={16} weight="fill" />
                        ))}
                      </div>
                      <div className="rating-text">{ratingVal} Star Rating</div>
                    </div>
                    <button className="form-select-btn">
                      <CaretDown size={16} />
                    </button>
                  </div>
                  {isOptionsVisible && (
                    <div className="form-select-options">
                      {Array.from({ length: 5 }).map((_, index) => {
                        return (
                          <div
                            className="form-select-option"
                            key={index}
                            onClick={() => setRatingVal(index + 1)}
                          >
                            <div className="rating-content">
                              <div className="rating-stars">
                                {Array.from({ length: index + 1 }).map(
                                  (_, index) => (
                                    <Star key={index} size={16} weight="fill" />
                                  )
                                )}
                              </div>
                              <div className="rating-text">
                                {index + 1} Star Rating
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Feedback
                </label>
                <textarea
                  name=""
                  className="form-ctrl"
                  placeholder="Write down your feedback about our product & services"
                ></textarea>
              </div>
              <button type="button" className="btn btn-primary form-btn">
                <span className="btn-text">publish review</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import "./PaymentOption.scss";
import { Copy, DotsThreeOutline } from "@phosphor-icons/react";
import { Icons } from "../../../../assets/icons";
import { PropTypes } from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import { AddCardModalContext } from "../../../../context/AddCardModalContext";

const PAYMENT_OPTION = [
  {
    id: 1,
    balanceAmount: "95, 400.00",
    cardNumber: "0048 5475 1232 3814",
    cardOwner: "Kevin Gilbert",
    cardCompany: Icons.VisaCard,
  },
  {
    id: 2,
    balanceAmount: "87, 583.00",
    cardNumber: "9974 1110 8651 1761",
    cardOwner: "Kevin Gilbert",
    cardCompany: Icons.MasterCard,
  },
];

const formatCardNumber = (number) => {
  const lastFourDigits = number.slice(-4);
  return `**** **** **** ${lastFourDigits}`;
};

const PaymentOption = () => {
  const { dispatch: modalDispatch } = useContext(AddCardModalContext);

  const openAddCardModal = () => {
    modalDispatch({
      type: "OPEN_ADD_CARD_MODAL",
    });
  };

  return (
    <div className="comp-payment-option">
      <div className="payment-option-head">
        <h3 className="payment-option-ttl">payment option</h3>
        <Link to="" className="link link-primary add-card-btn" onClick={openAddCardModal}>
          <span className="link-text">Add Card</span>
          <span className="link-icon">
            <ArrowRight size={20} />
          </span>
        </Link>
      </div>
      <div className="payment-option-cards">
        {PAYMENT_OPTION?.map((payOption) => {
          return <PaymentCard key={payOption.id} payOption={payOption} />;
        })}
      </div>
    </div>
  );
};

export default PaymentOption;

const PaymentCard = ({ payOption }) => {
  const [cardNumber, setCardNumber] = useState(null);
  const cardActionsRef = useRef(null);
  const [isActionsVisible, setIsActionsVisible] = useState(false);

  useEffect(() => {
    setCardNumber(formatCardNumber(payOption.cardNumber));
  }, [payOption.cardNumber]);

  const handleActionsVisibility = () =>
    setIsActionsVisible((prevVal) => !prevVal);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cardActionsRef.current &&
        !cardActionsRef.current.contains(event.target)
      ) {
        setIsActionsVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="option-card">
      <div className="option-card-top">
        <div className="option-card-amount">${payOption.balanceAmount} USD</div>
        <div className="option-card-action" ref={cardActionsRef}>
          <button
            type="button"
            onClick={handleActionsVisibility}
            className="card-action-dots"
          >
            <DotsThreeOutline size={20} weight="fill" />
          </button>
          {isActionsVisible && (
            <div className="card-actions-list">
              <button type="button" className="card-action-item">
                Edit Card
              </button>
              <button type="button" className="card-action-item">
                Delete Card
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="option-card-details">
        <div className="option-card-lbl">card number</div>
        <div className="option-card-number">
          <div className="card-number-val">
            {cardNumber?.split(" ").map((cardNum, index) => {
              return <span key={index}>{cardNum}</span>;
            })}
          </div>
          <button type="button" className="card-number-btn">
            <Copy size={20} />
          </button>
        </div>
      </div>
      <div className="option-card-bottom">
        <div className="option-card-company">
          <img src={payOption.cardCompany} alt="" />
        </div>
        <div className="option-card-owner">Kevin Gilbert</div>
      </div>
    </div>
  );
};

PaymentCard.propTypes = {
  payOption: PropTypes.object,
};

import PaymentOption from "../../../components/pages/dashboard/PaymentOption/PaymentOption";
import AddCardModal from "../../../layout/Modal/EditCardModal/AddCardModal";
import "./CardsAddressScreen.scss";

const CardsAddressScreen = () => {
  return (
    <div className="pg-cards-address">
      <PaymentOption />
      <div className="user-address-group">
        <div className="user-address-item user-billing-address">
          <h3 className="user-address-ttl">billing address</h3>
          <div className="user-address-content">
            <ul className="user-address-list">
              <li className="address-item-text">
                <span className="address-item-lbl">Kevin Gilbert</span>
              </li>
              <li className="address-item-text">
                East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
              </li>
              <li className="address-item-text">
                <span className="address-item-lbl">Phone Number:</span>
                +1-202-555-0118
              </li>
              <li className="address-item-text">
                <span className="address-item-lbl">Email:</span>
                kevin.gilbert@gmail.com
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-secondary btn-outline btn-sm"
            >
              <span className="btn-text">edit address</span>
            </button>
          </div>
        </div>
        <div className="user-address-item user-shipping-address">
          <h3 className="user-address-ttl">shipping address</h3>
          <div className="user-address-content">
            <ul className="user-address-list">
              <li className="address-item-text">
                <span className="address-item-lbl">Kevin Gilbert</span>
              </li>
              <li className="address-item-text">
                East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
              </li>
              <li className="address-item-text">
                <span className="address-item-lbl"> Phone Number:</span>
                +1-202-555-0118
              </li>
              <li className="address-item-text">
                <span className="address-item-lbl">Email:</span>
                kevin.gilbert@gmail.com
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-secondary btn-outline btn-sm"
            >
              <span className="btn-text">edit address</span>
            </button>
          </div>
        </div>
      </div>
      <AddCardModal />
    </div>
  );
};

export default CardsAddressScreen;

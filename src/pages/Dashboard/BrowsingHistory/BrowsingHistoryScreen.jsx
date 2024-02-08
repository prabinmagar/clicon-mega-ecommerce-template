import { CalendarBlank, MagnifyingGlass, Spinner } from "@phosphor-icons/react";
import "./BrowsingHistoryScreen.scss";
import ProductList from "../../../features/product/ProductList/ProductList";
import { products } from "../../../data/mockData";

const BrowsingHistoryScreen = () => {
  return (
    <div className="pg-browse-history">
      <div className="browse-history-head">
        <h3 className="browse-history-ttl">Browsing History</h3>
        <div className="browse-history-toggle">
          <p className="toggle-text">Turn Browsing History on/off</p>
          <div className="toggle-btn">
            <input type="checkbox" />
            <div className="switch-box">
              <span className="toggle-dot"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="browse-history-elems">
        <div className="browse-history-search">
          <span className="browse-elem-icon">
            <MagnifyingGlass size={20} />
          </span>
          <input
            className="browse-elem-control"
            type="text"
            placeholder="Search in browsing history"
          />
        </div>
        <div className="browse-history-calendar">
          <span className="browse-elem-icon">
            <CalendarBlank size={20} />
          </span>
          <input
            className="browse-elem-control"
            type="text"
            placeholder="DD/MM/YYYY"
          />
        </div>
      </div>

      <div className="browse-history-list">
        <div className="browse-history-item">
          <div className="history-item-head">
            <p className="history-item-date">17 oct, 2020</p>
          </div>
          <ProductList productItems={products.slice(4, 8)} />
        </div>

        <div className="browse-history-item">
          <div className="history-item-head">
            <p className="history-item-date">17 oct, 2020</p>
          </div>
          <ProductList productItems={products.slice(8, 11)} />
        </div>

        <div className="browse-history-item">
          <div className="history-item-head">
            <p className="history-item-date">17 oct, 2020</p>
          </div>
          <ProductList productItems={products.slice(12, 16)} />
        </div>

        <div className="browse-history-item">
          <div className="history-item-head">
            <p className="history-item-date">17 oct, 2020</p>
          </div>
          <ProductList productItems={products.slice(16, 17)} />
        </div>
      </div>

      <div className="browse-history-foot">
        <button type="button" className="btn btn-primary btn-outline">
          <span className="btn-icon">
            <Spinner size={24} />
          </span>
          <span className="btn-text">load more</span>
        </button>
      </div>
    </div>
  );
};

export default BrowsingHistoryScreen;

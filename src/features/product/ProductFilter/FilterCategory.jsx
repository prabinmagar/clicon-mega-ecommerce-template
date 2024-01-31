import "./ProductFilter.scss";

const FilterCategory = () => {
  return (
    <div className="fltr-block fltr-block-cat">
      <h3 className="fltr-block-ttl">category</h3>
      <div className="fltr-block-radlist">
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">electornics devices</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">computer & laptop</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">computer accessories</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">smartphone</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">headphone</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">mobile accessories</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">gaming console</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">camera & photo</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">TV & homes appliances</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">watchs & accessories</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">gps & navigation</span>
        </div>
        <div className="fltr-radio-item">
          <div className="fltr-radio-input">
            <input type="radio" name="category" />
            <span className="fltr-radio-check"></span>
          </div>
          <span className="fltr-radio-lbl">warable technology</span>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;

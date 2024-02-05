import "./BlogFilter.scss";

const BlogFilter = () => {
  return (
    <div className="blog-category-block blog-sidebar-block">
      <h3 className="blog-sidebar-ttl">category</h3>
      <div className="blog-category-list">
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" defaultChecked={true} />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">All</span>
        </div>
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">Electronics Devices</span>
        </div>
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">Computer & Laptop</span>
        </div>
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">Computer Accessories</span>
        </div>
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">Smartphone</span>
        </div>
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">Headphone</span>
        </div>
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">Mobile Accessories</span>
        </div>
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">Gaming Console</span>
        </div>
        <div className="blog-category-item">
          <div className="item-radio-input">
            <input type="radio" name="category" />
            <span className="item-radio-check"></span>
          </div>
          <span className="item-radio-lbl">Camera & Photo</span>
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;

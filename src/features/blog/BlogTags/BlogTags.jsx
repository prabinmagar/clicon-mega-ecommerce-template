import "./BlogTags.scss";

const BlogTags = () => {
  return (
    <div className="blog-tags-block">
      <h3 className="blog-sidebar-ttl">popular tag</h3>
      <div className="blog-tags-list">
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Game</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">iPhone</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">TV</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Asus Laptops</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Macbook</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">SSD</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Graphics Card</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Power Bank</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Smart TV</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Speaker</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Tablet</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Microwave</span>
        </div>
        <div className="blog-tags-item">
          <input type="checkbox" />
          <span className="tag-item-lbl">Samsung</span>
        </div>
      </div>
    </div>
  );
};

export default BlogTags;

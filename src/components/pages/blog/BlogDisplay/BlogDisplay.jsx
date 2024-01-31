import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import Pagination from "../../../common/Pagination/Pagination";
import "./BlogDisplay.scss";
import BlogList from "../../../../features/blog/BlogList/BlogList";

const BlogDisplay = () => {
  return (
    <div className="comp-blog-dsp">
      <div className="seg-blog-dsp">
        <div className="blog-dsp-head">
          <div className="blog-dsp-search-form">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="input-control"
                  placeholder="Search for anything ..."
                />
                <button className="input-btn">
                  <MagnifyingGlass size={20} />
                </button>
              </div>
            </form>
          </div>
          <div className="blog-dsp-sort-select">
            <p className="select-lbl">Sort by:</p>
            <div className="select-wrap">
              <select defaultValue={"trending"}>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
                <option value="">Latest</option>
              </select>
              <span className="select-icon">
                <CaretDown size={16} weight="bold" />
              </span>
            </div>
          </div>
        </div>

        {/* <ProductList productItems={products.slice(0, 24)} viewGap={true} viewRating={true} /> */}
        <BlogList />
        <Pagination />
      </div>
    </div>
  );
};

export default BlogDisplay;

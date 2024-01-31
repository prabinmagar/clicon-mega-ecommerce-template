import { ArrowRight } from "@phosphor-icons/react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import "./Pagination.scss";
import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const handlePageChange = (pageVal) => setCurrentPage(pageVal);

  return (
    <div className="comp-paginate">
      <div className="container">
        <div className="seg-paginate">
          <div className="elem-pgt-list">
            <button
              type="button"
              className="pgt-item pgt-arrow"
              disabled={currentPage === 1 ? true : false}
            >
              <ArrowLeft size={24} />
            </button>
            <div className="pgt-item-nums">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  type="button"
                  className={`pgt-item pgt-item-num ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="pgt-item pgt-arrow"
              disabled={currentPage === totalPages ? true : false}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

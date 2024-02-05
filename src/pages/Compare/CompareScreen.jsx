import { ShoppingCartSimple, Star, X } from "@phosphor-icons/react";
import { Images } from "../../assets/images";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import "./CompareScreen.scss";
import { Heart } from "@phosphor-icons/react/dist/ssr";

const CompareScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Compare",
      link: "/compare",
    },
  ];

  // useLayoutEffect(() => {
  //   const matchCellHeights = () => {
  //     const tableBlocks = document.querySelectorAll(".table-block");

  //     for (let i = 1; i <= 9; i++) {
  //       const blocksRowCells = [];
  //       tableBlocks.forEach((block) => {
  //         const tableCell = block.querySelector(`.table-cell:nth-child(${i})`);
  //         blocksRowCells.push(tableCell);
  //       });

  //       const maxHeight = Math.max(
  //         ...Array.from(blocksRowCells).map((cell) => cell.offsetHeight)
  //       );

  //       blocksRowCells.map((cell) => (cell.style.minHeight = `${maxHeight}px`));
  //     }
  //   };

  //   const handleLoad = () => {
  //     matchCellHeights();
  //     window.addEventListener("resize", matchCellHeights);
  //   };

  //   matchCellHeights();
  //   window.addEventListener("load", handleLoad);

  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //     window.removeEventListener("resize", matchCellHeights);
  //   };
  // }, []);

  return (
    <div className="pg-compare">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-compare">
          <div className="compare-table">
            <div className="table-block table-head">
              <div className="table-cell cell-product"></div>
              <div className="table-cell">Customer feedback:</div>
              <div className="table-cell">Price:</div>
              <div className="table-cell">Sold by:</div>
              <div className="table-cell">Brand:</div>
              <div className="table-cell">Model:</div>
              <div className="table-cell">Stock status:</div>
              <div className="table-cell">Size:</div>
              <div className="table-cell">Weight:</div>
            </div>
            <div className="table-block">
              <div className="table-cell cell-product scrollbar">
                <div className="product-wrap">
                  <button className="product-remove-btn">
                    <X size={16} weight="bold" />
                  </button>
                  <div className="product-img">
                    <img src={Images.ProdCompare2} alt="" />
                  </div>
                  <h3 className="product-ttl">
                    Apple iMac 24" 4K Retina Display M1 8 Core CPU, 8 Core GPU,
                    256GB SSD, Blue (MGPK3ZP/A) 2021
                  </h3>
                  <div className="product-btns">
                    <button type="button" className="btn btn-primary btn-sm">
                      <span className="btn-text">add to cart</span>
                      <span className="btn-icon">
                        <ShoppingCartSimple size={20} />
                      </span>
                    </button>
                    <button type="button" className="icon-btn icon-btn-primary">
                      <div className="btn-icon">
                        <Heart size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="table-cell cell-rate">
                <div className="rate-wrap">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="rate-icon">
                      <Star size={16} weight="fill" />
                    </span>
                  ))}
                  <span className="rate-val">(673,971,743)</span>
                </div>
              </div>
              <div className="table-cell cell-price">$899.00</div>
              <div className="table-cell">Clicon</div>
              <div className="table-cell">StarTech</div>
              <div className="table-cell">ARES M2 and ZEUS E2</div>
              <div className="table-cell cell-in-stock">in stock</div>
              <div className="table-cell">6.71 inches, 110.5cm</div>
              <div className="table-cell">650 g(7.41 oz)</div>
            </div>

            <div className="table-block">
              <div className="table-cell cell-product scrollbar">
                <div className="product-wrap">
                  <button className="product-remove-btn">
                    <X size={16} weight="bold" />
                  </button>
                  <div className="product-img">
                    <img src={Images.ProdCompare1} alt="" />
                  </div>
                  <h3 className="product-ttl">
                    Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo
                  </h3>
                  <div className="product-btns">
                    <button type="button" className="btn btn-primary btn-sm">
                      <span className="btn-text">add to cart</span>
                      <span className="btn-icon">
                        <ShoppingCartSimple size={20} />
                      </span>
                    </button>
                    <button type="button" className="icon-btn icon-btn-primary">
                      <div className="btn-icon">
                        <Heart size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="table-cell cell-rate">
                <div className="rate-wrap">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="rate-icon">
                      <Star size={16} weight="fill" />
                    </span>
                  ))}
                  <span className="rate-val">(51,746,385)</span>
                </div>
              </div>
              <div className="table-cell cell-price">$1699.00</div>
              <div className="table-cell">Apple</div>
              <div className="table-cell">Apple</div>
              <div className="table-cell">Apple iMac 24" M1 Blue 2021</div>
              <div className="table-cell cell-out-stock">in stock</div>
              <div className="table-cell">6.7 inches, 109.8 cm</div>
              <div className="table-cell">240 g (8.47 oz)</div>
            </div>

            <div className="table-block">
              <div className="table-cell cell-product scrollbar">
                <div className="product-wrap">
                  <button className="product-remove-btn">
                    <X size={16} weight="bold" />
                  </button>
                  <div className="product-img">
                    <img src={Images.ProdCompare3} alt="" />
                  </div>
                  <h3 className="product-ttl">
                    Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo
                  </h3>
                  <div className="product-btns">
                    <button type="button" className="btn btn-primary btn-sm">
                      <span className="btn-text">add to cart</span>
                      <span className="btn-icon">
                        <ShoppingCartSimple size={20} />
                      </span>
                    </button>
                    <button type="button" className="icon-btn icon-btn-primary">
                      <div className="btn-icon">
                        <Heart size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="table-cell cell-rate">
                <div className="rate-wrap">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="rate-icon">
                      <Star size={16} weight="fill" />
                    </span>
                  ))}
                  <span className="rate-val">(96,459,761)</span>
                </div>
              </div>
              <div className="table-cell cell-price">$699.00</div>
              <div className="table-cell">Clicon</div>
              <div className="table-cell">Samsung</div>
              <div className="table-cell">S21 FE</div>
              <div className="table-cell cell-in-stock">in stock</div>
              <div className="table-cell">6.4 inches, 98.9 cm</div>
              <div className="table-cell">177 g (6.24 oz)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareScreen;

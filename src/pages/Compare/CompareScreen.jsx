import { ShoppingCartSimple, Star, X } from "@phosphor-icons/react";
import { Images } from "../../assets/images";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import "./CompareScreen.scss";
import { Heart } from "@phosphor-icons/react/dist/ssr";
import { useEffect } from "react";

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

  useEffect(() => {
    const matchCellHeights = () => {
      const tblBlocks = document.querySelectorAll(".tbl-block");

      for (let i = 1; i <= 9; i++) {
        const blocksRowCells = [];
        tblBlocks.forEach((block) => {
          const tblCell = block.querySelector(`.tbl-cell:nth-child(${i})`);
          blocksRowCells.push(tblCell);
        });

        const maxHeight = Math.max(
          ...Array.from(blocksRowCells).map((cell) => cell.offsetHeight)
        );

        blocksRowCells.map((cell) => (cell.style.minHeight = `${maxHeight}px`));
      }
    };

    const handleLoad = () => {
      matchCellHeights();
      window.addEventListener("resize", matchCellHeights);
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", matchCellHeights);
    };
  }, []);

  return (
    <div className="pg-compare">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="seg-compare">
          <div className="elem-compare-tbl">
            <div className="tbl-block tbl-head">
              <div className="tbl-cell cell-prod"></div>
              <div className="tbl-cell">Customer feedback:</div>
              <div className="tbl-cell">Price:</div>
              <div className="tbl-cell">Sold by:</div>
              <div className="tbl-cell">Brand:</div>
              <div className="tbl-cell">Model:</div>
              <div className="tbl-cell">Stock status:</div>
              <div className="tbl-cell">Size:</div>
              <div className="tbl-cell">Weight:</div>
            </div>
            <div className="tbl-block">
              <div className="tbl-cell cell-prod">
                <div className="prod-wrap">
                  <button className="prod-rmv-btn">
                    <X size={16} weight="bold" />
                  </button>
                  <div className="prod-img">
                    <img src={Images.ProdCompare2} alt="" />
                  </div>
                  <h3 className="prod-ttl">
                    Apple iMac 24" 4K Retina Display M1 8 Core CPU, 8 Core GPU,
                    256GB SSD, Blue (MGPK3ZP/A) 2021
                  </h3>
                  <div className="prod-btns">
                    <button type="button" className="btn btn-primary">
                      <span className="btn-text">add to cart</span>
                      <span className="btn-icon">
                        <ShoppingCartSimple size={20} />
                      </span>
                    </button>
                    <button type="button" className="icon-btn icobtn-primary">
                      <div className="btn-icon">
                        <Heart size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="tbl-cell cell-rate">
                <div className="rate-wrap">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="rate-icon">
                      <Star size={16} weight="fill" />
                    </span>
                  ))}
                  <span className="rate-val">(673,971,743)</span>
                </div>
              </div>
              <div className="tbl-cell cell-price">$899.00</div>
              <div className="tbl-cell">Clicon</div>
              <div className="tbl-cell">StarTech</div>
              <div className="tbl-cell">ARES M2 and ZEUS E2</div>
              <div className="tbl-cell cell-in-stock">in stock</div>
              <div className="tbl-cell">6.71 inches, 110.5cm</div>
              <div className="tbl-cell">650 g(7.41 oz)</div>
            </div>

            <div className="tbl-block">
              <div className="tbl-cell cell-prod">
                <div className="prod-wrap">
                  <button className="prod-rmv-btn">
                    <X size={16} weight="bold" />
                  </button>
                  <div className="prod-img">
                    <img src={Images.ProdCompare1} alt="" />
                  </div>
                  <h3 className="prod-ttl">
                    Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo
                  </h3>
                  <div className="prod-btns">
                    <button type="button" className="btn btn-primary">
                      <span className="btn-text">add to cart</span>
                      <span className="btn-icon">
                        <ShoppingCartSimple size={20} />
                      </span>
                    </button>
                    <button type="button" className="icon-btn icobtn-primary">
                      <div className="btn-icon">
                        <Heart size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="tbl-cell cell-rate">
                <div className="rate-wrap">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="rate-icon">
                      <Star size={16} weight="fill" />
                    </span>
                  ))}
                  <span className="rate-val">(51,746,385)</span>
                </div>
              </div>
              <div className="tbl-cell cell-price">$1699.00</div>
              <div className="tbl-cell">Apple</div>
              <div className="tbl-cell">Apple</div>
              <div className="tbl-cell">Apple iMac 24" M1 Blue 2021</div>
              <div className="tbl-cell cell-out-stock">in stock</div>
              <div className="tbl-cell">6.7 inches, 109.8 cm</div>
              <div className="tbl-cell">240 g (8.47 oz)</div>
            </div>

            <div className="tbl-block">
              <div className="tbl-cell cell-prod">
                <div className="prod-wrap">
                  <button className="prod-rmv-btn">
                    <X size={16} weight="bold" />
                  </button>
                  <div className="prod-img">
                    <img src={Images.ProdCompare3} alt="" />
                  </div>
                  <h3 className="prod-ttl">
                    Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo
                  </h3>
                  <div className="prod-btns">
                    <button type="button" className="btn btn-primary">
                      <span className="btn-text">add to cart</span>
                      <span className="btn-icon">
                        <ShoppingCartSimple size={20} />
                      </span>
                    </button>
                    <button type="button" className="icon-btn icobtn-primary">
                      <div className="btn-icon">
                        <Heart size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="tbl-cell cell-rate">
                <div className="rate-wrap">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="rate-icon">
                      <Star size={16} weight="fill" />
                    </span>
                  ))}
                  <span className="rate-val">(96,459,761)</span>
                </div>
              </div>
              <div className="tbl-cell cell-price">$699.00</div>
              <div className="tbl-cell">Clicon</div>
              <div className="tbl-cell">Samsung</div>
              <div className="tbl-cell">S21 FE</div>
              <div className="tbl-cell cell-in-stock">in stock</div>
              <div className="tbl-cell">6.4 inches, 98.9 cm</div>
              <div className="tbl-cell">177 g (6.24 oz)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareScreen;

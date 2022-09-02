import React from "react";
import "../MainBlocks/MainBlocks.scss";

export default function MainBlocks() {
  return (
    <div className="blockContainer">
      <div className="teen">
        <div className="textTees">
          <h3>Tees & Knits</h3>
          <div className="line"></div>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/2090/4191/files/slide1_720x.jpg?v=1497264123" />
        <div className="bkg"></div>
      </div>
      <div className="sale">
        <div className="saleText">
          <h3>15% Off Sale</h3>
          <div className="line"></div>

          <div>
            <p>
              Use code EXTRA15 to save even more on our summer sale. Plus free
              shipping on orders over $50.
            </p>
          </div>
          <button>SHOP THE SALE</button>
        </div>
        <div className="saleColor"></div>
      </div>
      <div className="headwear">
        <div className="textMan">
          <h3>Headwear</h3>
          <div className="line"></div>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/2090/4191/files/slide1_74952ff4-d083-4234-b41b-a27c527069e3_720x.jpg?v=1548497339" />
        <div className="bkgMan"></div>
      </div>
    </div>
  );
}

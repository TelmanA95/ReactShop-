import React from "react";
import "../Location/Location.scss";

export default function Location() {
  return (
    <div className="locationContainer">
      <div className="">
        <div className="infoContainer">
          <div className="info">
            <h3>Ventura Store</h3>
            <div className="contactsInfo">
              <div className="contacts">
                <ul>
                  <li>324 E. Main St, Ventura</li>
                  <li>CA 93001</li>
                  <li>(805) 643-0737</li>
                  <li>store@email.com</li>
                </ul>
              </div>
              <div className="time">
                <ul>
                  <li>Monday - Thursday, 11:00 to 19:00</li>
                  <li>Friday & Saturday, 10:00 to 19:00</li>
                  <li>Sunday, Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContiner">
          <div className="locationImg">
            <img src="https://cdn.shopify.com/s/files/1/2090/4191/files/map-1_900x.png?v=1548498812" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Rate.css";
import { TiArrowSortedUp } from "react-icons/ti";

function Rate({ logo, forexname, abbrev, amount, percent, url }) {
  let link = "https://coinmarketcap.com/currencies/" + url;

  return (
    <div className="rate" style={{ marginLeft: "30px" }}>
      <div className="rate--img">
        <img src={logo} alt={forexname} className="rate--logo" />
        <a href={link} style={{ textDecoration: "none", color: "black" }}>
          <div className="rate--description">
            <div className="rate--forexname">{forexname}</div>
            <div className="rate--abbrev">{abbrev}</div>
          </div>
        </a>
        <div className="rate--money">
          <a href={link} style={{ textDecoration: "none", color: "black" }}>
            <div className="rate--amount">${amount}</div>
            <div className="rate--percent">
              <TiArrowSortedUp className="arrow--icon" /> {percent}%
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Rate;

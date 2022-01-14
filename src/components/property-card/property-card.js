import React, { useState } from "react";
import styles from "./property-card.module.scss";

const PropertyCard = (props) => {
  const [property, setProperty] = useState({
    name: "Property Name",
    address: "Address",
    rent: "$Base rent",
    squareFootage: "1000 sqft.",
    monthlyPSF: "$1.00/sqft/mo",
    yearlyPSF: "$1.00/sqft/year"
  });

  return (
    <div className={styles["property-card"]}>
      <div className={styles["property-card-title"]}>{property.name}</div>
      <div className={styles["property-card-description"]}>
        <div className={styles["property-card-description-address"]}>
          {property.address}
        </div>
        <div className={styles["property-card-description-rent"]}>
          {property.rent}
        </div>
        <div className={styles["property-card-description-squareFootage"]}>
          {property.squareFootage}
        </div>
        <div className={styles["property-card-description-monthlyPSF"]}>
          {property.monthlyPSF}
        </div>
        <div className={styles["property-card-description-yearlyPSF"]}>
          {property.yearlyPSF}
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {};

export default PropertyCard;

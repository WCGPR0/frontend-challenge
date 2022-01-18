import { Loader } from "../loader";
import styles from "./property-card.module.scss";

const PropertyCard = ({ data, isLoading, onClick }) => {
  const baseRent = Number.parseFloat(
    data.baseRent.replace(/[^0-9.-]+/g, "")
  ).toFixed(2);
  return (
    <div className={styles["property-card"]} onClick={() => onClick(data.id)}>
      {isLoading && <Loader />}
      <div className={styles["property-card-title"]}>{data.name}</div>
      <div className={styles["property-card-description"]}>
        <div className={styles["property-card-description-address"]}>
          {data.address1} <br />
          {data.address2}
        </div>
        <div className={styles["property-card-description-rent"]}>
          {data.baseRent}
        </div>
        <div className={styles["property-card-description-squareFootage"]}>
          {`${data.sqft} sqft.`}
        </div>
        <div className={styles["property-card-description-monthlyPSF"]}>
          {`${(baseRent / data.sqft).toFixed(2)}/sqft/mo`}
        </div>
        <div className={styles["property-card-description-yearlyPSF"]}>
          {`${((baseRent / data.sqft) * 12).toFixed(2)}/sqft/year`}
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {};

export default PropertyCard;

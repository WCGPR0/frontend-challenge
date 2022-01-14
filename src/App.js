import styles from "./App.module.scss";
import { PropertyCard } from "./components/property-card";
import { PropertyTable } from "./components/property-table";

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles["property-card-container"]}>
          {[...Array(3).keys()].map((i) => (
            <PropertyCard />
          ))}
        </div>
        <div className={styles["property-table-container"]}>
          <h2>Property Name Leases</h2>
          <PropertyTable />
        </div>
      </div>
    </div>
  );
};

export default App;

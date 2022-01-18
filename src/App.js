import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { PropertyCard } from "./components/property-card";
import { PropertyTable } from "./components/property-table";

const App = () => {
  const [properties, setProperties] = useState([
    {
      address1: "Address",
      address2: "",
      baseRent: "$Base rent",
      id: 1,
      isOccupied: true,
      name: "Property Name",
      sqft: 1000
    },
    {
      address1: "Address",
      address2: "",
      baseRent: "$Base rent",
      id: 2,
      isOccupied: true,
      name: "Property Name",
      sqft: 1000
    },
    {
      address1: "Address",
      address2: "",
      baseRent: "$Base rent",
      id: 3,
      isOccupied: true,
      name: "Property Name",
      sqft: 1000
    }
  ]);
  const [propertiesLoading, setPropertiesLoading] = useState(false);
  const [activePropertyLoading, setActivePropertyLoading] = useState(false);
  const [activePropertyId, setActivePropertyId] = useState();
  const [activeProperty, setActiveProperty] = useState([
    {
      id: "",
      status: "",
      companyName: "",
      startDate: "",
      inclusiveEndDate: "",
      contacts: {
        "": {}
      }
    }
  ]);

  useEffect(() => {
    setPropertiesLoading(true);
    fetch("https://talent.ender.com/fe-challenge/properties", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: "dde70fd6-b600-43cd-b1d9-33250337b31a" })
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(
        (data) =>
          new Promise((resolve) => setTimeout(() => resolve(data), 1000))
        /** Added a fake 1s delay, to show off the spinners! :P */
      )
      .then((data) => setProperties(data))
      .catch((err) => console.error(err))
      .finally(() => setPropertiesLoading(false));
  }, []);

  useEffect(() => {
    if (!activePropertyId) return;
    setActivePropertyLoading(true);
    fetch(
      `https://talent.ender.com/fe-challenge/properties/${activePropertyId}/leases`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: "dde70fd6-b600-43cd-b1d9-33250337b31a" })
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(
        (data) =>
          new Promise((resolve) => setTimeout(() => resolve(data), 1000))
        /** Added a fake 1s delay, to show off the spinners! :P */
      )
      .then((data) => setActiveProperty(data))
      .catch((err) => console.error(err))
      .finally(() => setActivePropertyLoading(false));
  }, [activePropertyId]);

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles["property-card-container"]}>
          {[...Array(3).keys()].map((i) => (
            <PropertyCard
              key={properties[i].id}
              data={properties[i]}
              isLoading={propertiesLoading}
              onClick={(id) => setActivePropertyId(id)}
            />
          ))}
        </div>
        <div className={styles["property-table-container"]}>
          <h2>Property Name Leases</h2>
          <PropertyTable
            key={activePropertyId}
            data={activeProperty}
            isLoading={activePropertyLoading}
          />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;

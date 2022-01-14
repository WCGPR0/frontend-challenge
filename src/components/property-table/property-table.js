import React from "react";
import styles from "./property-table.module.scss";

const PropertyTable = (props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Tenant</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Lease Status</th>
          <th>Primary Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>adsadsfasdfads</td>
          <td>adsfdasfasdf</td>
          <td>sadfadfs</td>
          <td>adsfad</td>
          <td>asddafs</td>
        </tr>
      </tbody>
    </table>
  );
};

PropertyTable.propTypes = {};

export default PropertyTable;

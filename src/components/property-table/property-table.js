import { Loader } from "../loader";
import styles from "./property-table.module.scss";

const PropertyTable = ({ data, isLoading }) => {
  const tbody = isLoading ? (
    <tr>
      <td colSpan={5} className={styles.emptyRow}>
        <Loader />
      </td>
    </tr>
  ) : data.length === 0 ? (
    <tr>
      <td colSpan={5} className={styles.emptyRow} />
    </tr>
  ) : (
    data.map((tenant) => (
      <tr key={tenant.id}>
        <td>{tenant.companyName}</td>
        <td>{tenant.startDate}</td>
        <td>{tenant.inclusiveEndDate}</td>
        <td>{tenant.status}</td>
        <td>{Object.keys(tenant.contacts)[0]}</td>
      </tr>
    ))
  );
  return (
    <table
      className={`${styles.table} ${
        isLoading || data.length === 0 ? styles.emptyTable : ""
      }`}
    >
      <thead>
        <tr>
          <th>Tenant</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Lease Status</th>
          <th>Primary Contact</th>
        </tr>
      </thead>
      <tbody>{tbody}</tbody>
    </table>
  );
};

PropertyTable.propTypes = {};

export default PropertyTable;

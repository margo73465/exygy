import styles from './row.module.css'

export default function Row({ row }) {
  return (
    <tr className={styles.row}>
      <td data-label="City">{row.city}</td>
      <td data-label="Year">{row.year}</td>
      <td data-label="Median List Rent">{row.median_list_rent}</td>
      <td data-label="Median List Rent (IA)">{row.median_list_rent_ia}</td>
      <td data-label="Median List Rent (% Change From 1994)">{row.median_list_rent_percentchg_1994}</td>
      <td data-label="Median List Rent (IA % Change From 1994)">{row.median_list_rent_ia_percentchg_1994}</td>
    </tr>
  );
}

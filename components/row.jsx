import styles from './row.module.css'

export default function Row({ row }) {
  return (
    <tr className={styles.row}>
      <td>{row.city}</td>
      <td>{row.year}</td>
      <td>{row.median_list_rent}</td>
      <td>{row.median_list_rent_ia}</td>
      <td>{row.median_list_rent_percentchg_1994}</td>
      <td>{row.median_list_rent_ia_percentchg_1994}</td>
    </tr>
  );
}

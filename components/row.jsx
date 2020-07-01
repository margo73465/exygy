import styles from '../styles/row.module.css'
import keyToNameMap from '../keyToNameMap.json';

function renderData(data, label, index) {
  return <td key={index} data-label={label}>{data}</td>;
}

export default function Row({ row }) {
  return (
    <tr className={styles.row}>
      {Object.keys(keyToNameMap).map((key, i) => renderData(row[key], keyToNameMap[key], i))}
    </tr>
  );
}

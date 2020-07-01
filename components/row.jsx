import styles from './row.module.css'
import keyToNameMap from '../keyToNameMap.json';

function renderData(data, label) {
  return <td data-label={label}>{data}</td>;
}

export default function Row({ row }) {
  return (
    <tr className={styles.row}>
      {Object.keys(keyToNameMap).map(key => renderData(row[key], keyToNameMap[key]))}
    </tr>
  );
}

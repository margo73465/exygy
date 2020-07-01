import styles from './metadata.module.css'
import keyToNameMap from '../keyToNameMap.json'

export default function Metadata({ rows }) {
  return (
    <div className={styles.metadata}>
      <h1>List Rents – by city</h1>
      <div className={styles.description}>
        <h4>Description:</h4>
        <p>List rent refers to the advertised rents for available rental housing and serves as a measure of housing costs for new households moving into a neighborhood, city, county or region.</p>
        <h4>Sources:</h4> 
        <p>real Answers (1994 – 2015), no link</p>
        <p>Zillow, Metro Median Listing Price All Homes (2010-2016), <a href="http://www.zillow.com/research/data/">http://www.zillow.com/research/data/</a></p>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rows</th>
            <th>Columns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{rows}</td>
            <td>{Object.keys(keyToNameMap).length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
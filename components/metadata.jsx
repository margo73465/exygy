import styles from './metadata.module.css'

export default function Metadata() {
  return (
    <div className={styles.metadata}>
      <h4>Description:</h4>
      <p>List rent refers to the advertised rents for available rental housing and serves as a measure of housing costs for new households moving into a neighborhood, city, county or region.</p>
      <h4>Sources:</h4> 
      <p>real Answers (1994 – 2015), no link</p>
      <p>Zillow, Metro Median Listing Price All Homes (2010-2016), <a href="http://www.zillow.com/research/data/">http://www.zillow.com/research/data/</a></p>
    </div>
  );
}
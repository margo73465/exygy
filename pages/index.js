import Head from 'next/head'
import fetch from 'node-fetch'

export async function getStaticProps() {
  const res = await fetch('https://data.bayareametro.gov/resource/vpmm-yh3p.json')
  const data = await res.json();
  return { props: { data }};
}

export function Row({ row }) {
  return (
    <tr>
      <td>{row.city}</td>
      <td>{row.year}</td>
      <td>{row.median_list_rent}</td>
      <td>{row.median_list_rent_ia}</td>
      <td>{row.median_list_rent_percentchg_1994}</td>
      <td>{row.median_list_rent_ia_percentchg_1994}</td>
    </tr>
  );
}

export function Table({ data }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Year</th>
            <th>Median List Rent</th>
            <th>Median List Rent (inflation adjusted)</th>
            <th>Median List Rent (% change since 1994)</th>
            <th>Median List Rent (inflation adjusted % change since 1994)</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => <Row row={row}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default function Home({ data }) {
  return (
    <div className="container">
      <Head>
        <link href="./pages/styles.css" rel="stylesheet"></link>
      </Head>
      <Table data={data}/>
    </div>
  )
}

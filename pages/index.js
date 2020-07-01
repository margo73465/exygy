import fetch from 'node-fetch'
import Table from '../components/table'
import Metadata from '../components/metadata'

export async function getStaticProps() {
  const res = await fetch('https://data.bayareametro.gov/resource/vpmm-yh3p.json')
  const data = await res.json();
  return { props: { data }};
}

export default function Home({ data }) {
  return (
    <div className="container">
      <h1>List Rents – by city</h1>
      <Metadata />
      <Table data={data}/>
    </div>
  )
}

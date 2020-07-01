import fetch from 'node-fetch'
import Table from '../components/table'

export async function getStaticProps() {
  const res = await fetch('https://data.bayareametro.gov/resource/vpmm-yh3p.json')
  const data = await res.json();
  return { props: { data }};
}

export default function Home({ data }) {
  return (
    <div className="container">
      <Table data={data}/>
    </div>
  )
}

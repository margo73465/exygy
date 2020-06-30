import Head from 'next/head'
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
      <Head>
        <link href="./pages/styles.css" rel="stylesheet"></link>
      </Head>
      <Table data={data}/>
    </div>
  )
}

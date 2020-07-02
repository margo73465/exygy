import React from 'react'
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
      <Metadata rows={data.length}/>
      <Table data={data}/>
    </div>
  )
}

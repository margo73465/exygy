import Head from 'next/head'
import fetch from 'node-fetch'

export async function getStaticProps() {
  const data = await fetch('https://data.bayareametro.gov/resource/vpmm-yh3p.json').then(res => res.json());
  console.log(data.length);
  return { props: {}};
}

export default function Home() {
  return (
    <div className="container">
      Hullo..?
    </div>
  )
}

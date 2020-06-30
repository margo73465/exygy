import Row from './row.jsx'

export default function Table({ data }) {
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
          {data.map((row, i) => <Row key={i} row={row}/>)}
        </tbody>
      </table>
    </div>
  );
}

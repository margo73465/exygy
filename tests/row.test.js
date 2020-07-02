import React from 'react';
import Row from '../components/row.jsx';
import renderer from 'react-test-renderer';

test('renders a row', () => {
  const rowData = {
    city: "Alameda",
    county: "Alameda County",
    median_list_rent: "2087",
    median_list_rent_ia: "2087",
    median_list_rent_ia_percentchg_1994: "0.4808",
    median_list_rent_percentchg_1994: "1.575",
    source: "real Answers",
    year: "2015"
  };
  const component = renderer.create(<Row row={rowData}/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
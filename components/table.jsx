import React from 'react'
import Row from './row.jsx'
import styles from '../styles/table.module.css'
import keyToNameMap from '../keyToNameMap.json'

function sortRows(data, sortBy, ascending) {
  return data.sort((a, b) => {
    if ( a[sortBy] < b[sortBy] ) {
      return ascending ? -1 : 1;
    }
    if ( a[sortBy] > b[sortBy] ) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      sortBy: 'city',
      sortAscending: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const columnClicked = event.target.dataset.id;
    const newState = this.state;
    newState.sortAscending = this.state.sortBy === columnClicked ?
      !this.state.sortAscending :
      false;
    newState.sortBy = columnClicked;
    this.setState(newState);
  }

  renderArrow(key) {
    if ( this.state.sortBy === key ) {
      return (
        <span className={styles.arrow}>
          {this.state.sortAscending ? '▲' : '▼'}
        </span>
      );
    }
  }

  renderColumnHeaders() {
    return Object.keys(keyToNameMap).map(key => {
      return (
        <th key={key}
            data-id={key}
            onClick={this.handleClick}>
          {keyToNameMap[key]}
          {this.renderArrow(key)}
        </th>
      );
    });
  }

  renderRows() {
    let sortedRows = sortRows(this.data, this.state.sortBy, this.state.sortAscending);
    return sortedRows.map((row, i) => <Row key={i} row={row}/>);
  }

  render() {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            {this.renderColumnHeaders()}
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

export default Table;
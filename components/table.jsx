import Row from './row.jsx'
import styles from './table.module.css'
import keyToNameMap from '../keyToNameMap.json'

function getSortedRows(data, sortBy) {
  return data.sort((a, b) => {
    if ( a[sortBy] < b[sortBy] ) {
      return -1;
    }
    if ( a[sortBy] > b[sortBy] ) {
      return 1;
    }
    return 0;
  });
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      sortBy: 'city'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      sortBy: event.target.dataset.id
    });
  }

  renderColumnHeaders() {
    return Object.keys(keyToNameMap).map(key => {
      return (
        <th key={key}
            className={this.state.sortBy === key ? styles.sortedBy : ''}
            data-id={key}
            onClick={this.handleClick}>
          {keyToNameMap[key]}
        </th>
      );
    });
  }

  renderRows() {
    const sortedRows = getSortedRows(this.data, this.state.sortBy);
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
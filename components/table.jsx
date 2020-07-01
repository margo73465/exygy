import Row from './row.jsx'
import styles from './table.module.css'

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

  getSortedRows(data) {
    const sortBy = this.state.sortBy;
    if ( sortBy === 'city' ) {
      this.data.sort((a, b) => {
        if ( a.city < b.city ) {
          return -1;
        }
        if ( a.city > b.city ) {
          return 1;
        }
        return 0;
      });
    } else {
      this.data.sort((a, b) => {
        return a[sortBy] - b[sortBy];
      });
    }
    return this.data;
  }

  render() {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th data-id="city" onClick={this.handleClick}>City</th>
            <th data-id="year" onClick={this.handleClick}>Year</th>
            <th data-id="median_list_rent" onClick={this.handleClick}>Median List Rent</th>
            <th data-id="median_list_rent_ia" onClick={this.handleClick}>Median List Rent (IA)</th>
            <th data-id="median_list_rent_percentchg_1994" onClick={this.handleClick}>Median List Rent (% Change From 1994)</th>
            <th data-id="median_list_rent_ia_percentchg_1994" onClick={this.handleClick}>Median List Rent (IA % change since 1994)</th>
          </tr>
        </thead>
        <tbody>
          {this.getSortedRows().map((row, i) => <Row key={i} row={row}/>)}
        </tbody>
      </table>
    );
  }
}

export default Table;
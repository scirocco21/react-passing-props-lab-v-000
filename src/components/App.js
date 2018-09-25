import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

    fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
    }

    handleFilterChange = event => {
      console.log('new filter: ', event.target.value);
      this.setState({ currentFilter: event.target.value });
    }

    render() {
      return (
        <div>
          <FruitBasket
            filters={this.state.filters}
            fruit={this.state.fruit}
            currentFilter={this.state.currentFilter}
            updateFilterCallback={this.handleFilterChange}
          />
        </div>
      )
    }

  }

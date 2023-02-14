import { Component } from 'react';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handelSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;

    onSubmit(value);
    this.setState({ value: '' }); 
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

 
  render() {
    const { value } = this.state;


    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handelSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            name="search"
            value={value}
            onChange={this.handleChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
 export default Searchbar;
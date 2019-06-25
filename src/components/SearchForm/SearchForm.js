import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  handleChange = ({ target }) => {
    this.props.onChange(target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.props;
    const { onSubmit } = this.props;
    onSubmit(value);
  };

  render() {
    const { value } = this.props;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={value}
          onChange={this.handleChange}
          placeholder="Search images..."
        />
      </form>
    );
  }
}
export default SearchForm;

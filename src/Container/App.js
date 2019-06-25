import React, { Component, createRef } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm/SearchForm';
import Gallery from '../components/Gallery/Gallery';
import styles from './App.module.css';

const API_KEY = '12823669-c4c6a1e276b1258dc64881175';

class App extends Component {
  state = {
    page: 1,
    imagesList: [],
    input: '',
    isLoading: false,
  };

  buttonLoadMoreRef = createRef();

  onImageFetch = value => {
    const { page, imagesList } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${API_KEY}`,
      )
      .then(data =>
        this.setState({
          imagesList: [...imagesList, ...data.data.hits],
          isLoading: false,
        }),
      )
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
      .finally(() => {
        if (page > 1) {
          const { current } = this.buttonLoadMoreRef;
          window.scrollTo({
            top: current.offsetTop - 2 * window.innerHeight,
            behavior: 'smooth',
          });
        }
      });
  };

  handleSubmit = value => {
    this.setState(
      {
        page: 1,
        imagesList: [],
        isLoading: true,
      },
      () => {
        this.onImageFetch(value);
      },
    );
  };

  handleInputChange = value => {
    this.setState({
      input: value,
    });
  };

  pageAdd = () => {
    const { input } = this.state;
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.onImageFetch(input);
      },
    );
  };

  render() {
    const { input, imagesList, isLoading } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm
          onSubmit={this.handleSubmit}
          value={input}
          onChange={this.handleInputChange}
        />
        {isLoading ? (
          <div className={styles.loader}> </div>
        ) : (
          <Gallery imgList={imagesList} />
        )}
        {imagesList.length > 0 && (
          <button
            type="button"
            onClick={this.pageAdd}
            className={styles.button}
            ref={this.buttonLoadMoreRef}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}
export default App;

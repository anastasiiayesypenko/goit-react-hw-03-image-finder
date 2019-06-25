import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';
import styles from './GalleryItem.module.css';

class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
    imgObj: PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  };

  handleModalOpen = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { imgObj } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <div className={styles.photoCard}>
          <img src={imgObj.webformatURL} alt="img" className={styles.img} />
          <div className={styles.stats}>
            <p className={styles.statsItem}>
              <i className="material-icons"> thumb_up </i> {imgObj.likes}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons"> visibility </i> {imgObj.views}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons"> comment </i> {imgObj.comments}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons"> cloud_download </i>
              {imgObj.downloads}
            </p>
          </div>
          <button
            type="button"
            className={styles.fullscreenButton}
            onClick={this.handleModalOpen}
          >
            <i className="material-icons"> zoom_out_map </i>
          </button>
        </div>
        {isModalOpen && (
          <Modal
            src={imgObj.largeImageURL}
            closeModal={this.handleModalClose}
          />
        )}
      </>
    );
  }
}

export default GalleryItem;

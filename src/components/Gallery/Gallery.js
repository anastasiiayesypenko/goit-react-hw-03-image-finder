import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem/GalleryItem';
import styles from './Gallery.module.css';

const Gallery = ({ imgList }) => (
  <ul className={styles.gallery}>
    {imgList.map(imgObj => (
      <GalleryItem key={imgObj.id} imgObj={imgObj} />
    ))}{' '}
  </ul>
);
Gallery.propTypes = {
  imgList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Gallery;

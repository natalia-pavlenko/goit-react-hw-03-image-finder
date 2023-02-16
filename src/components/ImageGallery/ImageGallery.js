import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import {GalleryList} from './ImageGallery.styled'

const ImageGallery = ({ gallery }) => {
  return (
    <GalleryList>
      <ImageGalleryItem gallery={gallery} />
    </GalleryList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

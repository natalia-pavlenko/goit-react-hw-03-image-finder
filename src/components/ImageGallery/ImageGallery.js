import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ gallery }) => {
  return (
    <ul>
      <ImageGalleryItem gallery={gallery} />
    </ul>
  );
};

export default ImageGallery;

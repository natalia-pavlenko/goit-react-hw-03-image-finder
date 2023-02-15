import { Component } from 'react';
// import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    largeImg: '',
    onShowe: false,
  };

  largeImgModal = img => {
    this.setState(state => ({ onShowe: !state.onShowe }));
    this.setState({ largeImg: img });
  };

  render() {
    const { gallery } = this.props;
    return (
      <>
        {gallery.map(({ webformatURL, id, largeImageURL }) => {
          return (
            <li key={id} onClick={() => this.largeImgModal(largeImageURL)}>
              <img src={webformatURL} alt="" />
            </li>
          );
        })}
        {this.state.onShowe && <Modal largeImg={this.state.largeImg} />}
      </>
    );
  }
}

export default ImageGalleryItem;
